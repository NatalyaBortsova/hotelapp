import Proposals from "../../components/proposals/Proposals";
import Navbar from "../../components/navbar/Navbar";
import FooterForm from "../../components/footerForm/FooterForm";
import Footer from "../../components/footer/Footer";
import { ImLocation2 } from "react-icons/im";
import { TbSwimming } from "react-icons/tb";
import { AiOutlineWifi, AiFillHeart } from "react-icons/ai";
import { FaShuttleVan } from "react-icons/fa";
import { RiParkingBoxFill } from "react-icons/ri";
import { MdFamilyRestroom, MdFitnessCenter, MdKingBed } from "react-icons/md";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import "./Hotel.scss";
import { useState } from "react";

const Hotel = () => {
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/49112982.jpg?k=d56361898ab90757ae08dd128361237169e9d8f4c2f63a3d9ca7519e274dc697&o=&hp=1",
      title: "Econom",
      width: 325,
      height: 245,
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/334963503.jpg?k=1236a13268133bb84410d06eb7dae5797c005231fd5945ed3d61188607c0b847&o=&hp=1",
      title: "Sleeping-room",
      width: 660,
      height: 500,
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/115683384.jpg?k=ae3fc762610994d68e2a99753d2cf5a75debf60682a1bcf02f455bb0c428c739&o=&hp=1",
      title: "Bathroom",
      width: 325,
      height: 245,
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/195404224.jpg?k=f2475c49a5b488cfe27a20c256e82ad2d8d69768d51288a0fe48d66a33b9bb17&o=&hp=1",
      title: "Pool",
      width: 325,
      height: 245,
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/115642611.jpg?k=d20c77f9a0866ea79a4617b9aec5823d1be7c6cd33d9860cdef4a5e60c725bda&o=&hp=1",
      title: "Business",
      width: 325,
      height: 245,
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/115642637.jpg?k=2dffa482d672002197d3794426f85344a2f87503ff7f98e908a5f5d66790c73e&o=&hp=1",
      title: "Sitting-room",
      width: 325,
      height: 245,
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Proposals type="list" />
      <div className="apartment">
        <div className="container">
          {open && (
            <div className="slider">
              <IoIosCloseCircleOutline
                onClick={() => setOpen(false)}
                size={60}
                className="slider__close"
              />
              <IoIosArrowBack
                onClick={() => handleMove("l")}
                size={60}
                className="slider__arrow"
              />
              <div className="slider__wrapper">
                <img
                  className="slider__image"
                  src={photos[slideNumber].src}
                  alt={photos[slideNumber.title]}
                />
              </div>
              <IoIosArrowForward
                onClick={() => handleMove("r")}
                size={60}
                className="slider__arrow"
              />
            </div>
          )}
          <div className="apartment__top">
            <div className="apartment__info">
              <h2 className="apartment__title">Amnaya Resort Kuta</h2>
              <span className="apartment__address">
                <ImLocation2 color="#0071c2" size={25} />
                Jl. Kartika Plaza, Gang Pispa Ayu No. 99, 80361 Kuta, Indonesia
              </span>
              <span className="apartment__rate">
                Excellent location in the best-rated area in Kuta
              </span>
            </div>
            <button className="apartment__reserve btn" type="button">
              Reserve
            </button>
          </div>
          <ul className="apartment__gallery gallery">
            {photos.map((photo, i) => (
              <li className="gallery__item" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt={photo.title}
                  width={photo.width}
                  height={photo.height}
                />
              </li>
            ))}
          </ul>
          <div className="apartment__description">
            <div className="apartment__text">
              <p>
                You're eligible for a Genius discount at Amnaya Resort Kuta! To
                save at this property, all you have to do is sign in.{" "}
              </p>
              <p>
                This property is a 12-minute walk from the beach. Boasting an à
                la carte restaurant, Amnaya Resort Kuta provides comfortable
                accommodations with free in-room WiFi access in Kuta. The
                property offers an outdoor swimming pool, a fitness center and a
                fragrant garden.
              </p>
              <p>
                Featuring a rustic yet modern style, each room at Amnaya Resort
                Kuta is air-conditioned. All of them are equipped with a
                comfortable seating area, a flat-screen TV with English and
                Mandarin cable channels, a safe and a mini-bar. Some units also
                include a bath and a coffee machines. Private bathrooms offer
                free toiletries, a hairdryer, and slippers.
              </p>
              <p>
                At Amnaya Resort Kuta guests will find a shared lounge and a
                library. A 24-hour front desk provides helpful information for
                getting around the area.
              </p>
              <p>
                Guests can request a daily breakfast and enjoy daily afternoon
                tea at Sukun Restaurant. Massage treatments at Bhava Spa and
                barbecue facilities are available for an additional cost.
                Housekeeping services are provided.
              </p>
              <p>
                The hotel is 100 m from Waterbom Bali, 100 m from Discovery
                Shopping Mall and 300 m from Kuta Center. Bali Denpasar
                International Airport is 1.2 mi away. Airport shuttles can also
                be arranged for a surcharge. Amnaya Resort Kuta offers free
                parking.
              </p>
              <p>
                This is our guests' favorite part of Kuta, according to
                independent reviews.
              </p>
              <p>
                Couples in particular like the location – they rated it 9.1 for
                a two-person trip.
              </p>
              <p>
                <b>
                  Amnaya Resort Kuta has been welcoming Booking.com guests since
                  Apr 22, 2015
                </b>
              </p>
              <div className="apartment__facilities facilities">
                <h3 className="facilities__title">Most popular facilities</h3>
                <div className="facilities__item">
                  <TbSwimming color="#0c6d23" size={25} />1 swimming pool
                </div>
                <div className="facilities__item">
                  <AiOutlineWifi color="#0c6d23" size={25} />
                  Free WiFi
                </div>
                <div className="facilities__item">
                  <FaShuttleVan color="#0c6d23" size={25} />
                  Airport shuttle
                </div>
                <div className="facilities__item">
                  <MdFamilyRestroom color="#0c6d23" size={25} />
                  Family rooms
                </div>
                <div className="facilities__item">
                  <MdFitnessCenter color="#0c6d23" size={25} />
                  Fitness center Bar
                </div>
              </div>
            </div>
            <div className="apartment__price property-highlights">
              <h4 className="property-highlights__title">
                Property Highlights
              </h4>
              <div className="property-highlights__text">
                <AiFillHeart size={30} color="#000000" />
                <p>
                  Located in the best-rated area in Kuta, this hotel has an
                  excellent location score of 9.0
                </p>
              </div>
              <div className="property-highlights__text">
                <MdKingBed size={30} color="#000000" />
                <p>
                  Want a great night's sleep? This hotel was highly-rated for
                  its very comfy beds.
                </p>
              </div>
              <span className="property-highlights__subtitle">
                Breakfast Info
              </span>
              <span className="property-highlights__details">
                Halal, American
              </span>
              <div className="property-highlights__text">
                <RiParkingBoxFill size={30} color="#000000" />
                <p>Free private parking available at the hotel</p>
              </div>
              <button type="button" className="property-highlights__button btn">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
};

export default Hotel;
