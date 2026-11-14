
// Event Data using Array of Objects

let events = [
    {
        name: "Web Development Workshop",
        category: "Technical",
        date: "2026-11-20",
        venue: "Computer Lab"
    },

    {
        name: "Dance Competition",
        category: "Cultural",
        date: "2026-11-22",
        venue: "College Hall"
    },

    {
        name: "Cricket Tournament",
        category: "Sports",
        date: "2026-11-25",
        venue: "Sports Ground"
    },

    {
        name: "Coding Competition",
        category: "Technical",
        date: "2026-11-28",
        venue: "Seminar Hall"
    }
];


// Display Events
function displayEvents() {

    let search = document.getElementById("search").value.toLowerCase();

    let category = document.getElementById("category").value;

    let date = document.getElementById("eventDate").value;

    let sort = document.getElementById("sort").value;

    let result = events.filter(function(event) {

        return event.name.toLowerCase().includes(search) &&
        (category === "All" || event.category === category) &&
        (date === "" || event.date === date);

    });


    // Sorting
    if (sort === "name") {
        result.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    if (sort === "date") {
        result.sort(function(a, b) {
            return a.date.localeCompare(b.date);
        });
    }


    // Display Event Cards
    let output = "";

    result.forEach(function(event) {

        output += `
            <div class="card">
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Date: ${event.date}</p>
                <p>Venue: ${event.venue}</p>
            </div>
        `;

    });


    document.getElementById("events").innerHTML = output;


    // No Results Found
    if (result.length === 0) {
        document.getElementById("noResult").innerHTML =
        "No Results Found";
    } else {
        document.getElementById("noResult").innerHTML = "";
    }

}


// Show all events when page loads
displayEvents();
