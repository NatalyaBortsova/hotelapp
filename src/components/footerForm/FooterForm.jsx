import "./FooterForm.scss";

const FooterForm = () => {
  return (
    <div className="form-block">
      <h2 className="form-block__title">Save time, save money!</h2>
      <h3 className="form-block__subtitle">
        Sign up and we'll send the best deals to you
      </h3>
      <div className="form-block__inner">
        <form action="#" className="form-block__form form">
          <div className="form__inner">
            <input
              type="text"
              placeholder="Your email"
              className="form__input"
              required
            />
            <button className="form__button btn">Subscribe</button>
          </div>
          <div className="form__bottom">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="form__input-checkbox"
            />
            <label className="form__label" htmlFor="checkbox">
              Send me a link to get the FREE Booking.com app!
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
