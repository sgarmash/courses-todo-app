import React, { Component } from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    inputValue: ''
  };

  onLableChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.addedItem(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    return(
      <form className="item-add-form d-flex" onSubmit={ this.onSubmitForm }>
        <input 
          type="text"
          value={ this.state.inputValue }
          className="form-control"
          onChange={ this.onLableChange } 
          placeholder=" What needs to be done "
        
        />
        <button className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  };
};
