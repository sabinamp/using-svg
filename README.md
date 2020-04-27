This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##SVG SIgnature Sketch Integration in React

SVG CSS Animation Integration in React - implemented 2 alternatives: using web components or only React.

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
 * SignatureR.js React Component is a wrapper for the Signature.js web component!
*  SignatureR2.js React Component is a class component wrapping SVG!
** Note: there is a short presentation pdf in the doc folder! **

** Note: PropTypes validations are very important PropTypes is used to document the intended types of properties passed to components. React will check the props passed to your components against those definitions, and it will send a warning in development if they don't match. (npm i prop-types) **