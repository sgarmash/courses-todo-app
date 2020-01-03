import React, { Component } from "react";

export default class SearchPanelFilter extends Component {

  buttons = [
    {name: "all", label: "All"},
    {name: "active", label: "Active"},
    {name: "done", label: "Done"}
  ];

  render() {
    const { filter, changeFilter } = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActiveButtons = filter === name;
      const classNames = isActiveButtons ? " btn-primary" : " btn-outline-secondary";
      return (
        <button 
          type="button" 
          className={"btn" + classNames}
          key={name}
          onClick={() => changeFilter(name) }
        >
          {label}
        </button>
      )
    });

    return (

      <div className="input-group-append">
        {buttons}
      </div>
    );
  };
}; 

