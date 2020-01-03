import React, { Component } from 'react';
import "./SearchPanel.css";

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onChangeTerm = (e) => {
    const term = e.target.value
    this.setState({
      term
    });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="input-group">
        <input 
          type="search" 
          className="form-control" 
          placeholder="Type here..." 
          value={ this.state.term }
          onChange={this.onChangeTerm}
        />
      </div>
    );
  }
};

