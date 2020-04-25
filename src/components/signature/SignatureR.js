import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Signature from '../../webcomponents/signature-custom-elem/Signature'

export default class SignatureR extends Component {
  static propTypes = {
    strokewidth: PropTypes.string.isRequired,
    fillcolor: PropTypes.string.isRequired
  };

  componentDidMount() {
    customElements.define('signature-element', Signature);
  }
  render() {
    return (
      <div>
        <signature-element strokewidth={this.props.strokewidth} fillcolor={this.props.fillcolor}></signature-element>
      </div>
    );
  }
}