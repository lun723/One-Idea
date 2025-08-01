import React from 'react';
import Modal from '../../components/Modal';

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

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ isOpen, onClose, pokemon }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Pokemon: ${pokemon.name}`} size="small">
      <div className="flex flex-col items-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />
        <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
    </Modal>
  );
};

export default PokemonModal;