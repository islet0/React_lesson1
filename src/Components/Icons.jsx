import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faDollarSign, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export const Icons = () => {
    return (
        <div className="many">
            <div className="each">
                <div className="ic"><div className="bg"></div>
                <FontAwesomeIcon icon={faTruck} />
                </div>
                <h1><b>FREE AND FAST DELIVERY</b></h1>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="each">
                <div className="ic"><div className="bg"></div>
                <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <h1 className="text-[20px]"><b>24/7 CUSTOMER SERVICE</b></h1>
                <p className="text-[16px]">Friendly 24/7 customer support</p>
            </div>
            <div className="each">
                <div className="ic"> <div className="bg"></div>
                <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <h1><b>MONEY BACK GUARANTEE</b></h1>
                <p>We return money within 30 days</p>
            </div>
        </div>
    );
};
