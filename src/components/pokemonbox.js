import '../components/pokemonbox.css'
const PokemonCard = ({ id, name, image, type }) => {
	return (
		<>
			<div className='pokeContainer'>
				<div className='number'>
					<small>#0{id}</small>
				</div>
				<img src={image} alt={name} />
				<div className='pokemonDitails'></div>
				<h3>{name}</h3>
				<small>Typ: {type}</small>
			</div>
		</>
	)
}
export default PokemonCard
