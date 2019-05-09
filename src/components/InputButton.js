import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';

import { inputAction, lastInputAction, formulaAction, isSolvedAction } from '../actions/actionCreators';
import { INPUTS, isOperand, endIsOperand, isZero, hasDecimal } from './constInputs';

class InputWrapper extends Component {
    constructor(props) {
        super(props);
        this.solve = this.solve.bind(this);
        this.inputIsNumber = this.inputIsNumber.bind(this);
        this.inputIsDecimal = this.inputIsDecimal.bind(this);
        this.inputIsOperand = this.inputIsOperand.bind(this);
        this.maxCharCount = this.maxCharCount.bind(this);
        this.highlightInput = this.highlightInput.bind(this);
        this.allClear = this.allClear.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        this.highlightInput();

        switch(this.props.clickAction) {
            case "this.allClear":
                this.allClear();
                break;
            case "this.solve":
                this.solve();
                break;
            case "this.inputIsDecimal":
                this.inputIsDecimal();
                break;
            case "this.inputIsOperand":
                this.inputIsOperand();
                break;
            default:
                this.inputIsNumber();                
        };  
    };
    
    solve() {
        if (!/MAX/.test(this.props.input)) {
            let equation = this.props.formula;
            if (endIsOperand.test(equation)) {
                equation = this.props.formula.slice(0,-1)
            };
            
            try {
                let solution = eval(equation);
                this.props.inputAction(solution);
                this.props.formulaAction(equation + '=' + solution);
                this.props.lastInputAction(solution);
                this.props.isSolvedAction(true);
            } catch(error) {
                this.props.inputAction("Error");
            };
        };
    };

    inputIsNumber() {
        if (!/MAX/.test(this.props.input)) {
            this.props.isSolvedAction(false);

            if (this.props.input.length > 18) {
                this.maxCharCount();
            } else if (this.props.solved === true) {
                let formula = this.props.stringName !== '0' ? this.props.stringName : '';
                this.props.inputAction(this.props.stringName);
                this.props.formulaAction(formula);
            } else {
                let input = this.props.input === '0' || isOperand.test(this.props.input) ? this.props.stringName : this.props.input + this.props.stringName;
                let formula = isZero.test(this.props.formula) ? this.props.formula.slice(0, -1) + this.props.stringName : this.props.formula + this.props.stringName;
                this.props.inputAction(input);
                this.props.formulaAction(formula);
            }
        }
    }

    inputIsOperand() {
        if (!/MAX/.test(this.props.input)) {
            this.props.inputAction(this.props.stringName);
            this.props.isSolvedAction(false);

            if (/=/.test(this.props.formula)) {
                this.props.formulaAction(this.props.lastInput + this.props.stringName);
            } else {
                let formula = this.props.formula;
                let lastInput = this.props.lastInput;
                
                formula = !isOperand.test(this.props.input) ? formula += this.props.stringName : this.props.lastInput + this.props.stringName;
                lastInput = !isOperand.test(this.props.input) ? this.props.formula : this.props.lastInput;
                
                this.props.lastInputAction(lastInput);
                this.props.formulaAction(formula);
            }
        }
    }

    inputIsDecimal() {
        if (this.props.solved === true) {
            this.props.inputAction('0.');
            this.props.formulaAction('0.');
            this.props.isSolvedAction(false);
        } else if (!/\./.test(this.props.input) && !/MAX/.test(this.props.input)) {
            this.props.isSolvedAction(false);
            if (this.props.input.length > 18) {
                this.maxCharCount();
            } else if (endIsOperand.test(this.props.formula) || this.props.input === '0' && this.props.formula === '') {
                this.props.inputAction('0.');
                this.props.formulaAction(this.props.formula + '0.');
            } else {
                let input = this.props.formula.match(hasDecimal)[0] + '.';
                this.props.inputAction(input);
                this.props.formulaAction(this.props.formula + '.');
            };
        };
    };

    maxCharCount() {
        let tempInput = this.props.input;
        if (tempInput !== null) {
            this.props.lastInputAction(tempInput);
        }
        this.props.inputAction('MAX DIGITS');
        setTimeout(() => this.props.inputAction(tempInput), 1000);
    }

    highlightInput() {
        let button = document.getElementById(this.props.id);
        let bgColor = button.style.backgroundColor;
        if (button.style.backgroundColor !== 'yellow') {
            button.style.backgroundColor = 'yellow';
            setTimeout(() => { button.style.backgroundColor = bgColor }, 150);
        }
    }

    allClear() {
        this.props.inputAction('');
        this.props.lastInputAction('');
        this.props.formulaAction('');
        this.props.isSolvedAction(false);
    };

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
        lastInput: state.lastInput,
        formula: state.formula,
        solved: state.solved
    };
};

const mapDispatchToProps = { inputAction, lastInputAction, formulaAction, isSolvedAction };

export default connect(mapStateToDispatch, mapDispatchToProps)(InputWrapper);
