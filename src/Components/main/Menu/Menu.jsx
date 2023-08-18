import s from './menu.module.scss'
import {db} from "../../../config/firebase-confige";
import {collection,} from "firebase/firestore";
import {useCollectionData,} from "react-firebase-hooks/firestore";
import {Link, Route, Routes} from "react-router-dom";
import Products from "./Products";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import loadingGif from '../../../Assets/loaderGif.svg'
import ProductInfo from "./ProductInfo/ProductInfo";

const Menu = () => {

    const food = collection(db, "food")
    const [docs, loading] = useCollectionData(food)

    let listOfFood = docs?.map(food => {
        return (
            <Link to={food.name} className={s.listOfFood}>
                <img src={food.icon} alt="#"/>
                <p>{food.name.firstLetterToUppercase()} </p>
            </Link>
        )
    })
    return loading ? <img src={loadingGif} alt="#"/> : (
        <div>
            <div className={s.categories}>
                {listOfFood}
            </div>

            <div className={s.menuWrapper}>
                <ShoppingCart/>

                <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/:category' element={<Products/>}/>
                    <Route path="/:category/:id" element={<ProductInfo/>}/>
                </Routes>
            </div>
        </div>)
}
export default Menu