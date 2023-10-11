// Modules
import { guard, logout } from "../modules/firebase.js"

// Protector
guard("login.html")

// Selectors
const logoutBtn = document.querySelector("#logout")
const adminName = document.querySelector("#admin-name")

// Functions
adminName.innerHTML = user.email
logoutBtn.onclick = async ()=>{
    await logout()
}