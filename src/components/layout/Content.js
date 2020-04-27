import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;
  return (
    <main>
      <>
        {children}
      </>
    </main>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired
};
export default Content;
/* if you don't need any dynamic data or local state then you should consider using a stateless component. */

/* pass props as children (<Component>Children Content</Component>). We sent the  SVGAnimContainer1 and 2 components as a child of content to the Content component: */