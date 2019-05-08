import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';

import { setTotal, inputChange } from '../actions/actionCreators';

class InputWrapper extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        let button = document.getElementById(this.props.id);
        let bgColor = button.style.backgroundColor;

        button.style.backgroundColor = "yellow";
        setTimeout(() => { button.style.backgroundColor = bgColor }, 150);

    
        switch (this.props.stringName) {
            case "AC":
                this.props.inputChange('');
                this.props.setTotal('');
                break;
            case "=":
                if (!(/\D$/.test(this.props.input))) {
                    try {
                        this.props.inputChange(eval(this.props.input));
                    } catch(error) {
                        this.props.setTotal("Error");
                    }
                    break;
                } else {
                    this.props.setTotal("NaN");
                    break;
                }
            default:
                if (this.props.total !== '' || this.props.total !== 'NaN') {
                    if (/\+|\-|\/|\*$/.test(this.props.input)) {
                        this.props.inputChange(toString(this.props.total).concat(this.props.stringName));
                    }
                }
                this.props.inputChange(this.props.input + this.props.stringName);
        }
    };

    componentDidUpdate() {
        if (/\d$/.test(this.props.input)) {
            try {
                this.props.setTotal(eval(this.props.input));
            } catch(error) {
                this.props.setTotal("Error");
            }
        };
        
    }

    render() {
        return (
            <div 
                id={this.props.id} 
                className={this.props.className}
                onClick={this.handleInput}
                >
                <p id="button-text">{this.props.stringName}</p>
            </div>
        );
    };
};

const mapStateToDispatch = (state) => {
    return {
        input: state.input,
        total: state.total
    };
};

const mapDispatchToProps = { setTotal, inputChange };

export default connect(mapStateToDispatch, mapDispatchToProps)(InputWrapper);
