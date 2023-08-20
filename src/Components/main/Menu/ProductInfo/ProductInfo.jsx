import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import s from './ProductInfo.module.scss'
import {useState} from "react";
import {addProductsToCartFromProductInfo} from "../../../../reducers/shoppingCartReducer";
import {collection} from "firebase/firestore";
import {db} from "../../../../config/firebase-confige";
import {useCollectionData} from "react-firebase-hooks/firestore";

const ProductInfo = () => {
    const [productAmount, setProductAmount] = useState(1)
    let params = useParams()
    let paramsWithRemovedDots = params.category.slice(1)

    let dispatch = useDispatch()
    const increaseProductAmountHandler = () => {
        setProductAmount(productAmount + 1)
    }
    const decreaseProductAmountHandler = () => {
        if (productAmount > 1) {
            setProductAmount(productAmount - 1)
        }
    }
    const currentCategory = collection(db, `food/${paramsWithRemovedDots}/children/`)
    const [docs] = useCollectionData(currentCategory)



    const product = docs?.find(el => el.id === params.id)

    const addProductFromInfoHandler = () => {
        dispatch(addProductsToCartFromProductInfo({product, productAmount}))
        setProductAmount(1)
    }

    const list = product?.composition.map(el => {
        return (
            <li>{el}</li>
        )
    })

    return (
        <>
            <div className={s.wrapper}>
                <h2>{product?.name}</h2>
                <div className={s.productInfoWrapper}>
                    <img src={product?.image} alt=""/>
                    <div>
                        <p>{product?.description}</p>
                        <h3>Ingredients:</h3>
                        <ul> {list}</ul>
                        <p>{product?.weight}g</p>
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
                    <p>{product?.price}$</p>
                </div>
            </div>
        </>

    )
}
export default ProductInfo;