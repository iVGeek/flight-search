document.addEventListener('DOMContentLoaded', function() {
  const flightsContainer = document.getElementById('flights');

  // Function to fetch flight data
  async function getFlights(date) {
    try {
      const response = await fetch(`https://api.example.com/flights?date=${date}`);
      if (!response.ok) {
        throw new Error('Failed to fetch flight data');
      }
      const flights = await response.json();
      displayFlights(flights);
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  }

  // Function to display flight data
  function displayFlights(flights) {
    const flightsList = document.createElement('ul');
    flights.forEach(flight => {
      const listItem = document.createElement('li');
      listItem.textContent = `Flight to ${flight.destination} on ${flight.departureDate} for $${flight.price}`;
      flightsList.appendChild(listItem);
    });
    flightsContainer.innerHTML = '';
    flightsContainer.appendChild(flightsList);
  }

  // Fetch flights for a specific date
  const currentDate = new Date().toISOString().split('T')[0];
  getFlights(currentDate);
});

