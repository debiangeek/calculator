import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../stylesheets/App.css';

import store from '../store';
import Display from './Display';
import InputButton from './InputButton';
import { INPUTS } from './constInputs';

class Calculator extends Component {
    render() {
        return (
            <Provider store={store} >
                <div id="calculator">
                    <Display />
                    <div id="input-wrapper" >
                        { INPUTS.map((i) => {
                            return <InputButton id={i.id} className={i.className} stringName={i.stringName} />
                        }) }
                    </div>
                </div>
            </Provider>
        );
    };
};

export default Calculator;