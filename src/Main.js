import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    return (
        <div>
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
