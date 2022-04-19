import React from 'react'
import {Dashboard, Error, Login} from './Routes/Routes';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import  ContextProvider  from './Context/context';

const App = () => {
  return (
    <div>
      <ContextProvider>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App