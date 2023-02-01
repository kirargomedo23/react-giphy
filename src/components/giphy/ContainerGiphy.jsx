import { useFetch } from '../../hooks/useFetch'
import InputSearch from '../search/InputSearch'
import CardGiphy from './CardGiphy'

const ContainerGiphy = () => {
	const { data, load } = useFetch('goku', 25, 0)

	return (
		<div>
			<InputSearch></InputSearch>
			{load && <p>cargando ....</p>}
			{!load &&
				data.data.map(el => (
					<CardGiphy key={el.id} gif={el}>
						{' '}
					</CardGiphy>
				))}
		</div>
	)
}

export default ContainerGiphy
