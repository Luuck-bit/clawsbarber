document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#horarios');
    const timesection = document.querySelector('#locate-section');
    
    button.addEventListener('click', () => {
        timesection.innerHTML = `
            <h3>Horários:</h3>
            <hr>
            <ul>
                <li><p> 💈 Segunda a sexta das <b>9:00</b> às <b>19:30</b></p></li>
                <li><p> 💈 Sábado das <b>07:30</b> às <b>14:00</b></p></li>
            </ul>
        `;
        timesection.style.display = 'block'; // Exibe a seção
    });
});
