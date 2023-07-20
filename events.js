function renderEventsClass() {
    class Events {
      constructor(time, date, name, location, category, tickets, image) {
        this.time = time;
        this.date = date;
        this.name = name;
        this.location = location;
        this.category = category;
        this.tickets = tickets;
        this.image = image;
      }
    }

    // Example usage
    const events = [
      new Events(
        '10:00 AM',
        '2022-01-01',
        'Parasailing',
        'San Francisco',
        'Vacation',
        100,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoEqXUFIxDAtdEmomrCXfvcHvqn9-3Aqwyw2pxo1pIA&s'
      ),
      new Events(
        '2:00 PM',
        '2022-01-05',
        'Hot air baloon',
        'Los Angeles',
        'Outdoor Activity',
        200,
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7c/d8/df/caption.jpg?w=1200&h=-1&s=1'
      ),
      new Events(
        '8:00 PM',
        '2022-01-10',
        'Boatride',
        'New York',
        'Entertainment',
        150,
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/93/0a/caption.jpg?w=500&h=400&s=1'
      )
    ];

    // HTML rendering
    const eventContainer = document.getElementById('eventContainer');

    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
      eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.name}">
        <h2>${event.name}</h2>
        <p>Date: ${event.date}</p>
        <p>Time: ${event.time}</p>
        <p>Location: ${event.location}</p>
        <p>Category: ${event.category}</p>
        <p>Tickets: ${event.tickets}</p>
        <button class="event-button">Buy Tickets</button>
      `;
      eventContainer.appendChild(eventCard);
    });
  }

  // Call the renderEventsClass function to display the event details
  renderEventsClass();