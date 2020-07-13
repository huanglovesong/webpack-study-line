import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
// import { RouteWithLayout } from '../component/layout';

const { ConnectedRouter } = routerRedux;

const RouterWrapper = ({ history, app }) => {


    const PublicLayout = dynamic({
        app,
        component: () => { return import('../components/PublickLayout'); },
    });


    const App = dynamic({
        app,
        component: () => { return import('../components/App'); },
    });


    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App} />

            </Switch>
        </ConnectedRouter>
    );
};

RouterWrapper.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
};

RouterWrapper.defaultProps = {
    history: {},
    app: {},
};

export default RouterWrapper;
