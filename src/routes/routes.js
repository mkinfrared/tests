import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from '../components/Home/Home'
import Test from "../components/Test/Test"

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path="/test/:name" component={Test} />
  </Switch>
)
