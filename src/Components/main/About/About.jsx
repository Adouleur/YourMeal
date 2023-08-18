import video from '../../../Assets/burgerVideo.mp4'
import s from './about.module.scss'
import shefBurger from '../../../Assets/burgerPhoto.jpg'
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className={s.wrapper}>
                <video autoPlay muted loop>
                    <source src={video}/>
                </video>
                <div className={s.description}>
                    <h2>YouMeal is your choise!</h2>
                    <p>
                        Welcome to
                        <span> YouMeal</span>
                        , your culinary journey at your doorstep. Indulge in a diverse array of flavors, expertly
                        curated and conveniently delivered. Elevate your dining experience with our seamless ordering
                        process, where
                        quality meets convenience. Whether you seek comfort, novelty, or a bit of both, YouMeal is your
                        passport to a world of delectable delights.
                    </p>
                </div>
            </div>
            <div className={s.bottomWrapper}>
                <p>From humble beginnings to a global sensation, the burger's journey is legendary.
                    At <span>YouMeal</span>, we celebrate this iconic creation by offering a mouthwatering array of
                    burgers that honor tradition and embrace innovation.Join us at YouMeal and embark on a burger adventure like no
                    other.</p>
                <img src={shefBurger} alt=""/>
            </div>
            <div className={s.takeALookbtn}>
            <NavLink to='/'>
                <button>Take a closer look!</button>
            </NavLink>
            </div>
        </div>
    )
}
export default About