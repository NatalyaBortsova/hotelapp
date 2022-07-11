import "./Property.scss";
import Hotels from "../../assets/property/hotels.jpg";
import Apartments from "../../assets/property/apartments.jpg";
import Resorts from "../../assets/property/resorts.jpg";
import Villas from "../../assets/property/villias.jpg";
import Cabins from "../../assets/property/cabins.jpg";
import Cottages from "../../assets/property/cottages.jpg";

const Property = () => {
  return (
    <section className="property">
      <div className="container">
        <h2 className="property__title title">Browse by property type</h2>
        <ul className="property__list">
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Hotels} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Hotels</span>
            </a>
            <span className="property__number">870,849 hotels</span>
          </li>
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Apartments} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Apartments</span>
            </a>
            <span className="property__number">864,236 apartments</span>
          </li>
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Resorts} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Resorts</span>
            </a>
            <span className="property__number">17,949 resorts</span>
          </li>
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Villas} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Villas</span>
            </a>
            <span className="property__number">454,325 villas</span>
          </li>
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Cabins} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Cabins</span>
            </a>
            <span className="property__number">34,910 cabins</span>
          </li>
          <li className="property__item">
            <div className="property__image">
              <a href="#" className="property__image-link">
                <img src={Cottages} alt="hotels" width={230} height={150} />
              </a>
            </div>
            <a href="#" className="property__link">
              <span className="property__name">Cottages</span>
            </a>
            <span className="property__number">149,914 cottages</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Property;
