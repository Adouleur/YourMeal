import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import s from './ProductInfo.module.scss'
import {useState} from "react";
import {addProductsToCartFromProductInfo} from "../../../../reducers/shoppingCartReducer";

const ProductInfo = () => {
    const [productAmount, setProductAmount] = useState(1)
    let params = useParams()
    let products = useSelector(state => state.shop.products);
    let dispatch = useDispatch()
    const increaseProductAmountHandler = () => {
        setProductAmount(productAmount + 1)
    }
    const decreaseProductAmountHandler = () => {
        if (productAmount > 1) {
            setProductAmount(productAmount - 1)
        }
    }
    const addProductFromInfoHandler = () => {
        dispatch(addProductsToCartFromProductInfo({currentProduct, productAmount}))
        setProductAmount(1)
    }

    const currentProduct = products.find(product => product.id === params.id)

    let infoCart = products.map(product => {
        const list = product.composition.map(el => {
            return (
                <li>{el}</li>
            )
        })
        if (product.id === params.id) {

            return (
                <div className={s.wrapper}>
                    <h2>{product.name}</h2>
                    <div className={s.productInfoWrapper}>
                        <img src={product.image} alt=""/>
                        <div>
                            <p>{product.description}</p>
                            <h3>Ingredients:</h3>
                            <ul> {list}</ul>
                            <p>{product.weight}g</p>
                        </div>
                    </div>
                    <div className={s.priceContainer}>
                        <div className={s.infoButtons}>
                            <button className={s.addButton} onClick={addProductFromInfoHandler}>Add to cart</button>
                            <div className={s.counter}>
                                <div className={productAmount !== 1 ? s.left : s.disabledButton}
                                     onClick={decreaseProductAmountHandler}>
                                    -
                                </div>
                                <p>{productAmount}</p>
                                <div className={s.right} onClick={increaseProductAmountHandler}>+</div>
                            </div>
                        </div>
                        <p>{product.price}$</p>
                    </div>
                </div>
            )
        }
    })
    return (
        <>
            {infoCart}
        </>

    )
}
export default ProductInfo;