
        // Sample ticket data
        const tickets = [
        { id: 1, category: "nature", date: "2023-07-25", description: "Game Drive", price: "R350" },
        { id: 2, category: "water", date: "2023-07-26", description: "Parasailing", price: "R250" },
        { id: 3, category: "adventure", date: "2023-07-28", description: "Bunjee Jumping", price: "R450" },
        { id: 4, category: "nature", date: "2023-07-25", description: "Wine tasting", price: "R350" },
        { id: 5, category: "water", date: "2023-07-26", description: "Surfing", price: "R250" },
        { id: 6, category: "adventure", date: "2023-07-28", description: "Hot Air Ballooning", price: "R450" },
        { id: 7, category: "nature", date: "2023-08-10", description: "Nature Hike", price: "R150" },
        { id: 8, category: "water", date: "2023-08-15", description: "Boat Trip", price: "R300" },
        // if needed to -Add more ticket data here
        ];
    
        
        
        // A Function to filter and render tickets based on the given filters
       function renderTickets(categoryFilter, dateFilter) {
            const ticketListElement = document.getElementById("ticketList");
            ticketListElement.innerHTML = "";



const now = new Date();
            const filteredTickets = tickets.filter((ticket) => {
                const ticketDate = new Date(ticket.date);
                if (categoryFilter === "all" || ticket.category === categoryFilter) {
                    if (dateFilter === "all") {
                        return true;
                    } else if (dateFilter === "upcoming" && ticketDate >= now) {
                        return true;
                    } else if (dateFilter === "passed" && ticketDate < now) {
                        return true;
                    }
                }
                return false;
            });
    
            if (filteredTickets.length === 0) {
                ticketListElement.innerHTML = "<p>No tickets found.</p>";
                return;
            }


            const eventImages = {
            1:"image1.jpg",
            2:"image2.jpg",
            3:"image3.jpg",
            4:"image4.jpg",
            5:"image5.jpg",
            6:"image6.jpg",
            7:"image7.jpg",
            8:"image8.jpg",

            // to Add more images as needed
            };

            // this code dynamically generates and displays the ticket information on the webpage based on the filteredTickets array. It creates a new div element for each ticket, sets its content using template literals with ticket-specific information, and appends it to the HTML,
            //  resulting in a visual representation of the filtered tickets.
    
           
           
            filteredTickets.forEach((ticket) => {
                const ticketElement = document.createElement("div");
                ticketElement.innerHTML = `
                <img src="${eventImages[ticket.id]}" alt="Ticket Image" class="ticket-image">
                                            <p>Event: ${ticket.id}</p>
                                            <p>Category: ${ticket.category}</p>
                                            <p>Date: ${ticket.date}</p>
                                            <p>Description: ${ticket.description}</p>
                                            <p>Price: ${ticket.price}</p>
                                            <button class="purchaseBtn">Purchase</button>
                                            <hr>`;
                ticketListElement.appendChild(ticketElement);
            });
        }
    





         // Event listener for the search button click
         document.getElementById("searchBtn").addEventListener("click", () => {
            const categoryFilter = document.getElementById("category").value;
            const dateFilter = document.getElementById("date-filter").value;
            renderTickets(categoryFilter, dateFilter);
        });
    
        // Initial render of all tickets
        renderTickets("all", "all");



 // Get all "Purchase" buttons and add event listeners to handle the purchase
 const purchaseButtons = document.querySelectorAll('.purchaseBtn');
  purchaseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const ticketElement = event.target.parentElement; // Get the parent element of the button, which contains the ticket information
      const ticket = {
        id: ticketElement.querySelector('p:nth-child(2)').textContent.split(':')[1].trim(),
        category: ticketElement.querySelector('p:nth-child(3)').textContent.split(':')[1].trim(),
        date: ticketElement.querySelector('p:nth-child(4)').textContent.split(':')[1].trim(),
        description: ticketElement.querySelector('p:nth-child(5)').textContent.split(':')[1].trim(),
        price: ticketElement.querySelector('p:nth-child(6)').textContent.split(':')[1].trim(),
      };

      // Redirect to a new page or open a popup to display the ticket information

      
      const ticketInfoPage = window.open('', '_blank', 'width=300,height=300');
      ticketInfoPage.document.write(`
      <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 20px;
      }
      h2 {
        color: green;
      }
      p {
        margin: 5px 0;
      }
 img {
        width: 50px; /* Set the desired width for the images */
        height: 20px; /* Set the desired height for the images */
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      }

      button {
        padding: 10px 15px;
        background-color: green;
        color: white;
        border: none;
        cursor: pointer;
      }
      button:hover {
        background-color: blue;
      }
    </style>
        <h2>Ticket Information</h2>
        <p>Event: ${ticket.id}</p>
        <p>Category: ${ticket.category}</p>
        <p>Date: ${ticket.date}</p>
        <p>Description: ${ticket.description}</p>
        <p>Price: ${ticket.price}</p>
        <button id="confirmBtn">Confirm Purchase</button> <!-- Add a Confirm Purchase button -->
      `);

      // Prevent the form submission from reloading the page
      event.preventDefault();

      // Adds an event listener to the "Confirm Purchase" button
      const confirmButton = ticketInfoPage.document.getElementById('confirmBtn');
      confirmButton.addEventListener('click', () => {
        
        // Redirect to the confirmation page
        window.location.href = 'confirm_page.html'; // Replace 'confirmation_page.html' with the actual URL of your confirmation page
      });
    });
  });




