import { Component } from 'react';
import PropTypes from 'prop-types';
import style from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    contactChek = () => {
        const { name, number } = this.state;
        const { contacts } = this.props;
        const namesIn = contacts.reduce(
            (acc, contact) => [...acc, contact.name],
            [],
        );
        const numbersIn = contacts.reduce(
            (acc, contact) => [...acc, contact.number],
            [],
        );

        // if (namesIn.includes(name) || numbersIn.includes(number)) {
        //     alert(`${name}${number} is already in contacts`);
        // }

        // if (name === '' || number === '') {
        //     alert('Enter all data, please');
        // }
    };

    handleSubmit = e => {
        const { name, number } = this.state;

        e.preventDefault();
        this.setState({ name: '', number: '' });
        if (this.contactChek()) {
            return;
        }

        this.props.onSubmit(name, number);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <label className={style.label}>
                    Name:
          <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="enter name"
                        onChange={this.handleChange}
                        className={style.input}
                    />
                </label>

                <label className={style.label}>
                    Number:
          <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        placeholder="enter number"
                        onChange={this.handleChange}
                        className={style.input}
                    />
                </label>
                <button type="submit" className={style.button}>
                    Add contact
        </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};

export default ContactForm;
