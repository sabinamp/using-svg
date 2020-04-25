import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Signature from '../../webcomponents/signature-custom-elem/Signature'

export default class SignatureR extends Component {
  static propTypes = {
    strokewidth: PropTypes.string.isRequired,
    fillcolor: PropTypes.string.isRequired,
    bkgcolor: PropTypes.string.isRequired,
    strokeopacity: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (!customElements.get('signature-element')) {
      customElements.define('signature-element', Signature);
    }

  }
  render() {
    const borderStyle = {
      border: '1px solid white',
    };
    return (
      <div style={borderStyle}>
        <signature-element strokewidth={this.props.strokewidth} fillcolor={this.props.fillcolor} bkgcolor={this.props.bkgcolor} strokeopacity={this.props.strokeopacity}>
        </signature-element>
      </div>
    );
  }
}