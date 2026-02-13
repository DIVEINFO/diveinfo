// =========================================
// LATEST UPDATES AUTO-SCROLLER
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('update-scroll-container');
    const scrollList = document.getElementById('update-scroll-list');
    
    // Duplicate the list items to make the scrolling seamless
    scrollList.innerHTML += scrollList.innerHTML;
    
    let isHovered = false;
    let scrollSpeed = 0.5; // Adjust this number to make it faster or slower

    // Pause auto-scroll when hovered
    scrollContainer.addEventListener('mouseenter', () => isHovered = true);
    scrollContainer.addEventListener('mouseleave', () => isHovered = false);

    function autoScroll() {
        if (!isHovered) {
            scrollContainer.scrollTop += scrollSpeed;
            
            // If scrolled halfway down (the end of the first set of duplicated items), reset to top
            if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
                scrollContainer.scrollTop = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }
    
    // Start the scroll animation
    autoScroll();
});

// =========================================
// INTERACTIVE CALENDAR LOGIC
// =========================================
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

document.addEventListener('DOMContentLoaded', function() {
    let now = new Date();
    currentYear = now.getFullYear();
    currentMonth = now.getMonth();
    generateCalendar(currentYear, currentMonth);

    document.getElementById("prev-month").addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    });

    document.getElementById("next-month").addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    });
});
