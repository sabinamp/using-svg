This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### SVG SIgnature Sketch Integration in React
## App Info

PropTypes validations are very important PropTypes is used to document the intended types of properties passed to components. React will check the props passed to your components against those definitions, and it will send a warning in development if they don't match. (npm i prop-types)

### App Structure
- App, 
- SVGAnimContainer1 which holds 3 SignatureR component instances
- SVGAnimContainer2 holds 2 SignatureR2 component instances
- layout: Header, Footer, Content    
- components: SignatureR, SignatureR2
* SignatureR,SignatureR2 Component props: 
 - stroke fill 
 - stroke-width
 - opacity 
 - background 
 - width, height

**Note: SignatureR.js React Component is a wrapper for the Signature.js web component!**
**Note: SignatureR2.js React Component is a class component wrapping SVG!**