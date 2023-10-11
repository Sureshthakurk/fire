// Modules
import {signup} from '../modules/firebase.js'

// Selectors
const signupForm = document.querySelector("#signup-form")
const result = document.querySelector("#result")

// Functions
signupForm.onsubmit = async (e)=>{
    e.preventDefault()
    const user = {
        email: e.target[0].value.trim(),
        password: e.target[1].value.trim()
    }
    const {success} = await signup(user)
    if(success) return location.href = "admin.html"

    result.innerHTML = "Registration failed !"
    result.className = "text-rose-500 font-semibold"
}
