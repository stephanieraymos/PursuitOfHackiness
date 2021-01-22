import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import Bootcamp from './Bootcamp';
import Career from './Career';
import Interview from './Interview';

function Main() {
    return (
        <div>
            <Landing />
            <Switch>
                <Route path='/Landing' component={Landing} />
                <Route path='/Home' component={Home} />
                <Route path='/Bootcamp' component={Bootcamp} />
                <Route path='/Career' component={Career} />
                <Route path='/Interview' component={Interview} />
            </Switch>
        </div>
    )
}

export default Main
