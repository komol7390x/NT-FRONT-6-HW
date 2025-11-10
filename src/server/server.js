import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import fs from 'fs-extra'
import path from 'path'

    const app = express()
    const PORT = 5000

    app.use(cors())
    app.use(bodyParser.json())

    const JWT_SECRET = 'mysecretkey'

    const USERS_FILE = path.resolve('./users.json')

    const initUsersFile = async () => {
        const exists = await fs.pathExists(USERS_FILE)
        if (!exists) {
            console.log('users.json topilmadi, yangi fayl yaratilyapti...')
            await fs.writeJson(USERS_FILE, [], { spaces: 2 })
        }
    }

    // ------------------- login route -------------------
    app.post('/login', async (req, res) => {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                statusCode: 409,
                message: 'Email va password kerak'
            })
        }

        await initUsersFile()

        const users = await fs.readJson(USERS_FILE)

        const user = users.find(u => u.email === email && u.password === password)

        if (!user) {
            return res.status(401).json({
                statusCode: 409,
                message: 'Email yoki password noto\'g\'ri'
            })
        }

        const accessToken = jwt.sign(
            { email: user.email, username: user.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        )

        user.lastLogin = new Date().toISOString()
        await fs.writeJson(USERS_FILE, users, { spaces: 2 })

        res.json({
            message: 'success',
            statusCode: 200,
            accessToken
        })
    })

    //------------------- register -------------------
    app.post('/register', async (req, res) => {
        const { email, password, username } = req.body

        if (!email || !password || !username) {
            return res.status(400).json({ message: 'Email, username va password kerak' })
        }

        await initUsersFile()
        const users = await fs.readJson(USERS_FILE)

        const existingUser = users.find(u => u.email === email)
        if (existingUser) {
            return res.status(409).json({ message: 'Bu email oldin ro‘yxatdan o‘tgan' })
        }

        const lastId = users.length > 0 ? users[users.length - 1].id : 0
        const newId = lastId + 1

        const newUser = {
            id: newId,
            email,
            username,
            password,
            createdAt: new Date().toISOString()
        }

        users.push(newUser)
        await fs.writeJson(USERS_FILE, users, { spaces: 2 })

        const accessToken = jwt.sign(
            { id: newUser.id, email: newUser.email, username: newUser.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.status(201).json({ accessToken, message: 'Ro‘yxatdan o‘tish muvaffaqiyatli' })
    })


    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })

