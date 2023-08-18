import Menu from "./Menu/Menu";
import {Routes, Route} from "react-router-dom";
import s from './main.module.scss'
import DeliveryPage from "./Delivery/DeliveryPage";
import About from "../main/About/About";

const Main = () => {
    return (
        <section>
            <Routes>
                <Route path="/*" element={<Menu/>}/>
                <Route path="/delivery" element={<DeliveryPage/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </section>
    )
}
export default Main;