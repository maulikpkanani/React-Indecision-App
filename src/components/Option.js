import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
    <div className="option">
        <p className="option__text"> {props.optionText}</p>
        <button
            className="button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
      remove
        </button>
    </div>
);

Option.propTypes = {
    optionText: PropTypes.string,
    handleDeleteOption: PropTypes.func
};

export default Option;
