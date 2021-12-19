import React from 'react'
import {Switch ,Route} from "react-router-dom"
import SignIn from "../Signin/signin"
import Dashboard from '../Dasboard/Dashboard'
import Accept from '../Accept/accept'
import Request from '../Request/request'
import Reject from '../Reject/reject'
import Manager from '../Manager/manager'


const RouteConfig = () => {
    return (
        <>
          <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dboard" component={Dashboard} />
          <Route path="/request" component={Request} />
          <Route path="/accept" component={Accept} />
          <Route path="/reject" component={Reject} />
          <Route path="/manager" component={Manager} />
          </Switch>  
        </>
    )
}

export default RouteConfig
