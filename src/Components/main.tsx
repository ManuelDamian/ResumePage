import React from 'react'
import {  Switch , Route} from 'react-router-dom'
import Principal from "./MainPage"

const Main = () => (
    <Switch>
        <Route exact path="/" component={Principal} />
    </Switch>
)

export default Main 