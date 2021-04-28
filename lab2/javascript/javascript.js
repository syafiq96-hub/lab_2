function validateLoginForm() {
    var username = document.forms["loginForm"]["idusername"].value;
    var pass = document.forms["loginForm"]["idpass"].value;
    if ((username === "") || (pass === "")) {
        alert("Please fill out your username/password");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
}

function validateRegForm() {
    var username = document.forms["registerForm"]["idusername"].value;
    var phone = document.forms["registerForm"]["idphone"].value;
    var pass = document.forms["registerForm"]["idpass"].value;
    if ((username === "") || (pass === "" || (phone === ""))) {
        alert("Please fill out your username/phone/password");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
}