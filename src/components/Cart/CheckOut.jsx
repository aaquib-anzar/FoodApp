import { useRef, useState } from "react";
import classes from "./CheckOut.module.css";
import { Link } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isSixChars = (value) => value.trim().length === 6;

const CheckOut = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalCodeInput = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;

    const nameIsValid = isNotEmpty(nameInput);
    const streetIsValid = isNotEmpty(streetInput);
    const postalCodeIsValid = isSixChars(postalCodeInput);
    const cityIsValid = isNotEmpty(cityInput);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postalCode: postalCodeInput,
      city: cityInput,
    });
  };

  const nameControlClass = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetControlClass = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClass = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />

        {!formValidity.name && <p>Please enter a valid name</p>}
      </div>

      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street</p>}
      </div>

      <div className={postalCodeControlClass}>
        <label htmlFor="code">Postal Code</label>
        <input type="text" id="code" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Please enter a valid postalcode</p>}
      </div>

      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <Link to="/">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </Link>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default CheckOut;
