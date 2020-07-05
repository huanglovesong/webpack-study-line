import React from 'react';
import {
    Switch,
    Route,
    routerRedux
} from 'dva/router';
import dynamic from 'dva/dynamic';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
const { ConnectedRouter } = routerRedux;

function RouterWrapper({ app, history }) {
    const PublickLayout = dynamic({
        app,
        component: () => import('./components/PublickLayout'),
    });
    const PageOne = dynamic({
        app,
        component: () => import('./components/PageOne'),
    });
    const PageTwo = dynamic({
        app,
        component: () => import('./components/PageTwo'),
    });
    const App = dynamic({
        app,
        component: () => import('./components/App'),
    });
    const WraperRouter = (props, WrappedComponent) => {
        return (
            <PublickLayout {...props}>
                <LocaleProvider locale={zh_CN}>
                    <WrappedComponent {...props} />
                </LocaleProvider>
            </PublickLayout>
        )
    }
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={(props) => WraperRouter(props, App)} />
                <Route exact path="/pageOne" render={(props) => WraperRouter(props, PageOne)} />
                <Route exact path="/pageTwo" render={(props) => WraperRouter(props, PageTwo)} />
            </Switch>
        </ConnectedRouter>
    )
}
export default RouterWrapper;