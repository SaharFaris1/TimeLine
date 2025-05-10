
    document.getElementById('searchInput').addEventListener('keyup', function() {
        let query = this.value.toLowerCase();
        let timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            let title = item.querySelector('.card-title').textContent.toLowerCase();
            let description = item.querySelector('.card-text').textContent.toLowerCase();
            let date = item.querySelector('.timeline-date').textContent.toLowerCase(); 

            if (title.includes(query) || description.includes(query) || date.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });



 // عرض الاسم في الناف بار
let fullName = localStorage.getItem("fullName"); 

if (fullName) {
    document.getElementById("userGreeting").innerText = `Hello, ${fullName}!`;
} else {
    document.getElementById("userGreeting").innerText = "Hello, Guest!";
}






// if user add new event 


    document.getElementById("newEventForm").addEventListener('submit', function(event) {
        event.preventDefault(); 
    
 
        let eventName = document.getElementById("eventName").value;
        let eventDate = document.getElementById("eventDate").value;
        let eventDescription = document.getElementById("eventDescription").value;
    
    
        let newEvent = {
            name: eventName,
            date: eventDate,
            description: eventDescription
        };
    
     
        let events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));
    
    
        document.getElementById("newEventForm").reset();
        displayEvents();
    });
    

    function displayEvents() {
        const eventsContainer = document.getElementById("eventsContainer");
        eventsContainer.innerHTML = "";
    
        const events = JSON.parse(localStorage.getItem("events")) || [];
    
        events.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.innerHTML = `<h3>${event.name}</h3>
                                  <p> ${event.date}</p>
                                  <p> ${event.description}</p>`;
            eventsContainer.appendChild(eventDiv);
        });
    }
