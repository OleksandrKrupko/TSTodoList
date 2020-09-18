import * as React from "react";
import "./styles.css";

// hello 2

import * as todo from "./todo";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <todo.TodoList />
    </div>
  );
}
