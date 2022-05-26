let inputPassword2 = document.getElementById('password_input');
let password = document.getElementById('password');

let cookie = getCookie('login')

function check_pass(){
    if (inputPassword2.value == 'spotifyclone') {
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

function getDate()
{
	let  today 		= new Date();
	let  dd 		= String(today.getDate()).padStart(2, '0');
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
	let  yyyy 		= today.getFullYear();

	return dd + '/' + mm + '/' + yyyy;
}

let pc_date = getDate();

document.getElementById('pcDate').value = pc_date;