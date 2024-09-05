document.getElementById('cadastroPetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nomeTutor = document.getElementById('name').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const nomePet = document.getElementById('nome_pet').value.trim();
    const tipoAnimal = document.getElementById('tipo_animal').value.trim();
    const racaPet = document.getElementById('raca_pet').value.trim();
    const temperamento = document.getElementById('temperamento').value.trim();

    // Funções de validação
    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isPhoneValid(telefone) {
        const phoneRegex = /^\d{10,11}$/; // Aceita 10 ou 11 dígitos
        return phoneRegex.test(telefone);
    }

    function isFieldEmpty(value) {
        return value === "";
    }

    function isFieldLengthValid(value, min, max) {
        return value.length >= min && value.length <= max;
    }

    // Verificação de campos obrigatórios e formatos
    let errorMessage = "";

    if (isFieldEmpty(nomeTutor)) {
        errorMessage += "Nome do tutor é obrigatório.\n";
    } else if (!isFieldLengthValid(nomeTutor, 3, 50)) {
        errorMessage += "Nome do tutor deve ter entre 3 e 50 caracteres.\n";
    }

    if (isFieldEmpty(telefone)) {
        errorMessage += "Telefone é obrigatório.\n";
    } else if (!isPhoneValid(telefone)) {
        errorMessage += "Telefone inválido. Use apenas números (10 ou 11 dígitos).\n";
    }

    if (isFieldEmpty(email)) {
        errorMessage += "E-mail é obrigatório.\n";
    } else if (!isEmailValid(email)) {
        errorMessage += "E-mail inválido.\n";
    }

    if (isFieldEmpty(endereco)) {
        errorMessage += "Endereço é obrigatório.\n";
    }

    if (isFieldEmpty(nomePet)) {
        errorMessage += "Nome do pet é obrigatório.\n";
    } else if (!isFieldLengthValid(nomePet, 2, 30)) {
        errorMessage += "Nome do pet deve ter entre 2 e 30 caracteres.\n";
    }

    if (isFieldEmpty(tipoAnimal)) {
        errorMessage += "Tipo de animal é obrigatório.\n";
    }

    if (isFieldEmpty(racaPet)) {
        errorMessage += "Raça do pet é obrigatória.\n";
    }

    if (isFieldEmpty(temperamento)) {
        errorMessage += "Temperamento é obrigatório.\n";
    }

    // Se houver mensagens de erro, exibe-as
    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Exibe os dados no console (simulação de envio)
        console.log("Cadastro de Pet enviado com sucesso!");
        console.log(`Nome do Tutor: ${nomeTutor}`);
        console.log(`Telefone: ${telefone}`);
        console.log(`E-mail: ${email}`);
        console.log(`Endereço: ${endereco}`);
        console.log(`Nome do Pet: ${nomePet}`);
        console.log(`Tipo de Animal: ${tipoAnimal}`);
        console.log(`Raça do Pet: ${racaPet}`);
        console.log(`Temperamento: ${temperamento}`);

        // Exibe uma mensagem de confirmação
        alert("Cadastro de Pet enviado com sucesso!");

        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    }
});
