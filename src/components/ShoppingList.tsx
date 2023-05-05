import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"

function ShoppingList() {
  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((categorie) => (
					<li key={ categorie }>
            { categorie }
          </li>
				))}
			</ul>
			<ul className="lmj-plant-list">
				{plantList.map((plant) => (
          <PlantItem key={ plant.id} name={ plant.name } cover={ plant.cover } id={ plant.id } light={ plant.light } water={ plant.water } />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList