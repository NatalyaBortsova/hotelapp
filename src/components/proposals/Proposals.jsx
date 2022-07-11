import { useState } from "react";
import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaSpa,
  FaCalendar,
} from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./Proposals.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const Proposals = ({ type }) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className={type === "list" ? "proposals proposals_mode" : "proposals"}>
      <div className="container">
        <ul className="proposals__list">
          <li className="proposals__item active">
            <FaBed />
            <span>Stays</span>
          </li>
          <li className="proposals__item">
            <FaPlane />
            <span>Flights</span>
          </li>
          <li className="proposals__item">
            <FaCar />
            <span>Car rentals</span>
          </li>
          <li className="proposals__item">
            <FaSpa />
            <span>Attractions</span>
          </li>
          <li className="proposals__item">
            <FaTaxi />
            <span>Airport taxis</span>
          </li>
        </ul>
        {type !== "list" && (
          <>
            <h1 className="proposals__title">
              A lifetime of discounts? It's Genius
            </h1>
            <div className="proposals__text">
              <p>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
            </div>
            <button type="button" className="proposals__button btn">
              Sign in / Register
            </button>
            <div className="proposals__search">
              <form action="#" className="proposals__form">
                <div className="proposals__block">
                  <FaBed size={20} color="#b5aeae" />
                  <input
                    onChange={(e) => setDestination(e.target.value)}
                    className="proposals__input"
                    type="text"
                    placeholder="Where are you going?"
                  />
                </div>
                <div className="proposals__block">
                  <FaCalendar size={20} color="#b5aeae" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="proposals__item-text"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      className="proposals__date"
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="proposals__block">
                  <ImMan size={20} color="#b5aeae" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="proposals__item-text"
                  >
                    {`${options.adult} adult ▪️ ${options.children} children ▪️ ${options.room} room`}
                  </span>{" "}
                  {openOptions && (
                    <div className="proposals__options">
                      <div className="proposals__options-item">
                        <span className="proposals__options-text">Adult</span>
                        <div className="proposals__options-block">
                          <button
                            disabled={options.adult <= 1}
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="proposals__options-number">
                            {options.adult}
                          </span>
                          <button
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="proposals__options-item">
                        <span className="proposals__options-text">
                          Children
                        </span>
                        <div className="proposals__options-block">
                          <button
                            disabled={options.children <= 0}
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="proposals__options-number">
                            {options.children}
                          </span>
                          <button
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="proposals__options-item">
                        <span className="proposals__options-text">Room</span>
                        <div className="proposals__options-block">
                          <button
                            disabled={options.room <= 1}
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="proposals__options-number">
                            {options.room}
                          </span>
                          <button
                            type="button"
                            className="proposals__options-button"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="proposals__block">
                  <button
                    onClick={handleSearch}
                    type="button"
                    className="proposals__button btn"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Proposals;
