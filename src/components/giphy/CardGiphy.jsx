import { PropTypes } from 'prop-types'

const CardGiphy = ({ gif }) => {
	return (
		<div>
			<img
				style={{ objectFit: 'cover', width: '100%', height: '100%' }}
				src={gif.images.preview_gif.url}
				alt=''
			/>
			{/* <p> {gif.title} </p> */}
		</div>
	)
}

CardGiphy.propTypes = {
	gif: PropTypes.object.isRequired,
}

export default CardGiphy
