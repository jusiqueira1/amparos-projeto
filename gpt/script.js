document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const professionalNameSpan = document.getElementById('professional-name');
    const calendarInput = document.getElementById('calendar');

    function openModal(professionalName) {
        professionalNameSpan.textContent = professionalName;
        modal.classList.remove('hidden');
        flatpickr(calendarInput, {
            inline: true,
            onChange: function(selectedDates, dateStr, instance) {
                alert(`Consulta agendada para ${dateStr} com ${professionalName}`);
                closeModal();
            }
        });
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
});

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
