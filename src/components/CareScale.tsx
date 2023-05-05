import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? sun : water

	function handleClick() {
		alert(`Cette indication de type ${careType} indique que cette plante requiert ${scaleValue === 1 ? 'peu' : `${scaleValue === 2 ? 'modérement' : 'beaucoup'}`} ${careType === 'light' ? 'de lumière' : 'd\'arrosage'}`)
	}

	return (
		<div onClick={ handleClick }>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<img key={rangeElem.toString()} src={scaleType} alt="Light or Water" />
				) : null
			)}
		</div>
	)
}

export default CareScale