import React from 'react'
import {Switch, Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import './App.scss';
import {RootPage} from "./pages/RootPage";
import {ColorPickerPage} from "./pages/ColorPickerPage";
import {NotFoundPage} from "./pages/NotFoundPage";


function App() {
  return (
    <Router history={createBrowserHistory()}>
           <Switch>
               <Route path='/' exact component={RootPage}></Route>
               <Route path='/colorPicker' exact component={ColorPickerPage}></Route>
               <Route component={NotFoundPage}></Route>
           </Switch>
    </Router>
  );
}

export default App;
