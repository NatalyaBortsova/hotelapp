import "./Rooms.scss";
import Room1 from "../../assets/rooms/room-1.jpg";
import Room2 from "../../assets/rooms/room-2.jpg";
import Room3 from "../../assets/rooms/room-3.jpg";
import Room4 from "../../assets/rooms/room-4.jpg";

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="container">
        <h2 className="rooms__title title">Homes guests love</h2>
        <ul className="rooms__list">
          <li className="rooms__item">
            <div className="rooms__image">
              <a href="#" className="rooms__link">
                <img src={Room1} alt="Mascot" width={300} height={200} />
              </a>
            </div>
            <div className="rooms__bottom">
              <div className="rooms__info">
                <span className="rooms__name">
                  <a href="#" className="rooms__name-link">
                    Meriton Suites Coward Street, Mascot
                  </a>
                </span>
                <span className="rooms__city">Sydney</span>
                <span className="rooms__price">Starting from 150$</span>
              </div>
              <div className="rooms__rating">
                <button type="button" className="rooms__button">
                  8.9
                </button>
                <span className="rooms__rate">Excellent</span>
              </div>
            </div>
          </li>
          <li className="rooms__item">
            <div className="rooms__image">
              <a href="#" className="rooms__link">
                <img src={Room2} alt="Four Seasons" width={300} height={200} />
              </a>
            </div>
            <div className="rooms__bottom">
              <div className="rooms__info">
                <span className="rooms__name">
                  <a href="#" className="rooms__name-link">
                    Four Seasons Hotel Sydney
                  </a>
                </span>
                <span className="rooms__city">Sydney</span>
                <span className="rooms__price">Starting from 100$</span>
              </div>
              <div className="rooms__rating">
                <button type="button" className="rooms__button">
                  7.5
                </button>
                <span className="rooms__rate">Good</span>
              </div>
            </div>
          </li>
          <li className="rooms__item">
            <div className="rooms__image">
              <a href="#" className="rooms__link">
                <img src={Room3} alt="Glasgow" width={300} height={200} />
              </a>
            </div>
            <div className="rooms__bottom">
              <div className="rooms__info">
                <span className="rooms__name">
                  <a href="#" className="rooms__name-link">
                    Euro Hostel Glasgow
                  </a>
                </span>
                <span className="rooms__city">Glasgow</span>
                <span className="rooms__price">Starting from 80$</span>
              </div>
              <div className="rooms__rating">
                <button type="button" className="rooms__button">
                  8.5
                </button>
                <span className="rooms__rate">Excellent</span>
              </div>
            </div>
          </li>
          <li className="rooms__item">
            <div className="rooms__image">
              <a href="#" className="rooms__link">
                <img src={Room4} alt="Ramses Hilton" width={300} height={200} />
              </a>
            </div>
            <div className="rooms__bottom">
              <div className="rooms__info">
                <span className="rooms__name">
                  <a href="#" className="rooms__name-link">
                    Ramses Hilton Hotel & Casino
                  </a>
                </span>
                <span className="rooms__city">Cairo</span>
                <span className="rooms__price">Starting from 120$</span>
              </div>
              <div className="rooms__rating">
                <button type="button" className="rooms__button">
                  10
                </button>
                <span className="rooms__rate">Exceptional</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rooms;
