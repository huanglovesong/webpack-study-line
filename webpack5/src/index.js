import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
const app = dva({
    history: createHistory()
})
import { default as Router } from './Router';
// 4. Router
// =======================
app.router(Router);

app.start('#root');

