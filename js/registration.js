document.getElementById("signin").addEventListener("click", function () {
  const username = window.prompt("Username:");
  alert(miah(username));
});

function miah(name) {
  return `Welcome, ${name}!`;
}

document.getElementById("login").addEventListener("click", function () {
  const username = window.prompt("Username:");
  alert(miah(username));
});

function miah(name) {
  return `Welcome, ${name}!`;
}


function prevent1(event) {
    event.preventDefault();
    document.getElementById("signin").innerHTML = 'PROCEEDING'

    setTimeout(() => {
        window.location.href = "SignIn.html";
    }, 2000);

}

function prevent2(event) {
    event.preventDefault();
    document.getElementById("login").innerHTML = 'PROCEEDING'
    
    setTimeout(() => {
        window.location.href = "LogIn.html";
    }, 2000);

}


function prevent(event) {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = "..//img/img4.jpg";
    }, 350);
     event.preventDefault();
    setTimeout(() => {
        window.location.href = "..//img/img10.jpg";
    }, 350);
     event.preventDefault();
    setTimeout(() => {
        window.location.href = "..//img/img5.jpg";
    }, 350);
}
