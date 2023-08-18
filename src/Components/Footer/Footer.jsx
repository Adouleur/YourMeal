import footerLogo from '../../Assets/logoFooter.svg'
import s from './Footer.module.scss'
import contact from '../../Assets/contact.svg'
import instagramLogo from '../../Assets/instagram-icone-orange.png'
import facebookLogo from '../../Assets/facebook-icone-orange.png'
const Footer = () =>{
    return(
        <footer>
            <div className={s.footerWrapper}>
            <div className={s.brandName}>
                <h2>YourMeal</h2>
                <img src={footerLogo} alt="#"/>
            </div>
            <div className={s.details}>
                <div className={s.contact}>
                <h3>Contact us</h3>
                <div className={s.phoneNumber}><img src={contact} alt="#"/> +1-212-456-7890</div>
                </div>
                <div className={s.socials}>
                    <h3>Our socials</h3>
                    <div><a href="https://www.instagram.com/a.douleur"><img src={instagramLogo} alt="#"/></a> <a href="https://www.facebook.com/profile.php?id=100006409800503"><img src={facebookLogo} alt="#"/></a></div>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer