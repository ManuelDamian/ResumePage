import React from 'react'
import {  Switch , Route, Redirect} from 'react-router-dom'
import Principal from "./MainPage"

const Main = () => (
    <Switch>
        <Route path="/" component={Principal}/>
        <Redirect to="/"/>
    </Switch>
)

export default Main 