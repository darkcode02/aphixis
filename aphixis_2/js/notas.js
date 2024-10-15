document.getElementById('note-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const type = document.getElementById('note-type').value;

    const note = {
        title,
        content,
        type,
        date: new Date().toLocaleDateString()
    };

    // Guardar la nota en localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Actualizar la lista de notas
    displayNotes();
    this.reset();
});

function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = ''; // Limpiar la lista

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p><small>${note.date} - ${note.type}</small>`;
        notesContainer.appendChild(noteElement);
    });
}

displayNotes(); // Mostrar las notas al cargar la página
