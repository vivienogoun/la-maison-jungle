import '../styles/Cart.css'

function Cart() {
  const monstera = 8
  const lierre = 10
  const bouquet = 15
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera: {monstera}$</li>
        <li>Lierre: {lierre}$</li>
        <li>Bouquet de fleurs: {bouquet}$</li>
      </ul>
      <b>Total: </b>{monstera + lierre + bouquet}$
    </div>
  )
}

export default Cart