// frontend/pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [destination, setDestination] = useState('');
  const [occupancy, setOccupancy] = useState(1);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotels = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.elixirtrips.com/wp-json/wp/v2/hotels', {
        params: {
          destination,
          occupancy
        }
      });
      setHotels(response.data);
    } catch (err) {
      setError('Error fetching hotels');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchHotels();
  };

  return (
    <div>
      <h1>Hotel Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="number"
          placeholder="Occupancy"
          value={occupancy}
          onChange={(e) => setOccupancy(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        <h2>Hotel Results</h2>
        {hotels.length > 0 ? (
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <h3>{hotel.title.rendered}</h3>
                <p>Price per night: {hotel.acf['rate-per-night']}</p>
                <p>{hotel.acf.hotel_description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
