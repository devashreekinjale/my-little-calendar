function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["january", "february", "march", "april", "may",
        "june", "july", "august", "september", "october", "november", "december"];
    
    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;

    const { ipcRenderer } = require('electron');

    document.getElementById("close-btn").addEventListener("click", () => {
        ipcRenderer.send("close-app");
    });

    const homePage = document.getElementById("home-page");
    const calendarPage = document.getElementById("calendar-page");

    document.getElementById("open-calendar").addEventListener("click", () => {
        homePage.classList.add("hidden");
        calendarPage.classList.remove("hidden");
    });

    document.getElementById("back-btn").addEventListener("click", () => {
        calendarPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    });

}

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


function renderCalendar(month, year) {

    const calendarGrid = document.getElementById("calendar-grid");
    const monthYear = document.getElementById("month-year");
    calendarGrid.innerHTML = "";
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    monthYear.innerText = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        calendarGrid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.innerText = day;
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayElement.classList.add("today");
        }
        calendarGrid.appendChild(dayElement);
    }
    
    const totalCells = calendarGrid.children.length;
    for (let i = totalCells; i < 42; i++) {
        const empty = document.createElement("div");
        calendarGrid.appendChild(empty);
    }
}

document.getElementById("prev-month").addEventListener("click", () => {

    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
});


document.getElementById("next-month").addEventListener("click", () => {

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
});

updateCalendar();
renderCalendar(currentMonth, currentYear);