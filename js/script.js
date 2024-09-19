document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM carregado e script ativo.');

    // Função para mostrar ou esconder campos de telebusca
    function toggleTelebuscaFields(checkboxId, fieldsId) {
        const checkbox = document.getElementById(checkboxId);
        const fields = document.getElementById(fieldsId);
        if (checkbox.checked) {
            fields.style.display = 'block';
        } else {
            fields.style.display = 'none';
        }
    }

    // Inicializa a visibilidade dos campos de telebusca
    toggleTelebuscaFields('telebuscaCheckbox', 'telebuscaFields');
    toggleTelebuscaFields('telebuscaCheckboxTosa', 'telebuscaFieldsTosa');

    // Adiciona eventos de mudança nas checkboxes para mostrar/esconder campos de telebusca
    document.getElementById('telebuscaCheckbox').addEventListener('change', () => {
        toggleTelebuscaFields('telebuscaCheckbox', 'telebuscaFields');
    });

    document.getElementById('telebuscaCheckboxTosa').addEventListener('change', () => {
        toggleTelebuscaFields('telebuscaCheckboxTosa', 'telebuscaFieldsTosa');
    });

    // Agendar Banho
    document.getElementById("formAgendarBanho").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log('Formulário de agendamento de banho enviado.');

        const date = document.getElementById('dataBanho').value;
        const time = document.getElementById('horarioBanho').value;
        const minDate = new Date().toISOString().split('T')[0]; // Data mínima é o dia atual

        if (date < minDate) {
            alert('A data selecionada não pode já ter passado.');
            return;
        }

        const telebuscaCheckbox = document.getElementById('telebuscaCheckbox');
        if (telebuscaCheckbox.checked) {
            const telebuscaDate = document.getElementById('dataTelebusca').value;
            const telebuscaTime = document.getElementById('horarioTelebusca').value;
            const endereco = document.getElementById('enderecoTelebusca').value;

            if (!telebuscaDate || !telebuscaTime || !endereco) {
                alert('Por favor, preencha todos os campos da telebusca.');
                return;
            }

            if (telebuscaDate < minDate) {
                alert('A data da telebusca não pode ser no passado.');
                return;
            }

            alert(`Agendamento de Banho e Telebusca realizado com sucesso!\nData do Banho: ${date}\nHorário: ${time}\nData da Telebusca: ${telebuscaDate}\nHorário da Telebusca: ${telebuscaTime}\nEndereço: ${endereco}`);
        } else {
            if (date && time) {
                alert(`Agendamento de Banho realizado com sucesso!\nData: ${date}\nHorário: ${time}`);
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        const modal = bootstrap.Modal.getInstance(document.getElementById('modalBanho'));
        if (modal) modal.hide();
    });

    // Agendar Tosa
    document.getElementById("formAgendarTosa").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log('Formulário de agendamento de tosa enviado.');

        const date = document.getElementById('dataTosa').value;
        const time = document.getElementById('horarioTosa').value;
        const minDate = new Date().toISOString().split('T')[0];

        if (date < minDate) {
            alert(`A data selecionada deve ser a partir de ${minDate}.`);
            return;
        }

        const telebuscaCheckbox = document.getElementById('telebuscaCheckboxTosa');
        if (telebuscaCheckbox.checked) {
            const telebuscaDate = document.getElementById('dataTelebuscaTosa').value;
            const telebuscaTime = document.getElementById('horarioTelebuscaTosa').value;
            const endereco = document.getElementById('enderecoTelebuscaTosa').value;

            if (!telebuscaDate || !telebuscaTime || !endereco) {
                alert('Por favor, preencha todos os campos da telebusca.');
                return;
            }

            if (telebuscaDate < minDate) {
                alert('A data da telebusca não pode ser no passado.');
                return;
            }

            alert(`Agendamento de Tosa e Telebusca realizado com sucesso!\nData da Tosa: ${date}\nHorário: ${time}\nData da Telebusca: ${telebuscaDate}\nHorário da Telebusca: ${telebuscaTime}\nEndereço: ${endereco}`);
        } else {
            if (date && time) {
                alert(`Agendamento de Tosa realizado com sucesso!\nData: ${date}\nHorário: ${time}`);
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        const modal = bootstrap.Modal.getInstance(document.getElementById('modalTosa'));
        if (modal) modal.hide();
    });
});