import {collection} from "firebase/firestore";
import {db} from "../../../config/firebase-confige";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useParams} from "react-router-dom";
import CardProduct from "../Menu/CardPorduct";
import s from "./menu.module.scss";
import loadingGif from '../../../Assets/loaderGif.svg'

const Products = () => {

    let {category} = useParams();
    if (category === undefined) {
        category = "burgers"
    }

    const currentProduct = collection(db, `food/${category}/children/`)
    const [docs, loading] = useCollectionData(currentProduct)




    return (

        <>{!loading ? <div className={s.foodContainer}>
            <h3>{category.firstLetterToUppercase()}</h3>
            <div className={s.foodWrapper}>
                {
                    docs?.map(product => <CardProduct product={product} category={category}/>)
                }
            </div>

        </div> : <div className={s.foodContainer}><img className={s.loader} src={loadingGif} alt=""/></div>}</>

    )
}

export default Products;
