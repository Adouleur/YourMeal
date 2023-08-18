import headerBurger from "../../Assets/headerBurger.png"
import logo from "../../Assets/logo.svg"
import s from "../Header/header.module.scss"
import {Link} from "react-router-dom";
const Header = () =>{
        return(
            <div className={s.container}>
            <div className={s.headerWrapper}>
                <h2>YourMeal <img src={logo} alt="#"/></h2>
                <div className={s.burgerDiv}>
                    <img src={headerBurger} alt="#"/>
                    <div className={s.motto}>
                            <h1>Only the <span>juiciest burgers!</span></h1>
                            <h3>Free delivery from 25$</h3>

                    </div>


                </div>

            </div>
                <nav>
                    <Link to='/'>Menu</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/delivery'>Your Order</Link>
                </nav>
            </div>
        )
};
export default Header;