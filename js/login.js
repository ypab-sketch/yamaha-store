function logar() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        localStorage.setItem("logado", "true");
        localStorage.setItem("usuario", usuario);

        window.location.href = "../index.html";
    } else {
        document.getElementById("erro").textContent =
            "Usuário ou senha incorretos";
    }
}
