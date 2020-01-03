import React, { Component } from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm";
import SearchPanelFilter from "../SearchPanelFilter";
export default class App extends Component {
  maxId = 100;

  state = {
    TodoData : [
      this.createTodoItem("Drink coffe"),
      this.createTodoItem("Build react app"),
      this.createTodoItem("Make awesome app")
    ],
    term: '',
    filter: 'all' // Active, All, Done
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  };

  onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [ 
      ...arr.slice( 0, idx ),
      newItem, 
      ...arr.slice( idx + 1 )
    ];
  };

  deleteItem = (id) => {
    this.setState(({ TodoData }) => {
      const idx = TodoData.findIndex((el) => el.id === id);
      const newArray = [ 
        ...TodoData.slice( 0, idx ), 
        ...TodoData.slice( idx + 1 )
      ];
      return {
        TodoData: newArray
      };  
    });
  };

  addedItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(( { TodoData } ) => {
      const newArrItem = [
        ...TodoData,
        newItem
      ];

      return {
        TodoData: newArrItem
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ TodoData }) => {
      return {
        TodoData: this.onToggleProperty( TodoData , id , "important" )
      };  
    });
  };

  onToggleDone = (id) => {
    this.setState(({ TodoData }) => {
      return {
        TodoData: this.onToggleProperty( TodoData , id , "done" )
      };  
    });
  };
  onSearchChange = (term) => {
    this.setState({
      term
    });
  }


  search(items, term) {
    if( term.length === 0 ) {
      return items;
    }
    return items.filter((items) => {
      return items.label.toLowerCase().indexOf( term.toLowerCase() ) > -1;
    });
  };

  filter(items, filter) {
    switch(filter) {
      case "all":
        return items;
      case "active": 
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    };
  };

  changeFilter = (filter) => {
    this.setState({
      filter
    });
  }

  render() {

    const { TodoData, term, filter } = this.state;
    const doneCount = TodoData.filter((el) => el.done).length;
    const todoCount = TodoData.length - doneCount;
    const visibleItems = this.filter(this.search(TodoData, term), filter);
    return (
      <div className="container">
        <AppHeader 
          toDo={ todoCount }
          done={ doneCount }
        />
        <SearchPanel
          
          onSearchChange={ this.onSearchChange }  
        />
        <SearchPanelFilter 
          filter={ filter }
          changeFilter={ this.changeFilter } 
        />
        <TodoList 
          todos={ visibleItems } 
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <ItemAddForm 
          addedItem={ this.addedItem }  
        /> 
      </div>  
    );
  }
};