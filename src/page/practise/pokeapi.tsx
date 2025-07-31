import React from 'react';
import usePagination from '../../hooks/usePagination';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card';
import { useModal } from '../../context/modalContext';
import Pagination from '../../components/Pagination/Pagination';

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

const App: React.FC = () => {
  const { fetchData } = useFetch<Pokemon>();
  const transformPokemonData = async (item: PokemonListItem): Promise<Pokemon> => {
    return await fetchData(item.url);
  };

  const { data: pokemons, loading, error, nextUrl, previousUrl, handleNextPage, handlePreviousPage } = usePagination<PokemonListItem, Pokemon>(
    'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
    transformPokemonData
  );

  const { openModal } = useModal();

  const handleOpenPokemonModal = (pokemon: Pokemon) => {
    openModal(
      'PokemonModal',
      { pokemon },
      () => {}
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-2 transition-all duration-1000 ease-out">
      <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="grid grid-cols md:grid-cols-3 items-center justify-center text-center mx-auto px-3 md:px-8 py-8 gap-2 md:gap-12 mt-24">
          {loading ? (
            <p className="text-center text-lg">載入中...</p>
          ) : error ? (
            <p className="text-center text-lg text-red-500">錯誤: {error.message}</p>
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
        <Pagination
          nextUrl={nextUrl}
          previousUrl={previousUrl}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  );
};

export default App;