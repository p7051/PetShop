document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('name').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (nome === "" || telefone === "" || email === "" || endereco === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
        // Exibe os dados no console (simulação de envio)
        console.log("Cadastro enviado com sucesso!");
        console.log(`Nome: ${nome}`);
        console.log(`Telefone: ${telefone}`);
        console.log(`E-mail: ${email}`);
        console.log(`Endereço: ${endereco}`);

        // Exibe uma mensagem de confirmação
        alert("Cadastro enviado com sucesso!");

        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    }
});
