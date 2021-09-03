import React from "react";
import "./ContactList.css";

const ContactsList = ({ users, ondeleteContact }) => (
  <ul className="contactList__list">
    {users.map(({ id, name, number }) => (
      <li key={id} className="contactList__item">
        <span className="contactList__text">{name}:</span>
        <span className="contactList__text">{number}</span>
        <button
          className="contactList__button"
          onClick={() => ondeleteContact(id)}
        >
          Delete contact
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
