// pages/api/data.js
export default function handler(req, res) {
    // Fetch data from an external API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Return fetched data as response
        res.status(200).json(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
      });
  }
  