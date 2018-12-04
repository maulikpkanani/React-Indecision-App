import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = props => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">selected Option</h3>
        {props.selectedOption && (
            <p className="modal__body">{props.selectedOption}</p>
        )}
        <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
        </button>
    </Modal>
);

OptionModal.propTypes = {
    selectedOption: PropTypes.string,
    handleClearSelectedOption: PropTypes.func
};

export default OptionModal;
