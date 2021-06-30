import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import Counter from './Counter'
import ThemeClass from './ThemeClass'
import ThemeFun from './ThemeFun'
import Todo from './Todo'
import ShowHide from './ShowHide'
import CharLimit from './CharLimit'
import WaitDelay from './WaitDelay'
import ApiRequest from './ApiRequest'
import WaitWithCustomHook from './WaitWithCustomHook'
import WindowDimension from './WindowDimension'
import FetchPost from './FetchPost'
import CounterUseReducer from './CounterUseReducer'
import FetchPostWithUseReducer from './FetchPostWithUseReducer'
import ComplexForm from './ComplexForm'
import ClickGame from './ClickGame'

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <Switch>
      <Route path="/todo"> <Todo/> </Route>
      <Route path="/theme-class"> <ThemeClass/> </Route>
      <Route path="/theme-fun"> <ThemeFun/> </Route>
      <Route path="/counter"> <Counter/> </Route>
      <Route path="/show-hide"> <ShowHide/> </Route>
      <Route path="/char-limit"> <CharLimit/> </Route>
      <Route path="/wait-delay"> <WaitDelay/> </Route>
      <Route path={'/api-req'}><ApiRequest/></Route>
      <Route path={'/wait-with-custom-hook'}><WaitWithCustomHook/></Route>
      <Route path={'/window-dimension'}><WindowDimension/></Route>
      <Route path={'/fetch-post'}><FetchPost/></Route>
      <Route path={'/counter-with-use-reducer'}><CounterUseReducer/></Route>
      <Route path={'/fetch-post-with-use-reducer'}><FetchPostWithUseReducer/></Route>
      <Route path={'/complex-form'}><ComplexForm/></Route>
      <Route path={'/click-game'}><ClickGame/></Route>

      {/*Home*/}
      <Route path="/" exact> <App/> </Route>
    </Switch>
  </Router>,
// </React.StrictMode>,
  document.getElementById('root'),
)

