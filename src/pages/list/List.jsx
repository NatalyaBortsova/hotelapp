import "./List.scss";
import Proposals from "../../components/proposals/Proposals";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import PropertyCard from "../../components/propertyCard/PropertyCard";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, seOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Proposals type="list" />
      <div className="container">
        <div className="list__wrapper">
          <aside className="list__search search">
            <h2 className="search__title">Search</h2>
            <form action="#" className="search__form">
              <div className="search__block">
                <label className="search__label" htmlFor="destination">
                  Destination
                </label>
                <input
                  className="search__item"
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder={destination}
                />
              </div>
              <div className="search__block">
                <label className="search__label">Check-in-date</label>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="search__item"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    className="search__date"
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="search__block">
                <label className="search__label">Options</label>
                <div className="search__block-inner">
                  <div className="search__block-box">
                    <span className="search__block-text">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="search__block-input" />
                  </div>
                  <div className="search__block-box">
                    <span className="search__block-text">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="search__block-input" />
                  </div>
                  <div className="search__block-box">
                    <span className="search__block-text">Adult</span>
                    <input
                      type="number"
                      className="search__block-input"
                      placeholder={options.adult}
                      min={1}
                    />
                  </div>
                  <div className="search__block-box">
                    <span className="search__block-text">Children</span>
                    <input
                      type="number"
                      className="search__block-input"
                      placeholder={options.children}
                      min={0}
                    />
                  </div>
                  <div className="search__block-box">
                    <span className="search__block-text">Room</span>
                    <input
                      type="number"
                      className="search__block-input"
                      placeholder={options.room}
                      min={1}
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="search__button btn">
                Search
              </button>
            </form>
          </aside>
          <section className="list__result">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default List;
