import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

interface Pokemon {
  name: string;
  url: string;
}

interface PokeApiResponse {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  console.log(pokemons)

  useEffect(() => {
    const fetchPokemons = async (url: string) => {
      const response = await axios.get<PokeApiResponse>(url);
      setPokemons(response.data.results);
    };

    fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-2 transition-all duration-1000 ease-out">
      <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="grid grid-cols-3 items-center justify-center text-center mx-auto px-3 md:px-8 py-16 gap-2 md:gap-12">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => (
            <Card key={index} title={pokemon.name}>
              {pokemon.name}
            </Card>
          ))
        ) : (
          <p className="text-center">載入中...</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default App;
