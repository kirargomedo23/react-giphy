import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import InputSearch from '../search/InputSearch'
import CardGiphy from './CardGiphy'
import './styleContainerGiphy.css'

const ContainerGiphy = () => {
	const [searchWord, setSearchWord] = useState('goku')
	const { data, load } = useFetch(searchWord, 25, 0)

	const handleSetSearchWord = search => {
		setSearchWord(search)
	}

	return (
		<>
			<InputSearch
				searchWord={searchWord}
				handleSetSearchWord={handleSetSearchWord}
			></InputSearch>
			<br />
			<div className='grid-container'>
				{load && <p>cargando ....</p>}
				{!load &&
					data.data.map(el => (
						<CardGiphy key={el.id} gif={el}>
							{' '}
						</CardGiphy>
					))}
			</div>
		</>
	)
}

export default ContainerGiphy
