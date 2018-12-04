import React from 'react';
import PropTypes from 'prop-types';

const Action = props => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
      What should I do?
        </button>
    </div>
);

Action.propTypes = {
    handlePick: PropTypes.func,
    hasOptions: PropTypes.bool
};

export default Action;
