import React from 'react';
import usePagination from '../../hooks/usePagination';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card';
import { useModal } from '../../context/modalContext';
import Pagination from '../../components/Pagination/Pagination';
import { Button } from '../../components/Button';

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

  const { data: pokemons, nextUrl, previousUrl, handleNextPage, handlePreviousPage } = usePagination<PokemonListItem, Pokemon>(
    'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0',
    transformPokemonData
  );

  const { openModal } = useModal();

  const handleOpenPokemonModal = (pokemon: Pokemon) => {
    openModal('Pokemon-Modal', { pokemon }, () => {});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center text-center mx-auto px-8 py-8 gap-6 md:gap-12 mt-24">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} title={pokemon.name}>
              <div className="flex flex-col gap-1">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <Button label="更多詳細" onClick={() => handleOpenPokemonModal(pokemon)} />
              </div>
            </Card>
          ))}
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