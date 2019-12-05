import React from 'react';
import {Route, Switch} from 'react-router-dom';

export default ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/preview`} component={require('./button')}/>
            <Route path={`${match.url}/backtop`} component={require('./backtop')}/>
            <Route path={`${match.url}/remind`} component={require('./remind')}/>
            <Route path={`${match.url}/input`} component={require('./input')}/>
            <Route path={`${match.url}/timeline`} component={require('./timeline')}/>
            <Route path={`${match.url}/badge`} component={require('./badge')}/>
            <Route path={`${match.url}/rate`} component={require('./rate')}/>
            <Route path={`${match.url}/select`} component={require('./select')}/>
            <Route path={`${match.url}/switch`} component={require('./switch')}/>
            <Route path={`${match.url}/slider`} component={require('./slider')}/>
            <Route path={`${match.url}/form`} component={require('./form')}/>
            <Route path={`${match.url}/alert`} component={require('./alert')}/>
            <Route path={`${match.url}/loading`} component={require('./loading')}/>
            <Route path={`${match.url}/message`} component={require('./message')}/>
            <Route path={`${match.url}/tooltip`} component={require('./tooltip')}/>
            <Route path={`${match.url}/collapse`} component={require('./collapse')}/>
        </Switch>
    );
};