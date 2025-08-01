import React from 'react';
import usePagination from '../../../hooks/usePagination';
import useFetch from '../../../hooks/useFetch';
import { useModal } from '../../../context/modalContext';
import { Button } from '../../../components/Button';
import Card from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import globalStyles from '../../style/globalStyles';

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

const Pokemon: React.FC = () => {
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
    <div className={globalStyles.pageContainer}>
      <div className="w-full max-w-7xl">
        <div className={globalStyles.gridLayout}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} title={pokemon.name}>
              <div className="flex flex-col gap-1">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <Button label="更多詳細" onClick={() => handleOpenPokemonModal(pokemon)} />
              </div>
            </Card>
          ))}
        </div>
        <Pagination nextUrl={nextUrl} previousUrl={previousUrl} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}/>
      </div>
    </div>
  );
};

export default Pokemon;