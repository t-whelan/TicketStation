 // Example usage
 const events = [
    new Events(
      '10:00 AM',
      '2023-12-10',
      'Parasailing',
      'Durban',
      'Vacation',
      100,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoEqXUFIxDAtdEmomrCXfvcHvqn9-3Aqwyw2pxo1pIA&s',
      50
    ),
    new Events(
      '2:00 PM',
      '2023-11-05',
      'Hot air baloon',
      'Cape Town',
      'Outdoor Activity',
      200,
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7c/d8/df/caption.jpg?w=1200&h=-1&s=1',
      75
    ),
    new Events(
      '8:00 PM',
      '2023-09-10',
      'Boatride',
      'Eastern Cape',
      'Vacation',
      150,
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/93/0a/caption.jpg?w=500&h=400&s=1',
      100
    ),
    new Events(
      '11:00 PM',
      '2023-11-1',
      'Game Drive Safari',
      'Limpompo',
      'Adventure',
      200,
      'https://www.krugerpark.co.za/images/inyati-safari-game-drive-786x416.jpg',
      150
    ),
    new Events(
      '8:00 AM',
      '2023-11-16',
      'Bungee Jumping',
      'Western Cape',
      'Adventure',
      300,
      'https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_754863499.jpg&w=500&h=400',
      120
    ),
    new Events(
      '8:00 PM',
      '2023-10-10',
      'Wine Tasting',
      'Stellenbosch',
      'Outing',
      130,
      'https://capetogrape.co.za/wp-content/uploads/2019/12/LE-POMMIER-WINE-ESTATE-1024x683.jpg',
      110
    ),
    new Events(
      '6:00 AM',
      '2023-08-26',
      'Hiking',
      'Table Mountain',
      'adventure',
      350,
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5e/75/caption.jpg?w=500&h=400&s=1',
      20
    ),
    new Events(
      '3:00 PM',
      '2023-09-17',
      'Biking trails',
      'Cape Town',
      'Adventure',
      55,
      'https://www.wildx.co.za/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-11-at-17.24.49.jpeg',
      110
    ),
    new Events(
      '10:00 AM',
      '2023-08-14',
      'Picnic',
      'Kirstenbosch',
      'Outing',
      350,
      'https://i0.wp.com/whatsonincapetown.com/wp-content/uploads/2022/11/Prime-Picnic-Spots-Hohenhort-Hotel.png?resize=740%2C495&ssl=1',
      25
    )
  ];
   
   
   // Sample events data (Replace this with your actual data)
    const events = [
      { name: "Event 1", category: "Nature", date: "2023-08-01" },
      { name: "Event 2", category: "Water", date: "2023-08-10" },
      { name: "Event 3", category: "Adventure", date: "2023-08-15" },
      // Add more events as needed
    ];

    // Function to display events based on filters
    function displayEvents() {
      const searchQuery = document.getElementById("searchInput").value.toLowerCase();
      const categoryFilter = document.getElementById("category-filter").value;
      const dateFilter = document.getElementById("date-filter").value;

      const filteredEvents = events.filter(event => {
        const nameMatch = event.name.toLowerCase().includes(searchQuery);
        const categoryMatch = categoryFilter === "all" || event.category === categoryFilter;
        const dateMatch = dateFilter === "all" || (dateFilter === "upcoming" && new Date(event.date) >= new Date()) || (dateFilter === "passed" && new Date(event.date) < new Date());
        
        return nameMatch && categoryMatch && dateMatch;
      });

      const resultList = document.getElementById("resultList");
      resultList.innerHTML = "";

      filteredEvents.forEach(event => {
        const li = document.createElement("li");
        li.textContent = `${event.name} - ${event.category} - ${event.date}`;
        resultList.appendChild(li);
      });
    }

    // Event listeners for filters
    document.getElementById("searchInput").addEventListener("input", displayEvents);
    document.getElementById("category-filter").addEventListener("change", displayEvents);
    document.getElementById("date-filter").addEventListener("change", displayEvents);

    // Initial display
    displayEvents();
  