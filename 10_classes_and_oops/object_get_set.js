const User = {
    _email : "hsdfvhs",
    _password: "dhfdhjbv",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return `${this._password}65468`
    },

    set pas_password(value){
        this._password = value
    }
}

const tea = Object.create(User)

console.log(tea.email);
console.log(tea.password);