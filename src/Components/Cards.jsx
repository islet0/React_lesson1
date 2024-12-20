import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faStore, faBagShopping, faSackDollar} from "@fortawesome/free-solid-svg-icons";

export const Cards=()=>{
    return(
        <div className="cards">
        <div className="card">
            <div className="icon"> <div className="bgg"></div> <FontAwesomeIcon icon={faStore} /></div>
            <h1>10.5k</h1>
            <p >Sallers active our site</p>
        </div>
        
        <div className="card">
        <div className="icon"> <div className="bgg"></div> <FontAwesomeIcon icon={faDollarSign} /></div>
            <h1>33k</h1>
            <p >Mopnthly Produduct Sale</p>
        </div>
        <div className="card">
        <div className="icon"> <div className="bgg"></div><FontAwesomeIcon icon={faBagShopping} /></div>
            <h1 >45.5k</h1>
            <p> Customer active in our site</p>
        </div>
        <div className="card">
        <div className="icon"> <div className="bgg"></div><FontAwesomeIcon icon={faSackDollar} /></div>
            <h1>23k</h1>
            <p >Anual gross sale in our sitee</p>
        </div>
    </div>
    );
};