import React from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import todoListData from './components/todoListData';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoListItem: todoListData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("HANDLE CHANGE: " + id);
    this.setState((prevState) => {
      const newTodoListItem = prevState.todoListItem.map((newItem) => {
        //console.log("ITEM: " + newItem.id);
        if(id === newItem.id) {
          newItem.completed = !newItem.completed;
        }

        return newItem;
      });

      return {
        todoListItem: newTodoListItem
      }
    });
  }

  render() {

    const todoListComponent = this.state.todoListItem.map((item) => {
      // console.log("ITEM: " + item.id);
      // console.log("ITEM: " + item.item);
      // console.log("ITEM: " + item.completed);

      return(
        <div>
          <TodoList key={item.id} todo={item} hChange={this.handleChange}/>
        </div>
      );
    });

    return(
      <div>
        {todoListComponent}
      </div>
    );
  }
}

export default App;
