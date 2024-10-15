document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario está autenticado
    if (!localStorage.getItem('authenticated')) {
      window.location.href = 'login.html';
      return;
    }
  
    const logoutBtn = document.getElementById('logout-btn');
    const totalStudents = document.getElementById('total-students');
    const absencesToday = document.getElementById('absences-today');
    const peakHour = document.getElementById('peak-hour');
    const attendanceChart = document.getElementById('attendance-chart');
    const absenceFilter = document.getElementById('absence-filter');
    const topAbsencesList = document.getElementById('top-absences-list');
  
    // Evento de cierre de sesión
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('authenticated');
      window.location.href = 'login.html';
    });
  
    // Aquí deberías hacer llamadas a tu API para obtener los datos reales
    // Por ahora, usaremos datos simulados
  
    // Actualizar las tarjetas de información
    totalStudents.textContent = '250';
    absencesToday.textContent = '15';
    peakHour.textContent = '10:00';
  
    // Crear el gráfico de asistencia mensual
    new Chart(attendanceChart, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Asistencia',
          data: [200, 220, 210, 230, 225, 240],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Asistencia Mensual'
          }
        }
      }
    });
  
    // Actualizar la lista de estudiantes con más ausencias
    function updateTopAbsences(filter) {
      // Aquí deberías hacer una llamada a tu API para obtener los datos reales
      // Por ahora, usaremos datos simulados
      const absences = [
        { name: 'Juan Pablo', absences: 5 },
        { name: 'Juanpis', absences: 4 },
        { name: 'Arias', absences: 3 },
      ];
  
      topAbsencesList.innerHTML = '';
      absences.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name}: ${student.absences} ausencias`;
        topAbsencesList.appendChild(li);
      });
    }
  
    absenceFilter.addEventListener('change', (e) => {
      updateTopAbsences(e.target.value);
    });
  
    // Inicializar la lista de ausencias
    updateTopAbsences('week');
  });