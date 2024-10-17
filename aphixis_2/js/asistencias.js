document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const status = document.getElementById('attendance-status').value;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const attendanceRecord = {
        studentId,
        status,
        date,
        time
    };

    let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    attendance.push(attendanceRecord);
    localStorage.setItem('attendance', JSON.stringify(attendance));

    displayAttendance();
    this.reset();
});

function displayAttendance() {
    const attendanceList = document.getElementById('attendance-list');
    attendanceList.innerHTML = ''; // Limpiar la tabla

    const attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    attendance.forEach(record => {
        const row = `<tr>
            <td>${record.studentId}</td>
            <td>Nombre Estudiante</td>
            <td>${record.date}</td>
            <td>${record.time}</td>
            <td>${record.status}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Eliminar</button>
            </td>
        </tr>`;
        attendanceList.insertAdjacentHTML('beforeend', row);
    });
}
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('authenticated');
    window.location.href = 'login.html';
});
displayAttendance(); // Mostrar el historial de asistencias al cargar la página
