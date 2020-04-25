import React, { Component } from 'react';


class Content extends Component {

  render() {
    const { children } = this.props;

    return (
      <main>
        {children}
      </main>
    );
  }
}

export default Content;