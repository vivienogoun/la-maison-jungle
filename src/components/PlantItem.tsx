import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ name, cover, id, light, water }) {
  return (
    <li className="lmj-plant-item">
      <img src={ cover } alt="Une plante" className="lmj-plant-item-cover"/>
      <h3>{ name }</h3>
			<CareScale careType='water' scaleValue={ water } />
			<CareScale careType='light' scaleValue={ light } />
    </li>
  )
}

export default PlantItem