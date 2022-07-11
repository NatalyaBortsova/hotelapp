import "./Featured.scss";
import BoraBora from "../../assets/destination/borabora.jpg";
import Guernsey from "../../assets/destination/guernsey.jpg";
import Texel from "../../assets/destination/texel.jpg";
import Zanzibar from "../../assets/destination/zanzibar.jpg";
import Bali from "../../assets/destination/bali.jpg";
import Tenerife from "../../assets/destination/tenerife.jpg";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured__title title">Destinations we love</h2>
        <ul className="featured__list destination">
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={BoraBora} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Bora-Bora</span>
            </a>
            <span className="destination__number">64 properties</span>
          </li>
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={Guernsey} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Guernsey</span>
            </a>
            <span className="destination__number">61 properties</span>
          </li>
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={Texel} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Texel</span>
            </a>
            <span className="destination__number">411 properties</span>
          </li>
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={Zanzibar} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Zanzibar</span>
            </a>
            <span className="destination__number">838 properties</span>
          </li>
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={Bali} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Bali</span>
            </a>
            <span className="destination__number">12,690 properties</span>
          </li>
          <li className="featured__item destination__item">
            <div className="destination__image">
              <a href="#" className="destination__image-link">
                <img src={Tenerife} alt="hotels" width={300} height={300} />
              </a>
            </div>
            <a href="#" className="destination__link">
              <span className="destination__title">Tenerife</span>
            </a>
            <span className="destination__number">9,610 properties</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Featured;
