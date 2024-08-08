// script.js
document.addEventListener('DOMContentLoaded', function() {
    const openCalendarButton = document.getElementById('openCalendar');
    const calendarContainer = document.getElementById('calendarContainer');
    const calendar = document.getElementById('calendar');
    const appointmentsList = document.getElementById('appointmentsList');
    const markedDates = new Set();

    openCalendarButton.addEventListener('click', () => {
        calendarContainer.classList.toggle('hidden');
        if (calendar.innerHTML === '') {
            createCalendar();
        }
    });

    function createCalendar() {
        const daysInMonth = new Date().getDate();
        for (let day = 1; day <= 31; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.addEventListener('click', () => {
                toggleDateMarked(dayDiv, day);
            });
            calendar.appendChild(dayDiv);
        }
    }

    function toggleDateMarked(dayDiv, day) {
        if (markedDates.has(day)) {
            markedDates.delete(day);
            dayDiv.classList.remove('marked');
            updateAppointments();
        } else {
            markedDates.add(day);
            dayDiv.classList.add('marked');
            updateAppointments();
        }
    }

    function updateAppointments() {
        appointmentsList.innerHTML = '';
        markedDates.forEach(date => {
            const listItem = document.createElement('li');
            listItem.textContent = `Consulta marcada para o dia ${date}`;
            appointmentsList.appendChild(listItem);
        });
    }
});
