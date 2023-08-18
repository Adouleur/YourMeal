import s from "./shoppingCart.module.scss"
import {useDispatch} from "react-redux";
import {
    decreaseNumberOfProducts,
    increaseNumberOfProduct,
    deleteProductFromCart
} from "../../../reducers/shoppingCartReducer";
import removeFromCartIcon from '../../../Assets/remove-from-cart-icon.svg'
import {Link} from "react-router-dom";

const ShoppingCartItem = ({product}) => {

    let dispatch = useDispatch();
    const {image, name, weight, price, count, id, type} = product.product


    const productCountAddHandler = () => {
        dispatch(increaseNumberOfProduct(id))
    }
    const productCountRemoveHandler = () => {
        dispatch(decreaseNumberOfProducts({id, count}))
    }
    const removeProductFromCartListener = () => {
        dispatch(deleteProductFromCart(id))
    }

    return (

        <div>
            <div className={s.ShoppingCartItem}>
                <Link to={`/${type}/${id}`}>
                    <div className={s.wrapper}>

                        <img className={s.foodPreview} src={image} alt=""/>
                        <div className={s.detailsWrapper}>
                            <h5>{name}</h5>
                            <p>{weight}g</p>
                            <p>{price}$</p>
                        </div>

                    </div>
                </Link>
                <div className={s.options}>
                    <div className={s.counter}>
                        <div className={count !== 1 ? s.left : s.disabledbutton} onClick={productCountRemoveHandler}>-
                        </div>
                        <p>{count}</p>
                        <div className={s.right} onClick={productCountAddHandler}>+</div>
                    </div>
                    <img className={s.removeButton} src={removeFromCartIcon} onClick={removeProductFromCartListener}
                         alt="#"/>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCartItem;