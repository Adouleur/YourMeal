import s from "./menu.module.scss"
import {useDispatch} from "react-redux";
import {addProductsToCart} from "../../../reducers/shoppingCartReducer";
import {useNavigate} from "react-router-dom";
const CardProduct = (props) =>{
    const {image, price, name, weight, id}=props.product
    const navigate = useNavigate();

    let dispatch = useDispatch();
    const addToCartHandler = () =>{

        dispatch(addProductsToCart(props))
    }
    const showMoreHandler = () =>{
        navigate(`/:${props.category}/${id}`)

    }
    return(
        <div className={s.CardProduct}>
            <img src={image} alt=""/>
            <h4>{price}$</h4>
        <p>{name}</p>
            <p>{weight}g</p>
            <div className={s.optionButtons}>
            <button onClick={addToCartHandler}>Add to cart</button>
                <button onClick={showMoreHandler}>Show more</button>
            </div>
        </div>
    )
}
export default CardProduct;