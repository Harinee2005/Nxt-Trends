import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (total, eachList) => total + eachList.price * eachList.quantity,
        0,
      )
      return (
        <div>
          <h1 className="order-total">
            Order Total : <span className="price">Rs {totalPrice}/-</span>
          </h1>
          <p className="cart-items">{cartList.length} Items in Cart</p>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
