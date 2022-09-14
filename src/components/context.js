import { useState } from 'react'
import { createContext, useContext } from 'react'

const OurContext = createContext([])

const Test = () => {
	const context = useContext(OurContext)
	console.log(context)

	return <h1>Siema</h1>
}

const Test2 = () => {
	return <h1>Siema</h1>
}

const Parent = () => {
	const [parent, setParent] = useState(1)

	const test = () => setParent(p => p + 1)

	return (
		<OurContext.Provider value={parent}>
			<Test />
			<Test2 />
			<button onClick={test}>SIEMANX@</button>
		</OurContext.Provider>
	)
}

export default Parent
