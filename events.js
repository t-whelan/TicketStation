function renderEventsClass() {
    class Events {
      constructor(time, date, name, location, category, tickets, image, price) {
        this.time = time;
        this.date = date;
        this.name = name;
        this.location = location;
        this.category = category;
        this.tickets = tickets;
        this.image = image;
        this.price = price;
      }
    }
  
    // Example usage
    const events = [
      new Events(
        '10:00 AM',
        '2022-01-01',
        'Parasailing',
        'Durban',
        'Vacation',
        100,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoEqXUFIxDAtdEmomrCXfvcHvqn9-3Aqwyw2pxo1pIA&s',
        50
      ),
      new Events(
        '2:00 PM',
        '2022-01-05',
        'Hot air baloon',
        'Cape Town',
        'Outdoor Activity',
        200,
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7c/d8/df/caption.jpg?w=1200&h=-1&s=1',
        75
      ),
      new Events(
        '8:00 PM',
        '2022-01-10',
        'Boatride',
        'Eastern Cape',
        'Vacation',
        150,
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/93/0a/caption.jpg?w=500&h=400&s=1',
        100
      ),
      new Events(
        '11:00 PM',
        '2022-01-15',
        'Game Drive Safari',
        'Limpompo',
        'Adventure',
        200,
        'https://www.krugerpark.co.za/images/inyati-safari-game-drive-786x416.jpg',
        150
      ),
      new Events(
        '8:00 AM',
        '2022-01-21',
        'Bungee Jumping',
        'Western Cape',
        'Adventure',
        300,
        'https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_754863499.jpg&w=500&h=400',
        120
      ),
      new Events(
        '8:00 PM',
        '2022-01-10',
        'Wine Tasting',
        'Stellenbosch',
        'Outing',
        130,
        'https://capetogrape.co.za/wp-content/uploads/2019/12/LE-POMMIER-WINE-ESTATE-1024x683.jpg',
        110
      ),
      new Events(
        '6:00 AM',
        '2022-01-26',
        'Hiking',
        'Table Mountain',
        'adventure',
        350,
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5e/75/caption.jpg?w=500&h=400&s=1',
        20
      ),
      new Events(
        '3:00 PM',
        '2022-01-30',
        'Biking trails',
        'Cape Town',
        'Adventure',
        55,
        'https://www.wildx.co.za/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-11-at-17.24.49.jpeg',
        110
      ),
      new Events(
        '10:00 AM',
        '2022-01-30',
        'Picnic',
        'Kirstenbosch',
        'Outing',
        350,
        'https://i0.wp.com/whatsonincapetown.com/wp-content/uploads/2022/11/Prime-Picnic-Spots-Hohenhort-Hotel.png?resize=740%2C495&ssl=1',
        25
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
        <p>Price: $${event.price}</p>
        <button class="event-button">Buy Tickets</button>
      `;
      eventContainer.appendChild(eventCard);

      const buyTicketsButton = eventCard.querySelector('.event-button');
      buyTicketsButton.addEventListener('click', () => {
        window.location.href = 'tickets.html';
      });
    });
  }
  
  // Call the renderEventsClass function to display the event details
  renderEventsClass();
  