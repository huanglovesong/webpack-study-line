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
                {/*切换路由时，只是重新render，并未重新构建。要想在切换路由时组件重新构建，
                重新完成一次生命周期，就需要给render组件加上key加上key就会重新渲染*/}
                {/* <Route exact key={"/"} path="/" render={(props) => WraperRouter(props, App)} />
                <Route exact key={"/pageOne"} path="/pageOne" render={(props) => WraperRouter(props, PageOne)} />
                <Route exact key={"/pageTwo"} path="/pageTwo" render={(props) => WraperRouter(props, PageTwo)} /> */}
                <Route exact path="/" render={(props) => WraperRouter(props, App)} />
                <Route exact path="/pageOne" render={(props) => WraperRouter(props, PageOne)} />
                <Route exact path="/pageTwo" render={(props) => WraperRouter(props, PageTwo)} />
            </Switch>
        </ConnectedRouter>
    )
}
export default RouterWrapper;