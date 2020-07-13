import * as getList from '../services/getList';

export default {
    namespace: 'getList',
    state: {},
    effects: {
        *getList({ payload, callback }, { call, put }) {
            const testRes = yield call(getList.getList, payload);
            yield put({
                type: 'success',
                payload: {
                    getListResult: testRes
                }
            });
            callback && callback(testRes);
            return testRes;
        },
    },
    reducers: {
        success(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}