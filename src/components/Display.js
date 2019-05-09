import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';

class Display extends Component {
    render() {
        return (
            <div id="display-wrapper">
                <div id="display-total">{ this.props.formula }</div>
                <div id="display">{ this.props.input }</div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        formula: state.formula,
        input: state.input
    };
};

export default connect(mapStateToProps, null)(Display);