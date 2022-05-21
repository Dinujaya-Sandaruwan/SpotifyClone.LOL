let inputPassword2 = document.getElementById('password_input');
let password = document.getElementById('password');

let cookie = getCookie('login')
console.log(cookie)

function check_pass(){
    if (inputPassword2.value == 'dinujaya.2003') {
        password.style.display = 'none';
        document.cookie = "login=true";
    }  

}

if (cookie == 'true') {
    password.style.display = 'none';
    document.cookie = "login=true";
} 

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}