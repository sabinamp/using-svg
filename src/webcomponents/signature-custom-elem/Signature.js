export default class Signature extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ['strokewidth', 'fillcolor', 'bkgcolor', 'strokeopacity', 'signaturewidth', 'signatureheight'];
  }

  constructor() {
    super();
    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });
  }

  //gets invoked every time a copy of a Web Component gets added to the DOM
  connectedCallback() {
    this.init();
    this.shadowObj.querySelector('#signature')
      .addEventListener('click', (e) => this.handleClick());

  }

  init() {
    this.render();
    this.pathInfo = [
      { path: this.shadowObj.querySelector("#path0") },
      { path: this.shadowObj.querySelector("#path1") },
      { path: this.shadowObj.querySelector("#path2") },
    ];

    this.pathInfo.forEach(it => {
      it.total = it.path.getTotalLength();
      it.path.style.strokeDasharray = it.total; // dash with full length, followed by equal empty space
      it.path.style.strokeDashoffset = it.total; // show the empty space

    });
  }

  handleClick() {
    this.shadowObj.querySelector('#signature').classList.add('anim');
    this.signature();
  }

  disconnectedCallback() {
    console.log('Custom element removed.');
  }
  //Life cycle callback methods are hooks or interfaces that get called back whenever a Web Component goes
  //through these life cycle events
  adoptedCallback() {
    console.log('Custom element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'strokewidth') {
      this.strokewidth = newValue;
    }

    if (name === 'fillcolor') {
      this.fillcolor = newValue;
    }
    if (name === 'bkgcolor') {
      this.bkgcolor = newValue;
    }
    if (name === 'strokeopacity') {
      this.strokeopacity = newValue;
    }
    if (name === 'signaturewidth') {
      this.signaturewidth = newValue;
    }
    if (name === 'signatureheight') {
      this.signatureheight = newValue;
    }

    // Lets re-render after getting the new attributes
    this.render();
    console.log("fillcolor: " + this.fillcolor + "; strokewidth: " + this.strokewidth
      + "background color: " + this.bkgcolor + "stroke opacity: " + this.strokeopacity);
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }


  animateStroke = n => fraction => {
    //console.log("entering animateStroke()");
    const total = this.pathInfo[n].path.getTotalLength();
    //console.log("path info[" + n + "] total:" + total);
    this.pathInfo[n].path.style.strokeDashoffset = total * (1 - fraction);
  };



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

  signature = () => {
    this.animate(x => x, 500, this.animateStroke(0),
      () => this.animate(x => x, 1300, this.animateStroke(2),
        () => this.animate(x => x, 1000, this.animateStroke(1))
      ))
  };


  getTemplate() {
    return `
    <div id="signature">
        <svg viewBox="0 -2 43 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path0" d="M18 12V45" stroke="black"/>
            <path id="path1" d="M35 4C35 4 19.5 24 19.5 28.5C19.5 33 38.5 56 38.5 56" stroke="black"/>
            <path id="path2"
                  d="M1.00002 14C2.24347 7.31013 30 13 9.00002 2C21.2046 -0.449153 26.0539 2.28554 33 8.5C45 19.236 44.5 43 33 52.5C21.5 62 14 55 6.99999 54"
                  stroke="black"/>
        </svg>
    </div>
    ${this.getStyle()}
    `;
  }
  getStyle() {
    return `
      <style>
        :host {
          height: 70vh;
          display: flex;
          background: ${this.getAttribute('bkgcolor')};
          align-items: center;
          justify-content: center;        
          --stroke-width: ${this.getAttribute('strokewidth')};
          --stroke-opacity: ${this.getAttribute('strokeopacity')};
          --stroke-color: ${this.getAttribute('fillcolor')};
        }        
        #signature {
          width:  ${this.getAttribute('signaturewidth')}; 
          height: ${this.getAttribute('signatureheight')};
      }
      svg {
          width:  100%; /* try to fill 1/2 of the container but keep aspect ratio */
          height: 100%;
          filter: drop-shadow(0px 0px 1em var(--stroke-color));
      }
      svg path {
          stroke-width: var(--stroke-width);
          stroke-opacity: var(--stroke-opacity);
          stroke-linecap: round;
          stroke: var(--stroke-color);
      }
      .anim {
          transform: rotate(20deg) scaleX(2);
          transition: transform ease-out 2.5s;
          transition-delay: .5s;
      }
      </style>
    `;
  }
}
/*
Bei SVG bieten sich die folgenden Operationen an:

Änderung von stroke und stroke-width zur Beeinflussung von Linien
Änderung von fill zur Veränderung der Füllfarbe
Änderung von opacity zur Veränderung der Durchsichtigkeit eines Elements
Veränderung von Position, Größe und Rotation mittels transform
Austausch des Text-Inhalts von <text>-Knoten mittels .textContent
Bei SVG gibt es dabei die Möglichkeit, nicht nur via CSS diese Eigenschaften zu beeinflussen, sondern auch durch das Setzen von Attributen innerhalb des SVGs an einzelnen SVG-DOM-Knoten. */