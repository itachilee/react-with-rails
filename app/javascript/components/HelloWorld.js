import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { hot } from "react-hot-loader";

class HelloWorld extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  // componentDidMount() {
  //   $.getJSON("/api/v1/items.json", (response) => {
  //     this.setState({ items: response });
  //   });
  // }

  componentDidMount(){
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }
  render() {
    var items = this.state.items.map((item,key) => {
      return (
        <div key={key}>
          <h3 >{item.name}</h3>
          <p >{item.description}</p>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}

// HelloWorld.propTypes = {
//   gameName: PropTypes.string,
//   createTime: PropTypes.string
// };
export default hot(module)(HelloWorld);
