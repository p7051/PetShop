// script.js

// Função para redirecionar para uma página
function navigateTo(page) {
    window.location.href = page;
}

// Adicionando event listeners aos links de navegação
document.addEventListener("DOMContentLoaded", () => {
    // Encontrar os links pelo ID e adicionar eventos de clique
    document.getElementById("link-produtos").addEventListener("click", () => {
        navigateTo("produtos.html");
    });

    document.getElementById("link-servicos").addEventListener("click", () => {
        navigateTo("servicos.html");
    });

    document.getElementById("link-cadastro-cliente").addEventListener("click", () => {
        navigateTo("cadastro-cliente.html");
    });

    document.getElementById("link-cadastro-pet").addEventListener("click", () => {
        navigateTo("cadastro-pet.html");
    });

    document.getElementById("link-home").addEventListener("click", () => {
        navigateTo("index.html");
    });
});



// script.js

// Função para redirecionar para uma página
function navigateTo(page) {
    window.location.href = page;
}

// Adicionando event listeners aos links de navegação
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM carregado e script ativo.');

    // Encontrar os links pelo ID e adicionar eventos de clique
    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const serviceType = event.currentTarget.getAttribute('data-service');
            console.log(`Abrindo modal para o serviço: ${serviceType}`);
            document.querySelector(`#${event.currentTarget.getAttribute('data-target')} select`).value = serviceType;
        });
    });

    document.getElementById("formAgendarBanho").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log('Formulário de agendamento de banho enviado.');

        const date = document.getElementById('dataBanho').value;
        const time = document.getElementById('horarioBanho').value;
        const minDate = new Date('2024-09-05').toISOString().split('T')[0];

        if (date < minDate) {
            alert(`A data selecionada não pode ja ter passado.`);
            return;
        }

        if (date && time) {
            alert(`Agendamento de Banho realizado com sucesso!\nData: ${date}\nHorário: ${time}`);
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalBanho'));
            if (modal) {
                modal.hide();
            } else {
                console.error('Modal não encontrado.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    document.getElementById("formAgendarTosa").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log('Formulário de agendamento de tosa enviado.');

        const date = document.getElementById('dataTosa').value;
        const time = document.getElementById('horarioTosa').value;
        const minDate = new Date('2024-09-05').toISOString().split('T')[0];

        if (date < minDate) {
            alert(`A data selecionada deve ser a partir de ${minDate}.`);
            return;
        }

        if (date && time) {
            alert(`Agendamento de Tosa realizado com sucesso!\nData: ${date}\nHorário: ${time}`);
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalTosa'));
            if (modal) {
                modal.hide();
            } else {
                console.error('Modal não encontrado.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões "Comprar"
    const buyButtons = document.querySelectorAll('.btn-dark');
  
    // Adiciona um evento de clique a cada botão
    buyButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        alert('Compra simulada com sucesso!'); // Exibe uma mensagem de simulação
      });
    });
  });