class DummyDetails {

    init() {
        const dummyLoginDetails = localStorage.getItem("dummyLoginDetails");
        if(!dummyLoginDetails) {
            localStorage.setItem("dummyLoginDetails", JSON.stringify(this.dummyLoginDetails))
        }
    }
    saveNewSignupDetails (details) {
        const {username, password} = details;
        this.dummyLoginDetails[username] = password;
        console.log(this.dummyLoginDetails)
        localStorage.setItem("dummyLoginDetails", JSON.stringify(this.dummyLoginDetails))
    }
    constructor() {
        this.dummyLoginDetails = {
            "admin": "test123",
            "sudhan": "abcdSudhan",
            "check": "check123"
        }
        this.init();
        
    }
}
class Login {
    constructor(login_form, fields) {
    this.login_form = login_form;
    this.fields = fields;
    this.data = new DummyDetails();
    this.loginDataStore = {}
    this.validationLoginSubmit();
    }
    validationLoginSubmit() {
        let self = this;
        let validLoginEntry = true;
        this.login_form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field} `);
                if(!self.validateFields(input)) {
                    error++;
                }
                if(!error) {
                    localStorage.setItem("auth", 1);
                    validLoginEntry = self.checkWithExistingData(field, input.value);  
                }
            })
            const validation_holder = document.querySelector(".validation_error_msg");
            if(validLoginEntry && !error) {
                this.login_form.submit();
                validation_holder.innerText = '';
            } else {
                validation_holder.innerText = "Invalid username or password";
            }
        })
       
    }

    checkWithExistingData (field, val) {
        //add login api here
        const loginDetails = JSON.parse(localStorage.getItem("dummyLoginDetails"));
        if(field === "username" && loginDetails[val]) {
            this.loginDataStore["username"] = val;
         return true;
        } else if(field === "password" && loginDetails[this.loginDataStore["username"]] === val){
            return true;
        } else {
            return false;
        }
    }

    validateFields(field) {
        if(field.value.trim() == '') {
            this.setStatus(
                field, `${field.id} cannot be blank `, "error"
            )
        } else {
            if(field.type === "password") {
                if(field.value.length < 5) {
                    this.setStatus(
                        field, `${field.id} requires atleast 8 charecters `, "error"
                    )  
                } else {
                    this.setStatus(
                        field, null, "success"
                    ) 
                    return true;
                }
            }
            else {
                this.setStatus(
                    field, null, "success"
                ) 
                return true;
            }
        } 
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error_message");
        if(status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
        if(status === "success") {
            errorMessage.innerText = "";
            field.classList.add("input-error");
        }
    }

}

const login_form = document.querySelector(".login_form");
if(login_form) {
    const fields = ["username", "password"];
    const validator = new Login(login_form, fields);
}


class Signup {
    constructor(signup_form, fields) {
        this.signup_form = signup_form;
        this.fields = fields;
        this.signupDataStore = {}
        this.data = new DummyDetails();
        this.validationSignup();
    }
    validationSignup() {
        let self = this;
        let validLoginEntry = true;
       
        this.signup_form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field} `);
                if(!self.validateFields(input)) {
                    error++;
                }
                if(!error) {
                    localStorage.setItem("auth", 1);
                    validLoginEntry = self.validateSignupData(field, input.value); 
                }
            })
            const validation_holder = document.querySelector(".validation_error_msg");
            if(validLoginEntry) {
                self.signup_form.submit();
                self.data.saveNewSignupDetails(this.signupDataStore);
                validation_holder.innerText = '';
            } else {
                validation_holder.innerText = "Please enter valid details and password";
            }
           
        })
       
    }

    validateSignupData (field, val) {
        //add login api here
        if(this.signupDataStore["password"]) {
           return this.signupDataStore["password"] === val;
        } else {
            this.signupDataStore[field] = val;
        }
         
    }

    validateFields(field) {
        if(field.value.trim() == '') {
            this.setStatus(
                field, `${field.id} cannot be blank `, "error"
            )
        } else {
            if(field.type === "password") {
                if(field.value.length < 5) {
                    this.setStatus(
                        field, `${field.id} requires atleast 8 charecters `, "error"
                    )  
                } else {
                    this.setStatus(
                        field, null, "success"
                    ) 
                    return true;
                }
            }
            else {
                this.setStatus(
                    field, null, "success"
                ) 
                return true;
            }
        } 
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error_message");
        if(status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
        if(status === "success") {
            errorMessage.innerText = "";
            field.classList.add("input-error");
        }
    }

    registerNewAcc() {

    }
}

const signup_form = document.querySelector(".signup_form");
if(signup_form) {
    const fields = ["username", "password", "confirm_password"];
    const validator = new Signup(signup_form, fields);
}