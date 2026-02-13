// --- BOOTSTRAP NATIVE DARK MODE TOGGLE ---
function toggleMode() {
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.textContent = '🌙';
    }
}

// --- CALENDAR LOGIC ---
let currentYear, currentMonth;

function generateCalendar(year, month) {
    let now = new Date();
    let today = now.getDate();
    let thisMonth = now.getMonth();
    let thisYear = now.getFullYear();
    
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

    document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;

    let firstDay = new Date(year, month, 1).getDay();
    let totalDays = new Date(year, month + 1, 0).getDate();

    let daysHTML = "";

    // Fill blank days before the 1st
    for (let i = 0; i < firstDay; i++) {
        daysHTML += `<div></div>`;
    }

    // Fill actual days
    for (let day = 1; day <= totalDays; day++) {
        let isToday = (day === today && month === thisMonth && year === thisYear) ? "today" : "";
        daysHTML += `<div class="day ${isToday}">${day}</div>`;
    }

    document.getElementById("days").innerHTML = daysHTML;
}

// Initialize calendar when the page loads
document.addEventListener('DOMContentLoaded', function() {
    let now = new Date();
    currentYear = now.getFullYear();
    currentMonth = now.getMonth();
    generateCalendar(currentYear, currentMonth);

    // Event listener for Previous Month button
    document.getElementById("prev-month").addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    });

    // Event listener for Next Month button
    document.getElementById("next-month").addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    });
});
