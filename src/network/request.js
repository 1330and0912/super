import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/n3',
		timeout: 5000
	})
    //请求拦截器
	instance.interceptors.request.use(
		config => {
			return config
		},
		err => err
	)
    //响应拦截器
	instance.interceptors.response.use(
		result => {
			return result.data
		},
		err => err
	)

	return instance(config)

}