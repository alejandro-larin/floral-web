import { CredentialsError } from "./error.js";

const STORAGE_KEY = "users"

function getUsers() {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
}

function saveUsers(user){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function addUser(data) {
    const users = getUsers()

    const newUser = {
        id: Date.now(),
        ...data
    }

    users.push(newUser)
    saveUsers(users)
}

export function verifyCredentials(user) {
    const users = getUsers()
    
    const userFound = users.find(u => u.email === user.email);
    
    const credentialValid = !userFound || user.password !== userFound.password

    if (credentialValid) throw new CredentialsError("Correo o contraseña incorrectos!");
}


