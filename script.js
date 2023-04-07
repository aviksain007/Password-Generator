class Password {
    constructor() {
        this.password = ""
    }


    generateStrongPassword = (len) => {
        let lChar = "abcdefghijklmnopqrstuvwxyz"
        let uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let num = "0123456789"
        let specialChar = "_@#$%^&*?~+=/*-₹"
        if (len < 8) {
            console.log("your password should not less than 8")
        }
        else {
            let i = 0
            while (i < len) {
                this.password += lChar[Math.floor(Math.random() * lChar.length)]
                this.password += uChar[Math.floor(Math.random() * uChar.length)]
                this.password += num[Math.floor(Math.random() * num.length)]
                this.password += specialChar[Math.floor(Math.random() * specialChar.length)]
                i += 4
            }
            this.password = this.password.substr(0, len)
            return this.password
        }
    }

    generateNormalPassword = (len) => {
        let char = "abcdefghijklmnopqrstuvwxyz"
        let num = "0123456789"
        if (len < 8) {
            console.log("your password should not less than 8")
        }
        else {
            let i = 0
            let pass = ""
            while (i < len) {
                pass += char[Math.floor(Math.random() * char.length)]
                pass += num[Math.floor(Math.random() * num.length)]
                i += 2
            }
            this.password = pass.substr(0, len)
            return this.password
        }
    }

    generateFunnyPassword = (len) => {
        let arr = ["Password", "NothingHere", "WinterIsComing", "NotForYou", "LeaveMeOrICallTheCops", "iforgotThePassword", "justdoit", "P@$$w0rd", "12345678", "CrazyCatLady", "SayMyName", "I_Can_See_Your_Pixels", "TellMyWifiLoveHer", "MySonIsAHacker", "ClickHereforViruses", "YoureDoneNow", "ConnectAndDie"]
        this.password = arr[Math.floor(Math.random() * arr.length)]
        return this.password

    }
}

let p = new Password()
btn1.addEventListener("click", (e) => {
    let len = passLen.value
    passLen.value = ""
    if (len < 8) alert("Password must be atleast 8 digits")
    else pass.value = p.generateStrongPassword(len)
})
btn2.addEventListener("click", (e) => {
    let len = passLen.value
    passLen.value = ""
    if (len < 8) alert("Password must be atleast 8 digits")
    else pass.value = p.generateNormalPassword(len)
})
btn3.addEventListener("click", (e) => {
    let len = passLen.value
    passLen.value = ""
    pass.value = p.generateFunnyPassword()
})
