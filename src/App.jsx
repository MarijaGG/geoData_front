import { useEffect, useState } from 'react';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/countries');
        if (!response.ok) {
          throw new Error('Tīkla kļūda: ' + response.status);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Neizdevās iegūt datus:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  if (loading) return <p>Notiek ielāde...</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Valstu saraksts</h1>
      <ul style={{ listStyleType: 'circle' }}>
        {countries.map(country => (
          <Country key={country.id} {...country} />
        ))}
      </ul>
    </div>
  );
}

export default App;
