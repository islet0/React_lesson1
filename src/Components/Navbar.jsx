import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";


export const Navbar=()=>{
    return(
     <div className="nav">
        <h1>Exclusive</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
         <div className="input">
         <input type="text" id="name" name="name" placeholder="What are you looking for? "/>
         <div className="icons"><FontAwesomeIcon icon={faHeart} />
         <FontAwesomeIcon icon={faCartShopping} />
         <FontAwesomeIcon icon={faUser} /></div>
         </div>
     </div>
    );
};
export const Text = () => {
    return ;
};