import React from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';
import { hot } from 'react-hot-loader';


class Items extends React.Component {
    getInitialState() {
        return { items: [] }
    }
    
    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    }
    render() {
        var items= this.state.items.map((item) => {
            return (
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            )
        });
    
        return(
            <div>
                {items}
            </div>
        )
    }
  }



export  default Items;