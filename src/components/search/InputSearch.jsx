import { useState } from 'react'
import './styleInput.css'

const InputSearch = () => {
	const [input, setInput] = useState('')

	const handleSearch = e => {
		e.preventDefault()
	}

	const handleInputSearch = e => {
		e.preventDefault()
		setInput(e.target.value)
	}

	return (
		<div className='container__input'>
			<input value={input} onChange={handleInputSearch} type='text' />
			<button onClick={() => handleSearch}>Buscar</button>
		</div>
	)
}

export default InputSearch
