import {useSelector} from "react-redux";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import s from "./DeliveryPage.module.scss";
import donut from '../../../Assets/donut.png'

import PlacesAutocomplete from "./Adddress";
const DeliveryPage = () => {
    let products = useSelector(state => state.cart);

    return (
        <>
            <ShoppingCart style={s.createOrder}/>
            <div className={s.deliveryContainer}>
                <div className={s.donut}>
                    <img src={donut} alt="#"/>
                </div>
                <div className={s.formWrapper}>
                    <h2>Delivery</h2>
                    <form action="">
                        <input placeholder="Your Name" type="text" required/>
                        <input placeholder="Phone number" type="number" required/>
                        <PlacesAutocomplete/>
                        <button className={products.length === 0 ? s.disabledButton : s.activeButton}>Place order</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default DeliveryPage;