import React from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';
import { hot } from 'react-hot-loader';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bolgs:   [],
      count: 0
    };
  }
  
  componentDidMount(){
    console.log(this.props.blog);
    console.log("state.count:"+this.state.count);
    this.setState({bolgs: this.props.blog,count: this.state.count+1});
    console.log("state:"+this.state.bolgs);
    console.log("state.count:"+this.state.count);
  }
  render () {
    // this.state.bolgs.map((b)=>
    //   {
    //     return(
    //       <React.Fragment>
    //         gameName: {b.title}
    //         createTime: {b.created_at}
    //       </React.Fragment>
    //     )
    //   }
    // )
   return(
     <div> nothing</div>
   )
  }
}

// HelloWorld.propTypes = {
//   gameName: PropTypes.string,
//   createTime: PropTypes.string
// };
export default hot(module)(HelloWorld)
