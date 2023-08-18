import s from './shoppingCart.module.scss'
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";
import deliveryIcon from '../../../Assets/deliveryIcon.svg'
import {Link} from "react-router-dom";


const ShoppingCart = (props) => {
    let products = useSelector(state => state.cart);
    let totalSum = 0;
    let numberOfProductsInCart = 0;
    products.forEach(el => {
        return totalSum += el.product.price * el.product.count

    })
    products.forEach(el => {
        return numberOfProductsInCart += el.product.count
    })
    let productsInCart = products.map(product => {

        return (
            <ShoppingCartItem product={product}/>
        )
    })
    return (
        <>
            <div className={s.shoppingCart}>
                <div className={s.amountInCart}>
                    <h2>Cart</h2>
                    <div>{numberOfProductsInCart}</div>
                </div>
                {products.length ? <>
                    <div className={s.productsInCart}>
                        {
                            productsInCart
                        }
                    </div>
                    <div className={s.total}>
                        <h4>Total </h4>
                        <h4>{totalSum}$</h4>
                    </div>
                    <div className={s.buttonWrapper}>
                        <Link to='/delivery'>
                            <button className={!props.style ? s.createOrder : props.style}> Create Order
                            </button>
                        </Link>
                    </div>
                    <p className={s.delivery}>
                        <img src={deliveryIcon}
                             alt="#"/>{totalSum >= 25 ? "Free Delivery!" : `Add ${25 - totalSum}$ worth of products to get free delivery`}
                    </p>
                </> : <p>Cart is empty :(</p>}
            </div>
        </>)
}
export default ShoppingCart