import "./Footer.scss";
import Booking from "../../assets/partners/booking-com.png";
import Priceline from "../../assets/partners/priceline-com.png";
import Kayak from "../../assets/partners/kayak.png";
import Agoda from "../../assets/partners/agoda.png";
import Rentalcars from "../../assets/partners/rentalcars-com.png";
import OpenTable from "../../assets/partners/opentable.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Countries
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Regions
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Cities
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Districts
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Airports
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Hotels
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Places of interest
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Homes
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Apartments
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Resorts
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Villas
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Hostels
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                B&Bs
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Guest houses
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Unique places to stay
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                All destinations
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Discover
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Reviews
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Unpacked: Travel articles
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Travel communities
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Seasonal and holiday deals
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Car rental
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Flight finder
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Restaurant reservations
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Booking.com for Travel Agents
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Coronavirus (COVID-19) FAQs
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                About Booking.com
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Customer Service Help
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Partner help
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Sustainability
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Press center
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Safety Resource Center
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Investor relations
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms & conditions
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Partner dispute
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                How We Work
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy & cookie statement
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Corporate contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copy">
          Copyright © 1996–2022 Booking.com™. All rights reserved.
        </div>
        <div className="footer__text">
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
        </div>
        <ul className="footer__partner partners-list">
          <li className="partners-list__item">
            <img
              src={Booking}
              alt="Booking"
              title="Booking.com"
              width={91}
              height={26}
            />
          </li>
          <li className="partners-list__item">
            <img
              src={Priceline}
              alt="Priceline"
              title="Priceline"
              width={91}
              height={26}
            />
          </li>
          <li className="partners-list__item">
            <img src={Kayak} alt="Kayak" title="Kayak" width={79} height={26} />
          </li>
          <li className="partners-list__item">
            <img src={Agoda} alt="Agoda" title="Agoda" width={70} height={26} />
          </li>
          <li className="partners-list__item">
            <img
              src={Rentalcars}
              alt="Rentalcars"
              title="Rentalcars"
              width={109}
              height={26}
            />
          </li>
          <li className="partners-list__item">
            <img
              src={OpenTable}
              alt="OpenTable"
              title="OpenTable"
              width={95}
              height="26"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
