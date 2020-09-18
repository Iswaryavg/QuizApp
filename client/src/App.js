import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Quiz from "./components/Quiz"
import { Input, Button, Progress, Divider } from "antd";
function App() {
  return (
    <BrowserRouter>
    <Switch>
<Route exact path="/" component={Quiz}/>


    </Switch>
    </BrowserRouter>
  );
}

export default App;
