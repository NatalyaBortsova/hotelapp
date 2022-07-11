import "./PropertyCard.scss";
import Amnaya from "../../assets/propertyCard/amnaya.jpg";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { useState } from "react";

const PropertyCard = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="property-card">
      <div className="property-card__item card">
        <div className="card__wrapper">
          <div className="card__image">
            <a href="#" className="card__link">
              <img
                src={Amnaya}
                alt="Amnaya Resort Kuta"
                width={200}
                height={225}
              />
            </a>
          </div>
          <div className="card__content">
            <div className="card__top">
              <div className="card__top-item">
                <h3 className="card__title">Amnaya Resort Kuta</h3>
                <div className="card__stars">
                  <AiFillStar color="#febb02" size={15} />
                  <AiFillStar color="#febb02" size={15} />
                  <AiFillStar color="#febb02" size={15} />
                  <AiFillStar color="#febb02" size={15} />
                  <AiFillLike
                    color="#ffffff"
                    size={15}
                    style={{ backgroundColor: "#febb02" }}
                  />
                </div>
                <ImLocation2 color="#000000" />
                <span className="card__subtitle">
                  Hotel in Kartika Plaza, Kuta
                </span>
              </div>
              <div className="card__top-item score">
                <div className="score__content">
                  <div className="score__content-title">Wonderful</div>
                  <div className="score__content-text">2.891 reviews</div>
                </div>
                <div className="score__badge">9.3</div>
              </div>
            </div>
            <div className="card__info">
              <div className="card__text">
                {readMore ? (
                  <p>
                    Boasting an à la carte restaurant, Amnaya Resort Kuta
                    provides comfortable accommodations with free in-room WiFi
                    access in Kuta. One of the best places I've ever stayed.
                    Rooms are big and super cool. Staff is great. Breakfast is
                    made to order and included. Just stayed for one night while
                    traveling through but it couldn't have been better.
                  </p>
                ) : (
                  <p>
                    Boasting an à la carte restaurant, Amnaya Resort Kuta
                    provides comfortable accommodations with free in-room WiFi
                    access in Kuta.
                  </p>
                )}              
                  <span onClick={()=>setReadMore(!readMore)} className="card__read-more">{readMore ? "Show less" : "Show more"}</span>                  
              </div>
              <div className="card__price">
                <span className="card__price-from">Price from</span>
                <span className="card__price-value">100$</span>
                <span className="card__price-label">per night</span>
              </div>
            </div>
            <button type="button" className="card__button btn">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
