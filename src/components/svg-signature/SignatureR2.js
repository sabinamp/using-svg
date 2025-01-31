import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignatureR2.css';


export default class SignatureR2 extends Component {

  static propTypes = {
    strokewidth: PropTypes.string.isRequired,
    fillcolor: PropTypes.string.isRequired,
    bkgcolor: PropTypes.string.isRequired,
    strokeopacity: PropTypes.string.isRequired,
    signaturewidth: PropTypes.string.isRequired,
    signatureheight: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.pathInfo = [
      { path: '' },
      { path: '' },
      { path: '' }];
    this.path0Ref = React.createRef();
    this.path1Ref = React.createRef();
    this.path2Ref = React.createRef();
    this.signatureRef = React.createRef();

    /* our JavaScript and CSS are tied slightly more together now, as they both need to be aware of what CSS custom variables we use. This is certainly a trade-off but it’s one we are willing to make. */
    this.theme = {
      "--stroke-opacity": props.strokeopacity,
      "--stroke-color": props.fillcolor,
      "--stroke-width": props.strokewidth,
      "--bkg-color": props.bkgcolor,
      "--signature-width": props.signaturewidth,
      "--signature-height": props.signatureheight
    };
  }

  componentDidMount() {
    this.pathInfo = [
      { path: this.path0Ref.current },
      { path: this.path1Ref.current },
      { path: this.path2Ref.current },
    ]

    this.pathInfo.forEach(it => {
      it.total = it.path.getTotalLength();
      it.path.style.strokeDasharray = it.total; // dash with full length, followed by equal empty space
      it.path.style.strokeDashoffset = it.total; // show the empty space

    });

    this.updateCSSCustomProperties(this.props);

    this.signatureRef.current.addEventListener('click', (e) => this.handleClick());
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateCSSCustomProperties(this.props);
    }
  }

  componentWillUnmount() {
    this.signatureRef.current.removeEventListener('click', (e) => this.handleClick());
  }

  updateCSSCustomProperties = (props) => {
    for (let customprop of Object.entries(props)) {
      document.documentElement.style.setProperty(customprop.prop, customprop.value)
    }
  }

  linear = x => x;

  animate = (tweening, millisecs, callback, onDone) => {
    let start = null;
    function paint(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const fraction = progress / millisecs;
      const value = tweening(fraction);
      callback(value);
      if (progress < millisecs) {
        window.requestAnimationFrame(paint);
      } else {
        callback(1);
        if (onDone) onDone();
      }
    }
    callback(0);
    window.requestAnimationFrame(paint);
  };


  animateStroke = n => fraction => {
    const total = this.pathInfo[n].path.getTotalLength();
    this.pathInfo[n].path.style.strokeDashoffset = total * (1 - fraction);
  };


  signature = () => {
    this.animate(this.linear, 500, this.animateStroke(0),
      () => this.animate(this.linear, 1500, this.animateStroke(2),
        () => this.animate(this.linear, 1000, this.animateStroke(1))
      )
    )
  };

  handleClick = () => {
    this.signatureRef.current.classList.add('anim');
    this.signature();
  }


  render() {

    return (
      <div className="SignatureR2" style={this.theme} >
        <div id="signature" ref={this.signatureRef} >
          <svg viewBox="0 -2 43 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path0" ref={this.path0Ref} d="M18 12V45" stroke="black" />
            <path id="path1" ref={this.path1Ref} d="M35 4C35 4 19.5 24 19.5 28.5C19.5 33 38.5 56 38.5 56" stroke="black" />
            <path id="path2" ref={this.path2Ref}
              d="M1.00002 14C2.24347 7.31013 30 13 9.00002 2C21.2046 -0.449153 26.0539 2.28554 33 8.5C45 19.236 44.5 43 33 52.5C21.5 62 14 55 6.99999 54"
              stroke="black" />
          </svg>
        </div>
      </div>
    );
  }
}
