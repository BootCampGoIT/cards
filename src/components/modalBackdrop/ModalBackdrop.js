import React, { Component } from 'react';
import css from './ModalBackdrop.module.css';


class ModalBackdrop extends Component {
    state = {
        isOpen: this.props.isOpen === true ? true : false, //true
    };

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escFunction, false);
    }

    escFunction = event => {
        if (event.keyCode === 27) {
            this.closeBackDrop();
        }
    };
    closeBackDrop = () => {
        this.setState({
            isOpen: false
        });
        this.props.handleOpen();
    };

    outsideClick = event => {
        const dataset = event.target.dataset;
        if (dataset && dataset.modal === 'true') {
            this.closeBackDrop();
        }
    };
    render() {
        return this.state.isOpen ? (
            <div
                className={css.lightbox}
                data-modal={'true'}
                onClick={this.outsideClick}
            >
                <div className={css.form}>
                    {this.props.children}
                    <button className={css.lightboxBtn} onClick={this.closeBackDrop}>X</button>
                </div>
            </div>) : null;
    }

}
export default ModalBackdrop;