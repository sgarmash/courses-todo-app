import React from 'react';

const AppHeader = ({toDo, done}) => {
	return (
    <div className="app-header d-flex">
      <h1>My todo list</h1>
      <h2> {toDo} more todo, {done} done </h2>
    </div>
	);
};

export default AppHeader;