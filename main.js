$(document).ready(function () {
    $("#registrationForm").hide().fadeIn(2000);

    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();
        $("input").removeClass("is-invalid");

        let nome = $("#nome").val().trim();
        let email = $("#email").val().trim();
        let telefone = $("#telefone").val().trim();

        if (nome === "" || email === "" || telefone === "") {
            if (nome === "") $("#nome").addClass("is-invalid");
            if (email === "") $("#email").addClass("is-invalid");
            if (telefone === "") $("#telefone").addClass("is-invalid");
            return;
        }

        $(this).fadeOut(500, function () {
            alert("Cadastro enviado com sucesso!");
            $(this).trigger("reset").fadeIn(500);
        });
    });
});