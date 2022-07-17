import React, { useEffect, useReducer, useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import { reducer } from "./utils"
import { Login, Rooms, Chat } from "./pages"

const App = () => {
  // const [user, setUser] = useState({ name: undefined, isLogged: false })
  const [userState, dispatch] = useReducer(reducer, {
    id: undefined,
    name: undefined,
    isLogged: false
  })

  const onLogin = (id, name) => {
    dispatch({
      type: "IS_LOGGED",
      payload: { id: id, name: name },
    })
    
  }

  return (
    <Router>
      <Switch>
        {!userState.isLogged ? (
          <>
            <Redirect to="/login" />
            <Route
              exact
              path="/login"
              component={() => <Login onLogin={onLogin} />}
            />
          </>
        ) : (
          <>
            <Route exact path="/rooms" component={() => <Rooms userName={userState.name}/>} />
            <Route exact path="/rooms/:id" component={() => <Chat userName={userState.name}/>} />
            {/* <Redirect to="/rooms" /> */}
          </>
        )}
      </Switch>
      <div className="footer"></div>
    </Router>
  )
}

export default App
