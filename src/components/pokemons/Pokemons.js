import PokemonCard from '../pokemonbox'

const Pokemons = ({ pokemons }) => {
	return (
		<div className='pokemonApp'>
			<div className='pokemonBox'>
				<div className='pokemonBoxAll'>
					{pokemons.map(pokemon => (
						<PokemonCard
							id={pokemon.id}
							name={pokemon.name}
							image={pokemon.sprites.other.dream_world.front_default}
							type={pokemon.types[0].type.name}
							key={pokemon.name}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Pokemons
