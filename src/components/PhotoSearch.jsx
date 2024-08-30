import { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8000/api/users/images/search/?query=Spain tourism');
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        setRandomImages(data.slice(0, 10)); 
      } else {
        setError('No se encontraron imágenes aleatorias.');
      }
    } catch (error) {
      setError('Error al buscar imágenes aleatorias.');
      console.error('Error al buscar imágenes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8000/api/users/images/search/?query=${query}`);
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        setImages(data);
      } else {
        setError('No se encontraron resultados para la búsqueda.');
      }
    } catch (error) {
      setError('Error al buscar imágenes.');
      console.error('Error al buscar imágenes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar sitios..."
          className="p-2 w-full max-w-lg rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Buscar
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.url} alt={image.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <p className="mt-2 text-sm font-semibold">{image.name}</p>
              </div>
            ))
          ) : (
            randomImages.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.url} alt={image.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <p className="mt-2 text-sm font-semibold">{image.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoSearch;
