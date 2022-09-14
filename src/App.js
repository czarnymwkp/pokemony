import { useEffect, useState, useInsertionEffect, useLayoutEffect } from 'react'
import './App.css'
import Pokemons from './components/pokemons/Pokemons'

function Example() {
	const [allPokemons, setAllPokemons] = useState([])
	const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon')
	const [searchPokemon, setSearchPokemon] = useState('')
	const [next, setNext] = useState(null)
	const [prev, setPrev] = useState(null)

	// async function

	const getPokemon = async () => {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
			const pokeNameDate = await res.json()
			setAllPokemons([pokeNameDate])
		} catch (err) {
			console.log(err)
		}
	}

	const getAllPokemons = async url => {
		try {
			const res = await fetch(url)
			const data = await res.json()
			setNext(data.next)
			setPrev(data.previous)

			async function createPokemon(result) {
				const mappedPokemons = await Promise.all(
					result.map(async pokemon => {
						const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
						const pokemonData = await res.json()
						return pokemonData
					})
				)
				setAllPokemons(mappedPokemons)
			}
			createPokemon(data.results)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getAllPokemons(apiUrl)
	}, [])

	const onPrev = () => {
		setApiUrl(prev)
		getAllPokemons(prev)
	}

	const onNext = () => {
		setApiUrl(next)
		getAllPokemons(next)
	}

	const onSetSearchPokemon = e => {
		setSearchPokemon(e.target.value)
	}

	return (
		<>
			<h1>POKEDEX</h1>
			<div className='main'>
				<div className='buttonsPrevNet'>
					<button disabled={!prev} onClick={onPrev} className='btnNextOne'>
						Prev
					</button>
					<button disabled={!next} onClick={onNext} className='nextPokemon'>
						Next
					</button>
				</div>
				<div className='input'>
					<input
						className='searchPokemon'
						type='text'
						placeholder='Find pokemon'
						value={searchPokemon}
						onChange={onSetSearchPokemon}
					/>
					<button onClick={getPokemon}>Find</button>
				</div>
			</div>
			<Pokemons pokemons={allPokemons} />
		</>
	)
}

export default Example
