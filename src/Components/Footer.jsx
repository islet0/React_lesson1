import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (<div className="black">
        <div className="footer">
            <div className="foot">
                <h3>Exclusive</h3>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <label htmlFor="gsearch"></label>
                <input type="search" id="gsearch" placeholder="Enter your email" name="gsearch" />
            </div>
            <div className="foot">
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="foot">
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className="foot">
                <h3 className="text-[19px]">Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="foot">
                <h3 className="text-[18px]">Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className="fimg">
                    <img src="/Qrcode 1.png" alt="qr"/>
                    <img src="/social.png" alt="social"/>
                </div>
                <div className="iii">
                    <FontAwesomeIcon icon={faTwitter}/><FontAwesomeIcon icon={faInstagram}/><FontAwesomeIcon icon={faFacebook}/>
                </div>
            </div>
        </div>          
           <div className="last">
                <h4>Copyright Rimel 2022. All rights reserved</h4>
            </div> </div>
    );
};
