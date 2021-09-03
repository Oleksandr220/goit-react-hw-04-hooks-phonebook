import { useState } from "react";
import "./Form.css";
import shortid from "shortid";

function Form({ addContacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContacts({ name, number });
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  const reset = (e) => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor={nameInputId} className="form__label">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className="form__input"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer и т. п."
      ></input>
      <label htmlFor={numberInputId} className="form__label">
        Number
      </label>
      <input
        type="phone"
        name="number"
        value={number}
        onChange={handleChange}
        className="form__input"
        id={numberInputId}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
      ></input>
      <button type="submit" className="form__button">
        Add contact
      </button>
    </form>
  );
}

export default Form;
