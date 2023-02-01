import { PropTypes } from 'prop-types'

const CardGiphy = ({ gif }) => {
	return (
		<div style={{ width: '200px', height: '200px' }}>
			<img src={gif.url} alt='' />
			<p> {gif.title} </p>
		</div>
	)
}

CardGiphy.propTypes = {
	gif: PropTypes.object.isRequired,
}

export default CardGiphy
