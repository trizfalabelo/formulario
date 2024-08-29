document.getElementById('contactForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailValue = emailInput.value;

    if (!emailValue.endsWith('@gmail.com')) {
        emailError.textContent = 'Por favor, insira um e-mail válido com @gmail.com';
        event.preventDefault(); // Impede o envio do formulário
    } else {
        emailError.textContent = ''; // Limpa a mensagem de erro se o e-mail for válido
    }
});