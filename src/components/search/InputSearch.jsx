import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './styleInput.css'

const InputSearch = ({ handleSetSearchWord }) => {
	const [input, setInput] = useState('')

	const handleSearch = e => {
		handleSetSearchWord(input)
	}

	const handleInputSearch = e => {
		e.preventDefault()
		setInput(e.target.value)
	}

	return (
		<div className='container__input'>
			<input value={input} onChange={handleInputSearch} type='text' />
			<button onClick={handleSearch}>Buscar</button>
		</div>
	)
}

InputSearch.propTypes = {
	handleSetSearchWord: PropTypes.func,
}

export default InputSearch
