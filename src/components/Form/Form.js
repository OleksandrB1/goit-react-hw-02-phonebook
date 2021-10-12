import React, { Component } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  change = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={s.form} onSubmit={this.submit}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.change}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.change}
            />
          </label>

          <button className={s.button} type="submit">
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
