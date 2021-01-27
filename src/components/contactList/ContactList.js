import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './ContactList.module.css';
// import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <TransitionGroup component='ul' >
            {contacts.map(({ id, name, number }) => (
                // <CSSTransition key={id} timeout={400} classNames={ContactList} >
                < CSSTransition key={id} timeout={400} classNames={style} >
                    <li key={id} className={style.item}>
                        <p >
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => onDeleteContact(id)}
                            className={style.button}
                        >
                            Delete
          </button>
                    </li>
                </CSSTransition>
            ))
            }
        </TransitionGroup >
    );
}

export default ContactList;

ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};