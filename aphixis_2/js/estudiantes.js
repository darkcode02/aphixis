document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const phone = document.getElementById('student-phone').value;

    const student = {
        id: Date.now(),
        name,
        email,
        phone
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    this.reset();
});

function displayStudents() {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = ''; // Limpiar la tabla

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student => {
        const row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Eliminar</button>
            </td>
        </tr>`;
        studentsList.insertAdjacentHTML('beforeend', row);
    });
}

function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(student => student.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

displayStudents(); // Mostrar la lista de estudiantes al cargar la página
