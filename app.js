// ===== BACKEND SIMULYATSIYA (Memory Database) =====

// Data Storage
let users = [
    { id: 1, name: 'Ali Karimov', email: 'ali@example.com', phone: '+998901234567', role: 'Admin' },
    { id: 2, name: 'Nodira Shodmonova', email: 'nodira@example.com', phone: '+998902345678', role: 'User' },
    { id: 3, name: 'Shohmurod Quranov', email: 'shohmurod@example.com', phone: '+998903456789', role: 'Manager' }
];

let editingUserId = null;
let nextId = 4;

// ===== BACKEND FUNKSIYALARI =====

/**
 * CREATE - Yangi User Qo'shish
 * @param {Object} userData - User ma'lumotlari
 * @returns {Object} Yaratilgan user
 */
function addUserToBackend(userData) {
    const newUser = {
        id: nextId++,
        ...userData
    };
    users.push(newUser);
    return newUser;
}

/**
 * READ - Barcha Usersni Olish
 * @returns {Array} Barcha users
 */
function getAllUsers() {
    return users;
}

/**
 * READ - Bitta Userni ID Orqali Olish
 * @param {Number} id - User ID
 * @returns {Object|undefined} Topilgan user yoki undefined
 */
function getUserById(id) {
    return users.find(user => user.id === id);
}

/**
 * UPDATE - Userni O'zgartirilsa
 * @param {Number} id - User ID
 * @param {Object} userData - O'zgartirilgan ma'lumotlar
 * @returns {Object|null} O'zgartirilgan user yoki null
 */
function updateUserInBackend(id, userData) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...userData };
        return users[index];
    }
    return null;
}

/**
 * DELETE - Userni O'chirish
 * @param {Number} id - User ID
 * @returns {Boolean} O'chirilgan yoki yo'q
 */
function deleteUserFromBackend(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

// ===== FRONTEND FUNKSIYALARI (DOM Manipulation) =====

/**
 * Alert xabar ko'rsatish
 * @param {String} message - Xabar matni
 * @param {String} type - Xabar turi (success/error)
 */
function showAlert(message, type = 'success') {
    const alertEl = document.getElementById('alert');
    alertEl.textContent = message;
    alertEl.className = `alert alert-${type}`;
    setTimeout(() => alertEl.classList.add('hidden'), 3000);
}

/**
 * Formani tozalash
 */
function clearForm() {
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userPhone').value = '';
    document.getElementById('userRole').value = 'User';
}

/**
 * Formani validatsiya qilish
 * @returns {Boolean} Validatsiya natijasi
 */
function validateForm() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();

    if (!name || !email || !phone) {
        showAlert('❌ Barcha maydonlarni to\'ldiring!', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('❌ Email formati noto\'g\'ri!', 'error');
        return false;
    }

    return true;
}

/**
 * Yangi User Qo'shish
 */
function addUser() {
    if (!validateForm()) return;

    const userData = {
        name: document.getElementById('userName').value.trim(),
        email: document.getElementById('userEmail').value.trim(),
        phone: document.getElementById('userPhone').value.trim(),
        role: document.getElementById('userRole').value
    };

    addUserToBackend(userData);
    clearForm();
    renderUsers();
    updateStats();
    showAlert('✅ User muvaffaqiyatli qo\'shildi!', 'success');
}

/**
 * Userni Tahrirlash
 * @param {Number} id - User ID
 */
function editUser(id) {
    const user = getUserById(id);
    if (user) {
        document.getElementById('userName').value = user.name;
        document.getElementById('userEmail').value = user.email;
        document.getElementById('userPhone').value = user.phone;
        document.getElementById('userRole').value = user.role;

        editingUserId = id;

        document.getElementById('formTitle').textContent = '✏️ Userni Tahrirlash';
        document.getElementById('btnAdd').classList.add('hidden');
        document.getElementById('btnUpdate').classList.remove('hidden');
        document.getElementById('btnCancel').classList.remove('hidden');

        document.getElementById('userName').focus();
    }
}

/**
 * Userni O'zgartirilsa Saqlash
 */
function updateUser() {
    if (!validateForm()) return;

    const userData = {
        name: document.getElementById('userName').value.trim(),
        email: document.getElementById('userEmail').value.trim(),
        phone: document.getElementById('userPhone').value.trim(),
        role: document.getElementById('userRole').value
    };

    updateUserInBackend(editingUserId, userData);
    cancelEdit();
    renderUsers();
    updateStats();
    showAlert('✅ User muvaffaqiyatli o\'zgartirildi!', 'success');
}

/**
 * Tahrirlashni Bekor Qilish
 */
function cancelEdit() {
    editingUserId = null;
    clearForm();

    document.getElementById('formTitle').textContent = '➕ Yangi User Qo\'sh';
    document.getElementById('btnAdd').classList.remove('hidden');
    document.getElementById('btnUpdate').classList.add('hidden');
    document.getElementById('btnCancel').classList.add('hidden');
}

/**
 * Userni O'chirish
 * @param {Number} id - User ID
 */
function deleteUser(id) {
    if (confirm('Haqiqatan oʻchirishni xohlaysizmi?')) {
        deleteUserFromBackend(id);
        renderUsers();
        updateStats();
        showAlert('✅ User muvaffaqiyatli oʻchirildi!', 'success');
    }
}

/**
 * Users Ro'yxatini Render Qilish
 */
function renderUsers() {
    const userList = document.getElementById('userList');
    const usersData = getAllUsers();

    if (usersData.length === 0) {
        userList.innerHTML = '<div class="empty-message">Hali user qo\'shilmagan 📭</div>';
        return;
    }

    userList.innerHTML = usersData.map(user => `
        <div class="user-card">
            <div class="user-info">
                <h3>
                    <span class="user-id">#${user.id}</span>
                    ${user.name}
                </h3>
                <p>📧 ${user.email}</p>
                <p>📱 ${user.phone}</p>
                <p>👤 <strong>${user.role}</strong></p>
            </div>
            <div class="user-actions">
                <button class="btn-edit" onclick="editUser(${user.id})">✏️ Edit</button>
                <button class="btn-delete" onclick="deleteUser(${user.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

/**
 * Statistikalarni Yangilash
 */
function updateStats() {
    const usersData = getAllUsers();
    document.getElementById('totalUsers').textContent = usersData.length;
    document.getElementById('adminCount').textContent = usersData.filter(u => u.role === 'Admin').length;
    document.getElementById('managerCount').textContent = usersData.filter(u => u.role === 'Manager').length;
}

// ===== INITIAL RENDER =====
document.addEventListener('DOMContentLoaded', function () {
    renderUsers();
    updateStats();
});