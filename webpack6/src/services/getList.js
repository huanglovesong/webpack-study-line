import axios from '../utils/axios';
import Api from '../configs/api';

export function getList(params) {
    return axios.get(configs.host.test + Api.getList, { 'params': params });
}