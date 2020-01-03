import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
    let classNames = "todo-list--block";

    if(done) {
      classNames += " done";
    }

    if(important) {
      classNames += " important";
    }

    return (
      <div className={ classNames } >
        <span 
          onClick={ onToggleDone } 
        >
          { label }
        </span>
        <div className="input-group-append">
          <button 
            type="button" 
            className="btn btn-outline-info todo-button-filter"
            onClick={ onDeleted }
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <button 
            type="button" 
            className="btn btn-outline-info todo-button-filter"
            onClick={ onToggleImportant }
          >
            <i className="fa fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  };
};