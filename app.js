let users = JSON.parse(localStorage.getItem("users")) || [];

if (users.length === 0) {
    users = [
        {
            id: 1,
            name: "Komol",
            email: "komol@example.com",
            phone: "+998 90 111 22 33",
            role: "Admin"
        },
        {
            id: 2,
            name: "Ali",
            email: "ali@gmail.com",
            phone: "+998 93 555 66 77",
            role: "User"
        },
        {
            id: 3,
            name: "Malika",
            email: "malika@work.uz",
            phone: "+998 99 888 99 00",
            role: "Manager"
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userRole = document.getElementById("userRole");

const btnAdd = document.getElementById("btnAdd");
const btnUpdate = document.getElementById("btnUpdate");
const btnCancel = document.getElementById("btnCancel");
const userList = document.getElementById("userList");

const totalUsers = document.getElementById("totalUsers");
const adminCount = document.getElementById("adminCount");
const managerCount = document.getElementById("managerCount");

let editId = null;

function renderUsers() {
    userList.innerHTML = "";

    if (users.length === 0) {
        userList.innerHTML = `<div class="empty-message">Hali user qo\'shilmagan 📭</div>`;
    } else {
        users.forEach((user) => {
            const div = document.createElement("div");
            div.classList.add("user-item");
            div.innerHTML = `
                <div>
                    <strong>${user.id}</strong><br>
                    <strong>${user.name}</strong> (${user.role})<br>
                    📧 ${user.email} <br>
                    ☎️ ${user.phone}
                </div>
                <div class="actions">
                    <button onclick="editUser('${user.id}')">✏️</button>
                    <button onclick="deleteUser('${user.id}')">🗑️</button>
                </div>
            `;
            userList.appendChild(div);
        });
    }

    totalUsers.textContent = users.length;
    adminCount.textContent = users.filter(u => u.role === "Admin").length;
    managerCount.textContent = users.filter(u => u.role === "Manager").length;

    localStorage.setItem("users", JSON.stringify(users));
}

function addUser() {
    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const phone = userPhone.value.trim();
    const role = userRole.value;

    if (!name || !email || !phone) {
        alert("Barcha maydonlarni to\'ldiring!");
        return;
    }
    const id = users.length == 0 ? 1 : users.at(-1).id + 1
    const newUser = {
        id,
        name,
        email,
        phone,
        role
    };

    users.push(newUser);
    clearForm();
    renderUsers();
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    if (!user) return;

    editId = id;
    userName.value = user.name;
    userEmail.value = user.email;
    userPhone.value = user.phone;
    userRole.value = user.role;

    document.getElementById("formTitle").textContent = "✏️ Foydalanuvchini O\'zgartirish";
    btnAdd.classList.add("hidden");
    btnUpdate.classList.remove("hidden");
    btnCancel.classList.remove("hidden");
}

function updateUser() {
    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const phone = userPhone.value.trim();
    const role = userRole.value;

    users = users.map(u =>
        u.id === editId ? { ...u, name, email, phone, role } : u
    );

    clearForm();
    renderUsers();
    cancelEdit();
}

function deleteUser(id) {
    if (confirm("Haqiqatan o\'chirmoqchimisiz?")) {
        users = users.filter(u => u.id !== id);
        renderUsers();
    }
}

function clearForm() {
    userName.value = "";
    userEmail.value = "";
    userPhone.value = "";
    userRole.value = "User";
}

function cancelEdit() {
    editId = null;
    clearForm();
    document.getElementById("formTitle").textContent = "Yangi User Qo\'sh";
    btnAdd.classList.remove("hidden");
    btnUpdate.classList.add("hidden");
    btnCancel.classList.add("hidden");
}

renderUsers();
