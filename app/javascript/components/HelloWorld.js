import React from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';
import { hot } from 'react-hot-loader';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button >this ias a Button</Button>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default hot(module)(HelloWorld)
