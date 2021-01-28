import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import style from './Filter.module.css';

const Filter = ({ value, onChange, contacts }) => {
    return (<>
        <CSSTransition in={contacts.length > 1 || value.length > 0} classNames={style} timeout={1000} unmountOnExit>
            <label>
                Find contacts by name:
            <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </CSSTransition>
    </>
    );
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};