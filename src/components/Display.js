import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';

class Display extends Component {
    render() {
        return (
            <div id="display">
                <p id="display-input">{ this.props.input }</p>
                <p id="display-total">{ this.props.total }</p>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        input: state.input,
        total: state.total
    };
};

export default connect(mapStateToProps, null)(Display);