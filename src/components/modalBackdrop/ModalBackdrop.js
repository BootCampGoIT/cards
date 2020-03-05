import React, { Component } from 'react';
import css from './ModalBackdrop.module.css';


class ModalBackdrop extends Component {
    state = {
        // isOpen: false,
        isOpen: this.props.isOpen === true ? true : false,
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
        this.props.handleOpenCart();
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
                    <button className={css.lightboxBtn} onClick={this.closeBackDrop}>X</button>
                    {/* your component will be here */}
                </div>
            </div>) : null;
    }

}
export default ModalBackdrop;