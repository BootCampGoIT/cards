import React, { Component } from 'react';
import css from './Button.module.css';


class Button extends Component {
    state = {
        isOpen: false
    }

    changeState = (e) => {
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen }
        })
    }

    render() {
        return (
            <div className={css.button}>
                <button onClick={this.changeState}>{this.state.isOpen ? "Hide modal" : "Show modal"}</button>

                {this.state.isOpen && <div className={css.modal}>
                    <p style={{ color: "white" }}>Text</p>
                </div>}

            </div>

        );
    }
}

export default Button;