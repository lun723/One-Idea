import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import { useModal } from '../../context/modalContext';

interface PokemonListItem {
  name: string;
  url: string;
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

interface PokeApiResponse {
  results: PokemonListItem[];
  next: string | null;
  previous: string | null;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    const fetchPokemons = async (url: string) => {
      try {
        setLoading(true);
        const response = await axios.get<PokeApiResponse>(url);
        const pokemonList = response.data.results;
        setNextUrl(response.data.next);
        setPreviousUrl(response.data.previous);

        const pokemonDetails = await Promise.all(
          pokemonList.map(async (item) => {
            const detailResponse = await axios.get<Pokemon>(item.url);
            return detailResponse.data;
          })
        );

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons(currentUrl);
  }, [currentUrl]);

  const handleNextPage = () => {
    if (nextUrl) setCurrentUrl(nextUrl);
  };

  const handlePreviousPage = () => {
    if (previousUrl) setCurrentUrl(previousUrl);
  };

  // Function to open modal with specific Pokémon data
  const handleOpenPokemonModal = (pokemon: Pokemon) => {
    openModal(
      'PokemonModal',
      // Pass the Pokémon data directly (no async fetch needed)
      { pokemon },
      () => { }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-2 transition-all duration-1000 ease-out">
      <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="grid grid-cols md:grid-cols-3 items-center justify-center text-center mx-auto px-3 md:px-8 py-8 gap-2 md:gap-12 mt-24">
          {loading ? (
            <p className="text-center text-lg">載入中...</p>
          ) : pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <Card key={pokemon.id} title={pokemon.name}>
                <div className="flex flex-col gap-1">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <button
                    onClick={() => handleOpenPokemonModal(pokemon)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Open Modal
                  </button>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-lg">沒有找到寶可夢資料</p>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={!previousUrl}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
              previousUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            上一頁
          </button>
          <button
            onClick={handleNextPage}
            disabled={!nextUrl}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
              nextUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            下一頁
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;