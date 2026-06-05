const loginButton = document.getElementById("loginButton")
const nickname = document.getElementById("Nickname");
const password = document.getElementById("Password");

loginButton.addEventListener("click", function () {
    const nickname_storage = localStorage.getItem("username");
    const password_storage = localStorage.getItem("password");
    
    if (nickname.value == "" || password.value == ""){
        alert("Nickname/Senha Vazia")
    } else {
        login(password_storage, nickname_storage);
    }

    console.log(nickname_storage);
    console.log(password_storage)
});

function login(password_storage, nickname_storage){
    const imagem = document.getElementById("emotion profile")
    const letra = document.getElementById("h1fromLEM")
    const modal = document.querySelector(".loginErrorMessages")

    if ( password_storage === null || nickname_storage === null){
        localStorage.setItem("username", nickname.value);
        localStorage.setItem("password", password.value);
        imagem.src = "assets/content/media/Bothered Kuromi.jpg"
    } else {
        if (password_storage === password.value && nickname_storage === nickname.value){
            imagem.src = "assets/content/media/Happy Kuromi.jpg"
            letra.textContent = "Login com sucesso!"
            loginError(modal);
        } else {
            imagem.src = "assets/content/media/Scared Kuromi.jpg"
            letra.textContent = "usuario/senha incorreto!"
            loginError(modal);
        }
    }
}

function loginError(modal){
    modal.style.top = "60px"

    setTimeout(function() {
        modal.style.top = "-200px"
    }, 2500)
};