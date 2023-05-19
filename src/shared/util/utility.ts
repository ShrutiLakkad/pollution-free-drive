import { ThunkDispatch } from 'redux-thunk'
import _ from 'lodash'
import { IAction, IState } from 'shared/interface/state'

/**
 * create action creator
 * @param ACTION - type of action
 * @param data - data
 */
export const createAction = (ACTION: string, data: any = null): IAction => ({
	type: ACTION,
	payload: data,
})

/**
 * create loading selector
 * @param actions - actions to dispatch
 */
export const createLoadingSelector = (actions: string[]) => (state: IState) =>
	// returns true only when all actions is not loading
	_(actions).some((action: string) => _.get(state, `loading.api.${action}`))

/**
 * dispatch action after given time (to handle some events like close modal after success api call)
 * @param dispatch - dispatch object
 * @param action - action type
 * @param time - time after which action is to be dispatched (default - 100ms)
 */
export const dispatchActionAfterTime = (
	dispatch: ThunkDispatch<unknown, unknown, IAction>,
	action: string,
	time = 100
) => {
	setTimeout(() => {
		dispatch(createAction(action))
	}, time)
}

export const camelCaseToFirstUpperLetter = (text: string) => {
	const result = text.replace(/([A-Z])/g, ' $1')
	const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
	return finalResult
}

export const debounce = (func: any, wait = 400) => {
	let h: NodeJS.Timeout
	return (...args: any) => {
		clearTimeout(h)
		h = setTimeout(() => func(...args), wait)
	}
}
export const generateColor = () => {
	const x = Math.floor(Math.random() * 256)
	const y = Math.floor(Math.random() * 256)
	const z = Math.floor(Math.random() * 256)
	const RGBColor = `${x} ,${y}, ${z}`
	return RGBColor
}
export const sensorsData = [
	{
		id: 1,
		location: 'Bodakdev',
		latitude: 23.0379,
		longitude: 72.5101,
		pm25: 20.5,
		co: 2.8,
		severity: 'Moderate',
		sensor_name: 'Bodakdev Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-01-15',
		temperature: 30.5,
		description: 'This sensor monitors air quality in Bodakdev area.',
	},
	{
		id: 2,
		location: 'Paldi',
		latitude: 23.0131,
		longitude: 72.5627,
		pm25: 35.2,
		co: 4.1,
		severity: 'Unhealthy',
		sensor_name: 'Paldi Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-02-03',
		temperature: 32.1,
		description: 'This sensor measures various pollutants in Paldi area.',
	},
	{
		id: 3,
		location: 'Maninagar',
		latitude: 22.9981,
		longitude: 72.6025,
		pm25: 17.8,
		co: 1.9,
		severity: 'Good',
		sensor_name: 'Maninagar Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-04-12',
		temperature: 29.2,
		description: 'This sensor monitors air quality in Maninagar area.',
	},
	{
		id: 4,
		location: 'Sabarmati',
		latitude: 23.09,
		longitude: 72.5895,
		pm25: 23.6,
		co: 3.2,
		severity: 'Moderate',
		sensor_name: 'Sabarmati Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-03-20',
		temperature: 31.8,
		description:
			'This sensor measures various pollutants in Sabarmati area.',
	},
	{
		id: 5,
		location: 'Vastrapur',
		latitude: 23.0405,
		longitude: 72.5158,
		pm25: 19.1,
		co: 2.3,
		severity: 'Good',
		sensor_name: 'Vastrapur Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-02-28',
		temperature: 31.5,
		description: 'This sensor monitors air quality in Vastrapur area.',
	},
	{
		id: 6,
		location: 'Gandhinagar',
		latitude: 23.2156,
		longitude: 72.6369,
		pm25: 24.3,
		co: 3.4,
		severity: 'Moderate',
		sensor_name: 'Gandhinagar Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-01-20',
		temperature: 29.8,
		description:
			'This sensor measures various pollutants in Gandhinagar area.',
	},
	{
		id: 7,
		location: 'Satellite',
		latitude: 23.0247,
		longitude: 72.5169,
		pm25: 18.6,
		co: 2.6,
		severity: 'Good',
		sensor_name: 'Satellite Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-03-10',
		temperature: 31.2,
		description: 'This sensor monitors air quality in Satellite area.',
	},
	{
		id: 8,
		location: 'Memnagar',
		latitude: 23.0479,
		longitude: 72.5296,
		pm25: 16.9,
		co: 1.7,
		severity: 'Good',
		sensor_name: 'Memnagar Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-02-15',
		temperature: 30.1,
		description: 'This sensor monitors air quality in Memnagar area.',
	},
	{
		id: 9,
		location: 'Navrangpura',
		latitude: 23.037,
		longitude: 72.5608,
		pm25: 21.4,
		co: 2.9,
		severity: 'Moderate',
		sensor_name: 'Navrangpura Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-01-25',
		temperature: 31.9,
		description:
			'This sensor measures various pollutants in Navrangpura area.',
	},
	{
		id: 10,
		location: 'Thaltej',
		latitude: 23.0494,
		longitude: 72.5048,
		pm25: 22.8,
		co: 3.1,
		severity: 'Moderate',
		sensor_name: 'Thaltej Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-04-05',
		temperature: 29.5,
		description: 'This sensor monitors air quality in Thaltej area.',
	},
	{
		id: 11,
		location: 'Chandkheda',
		latitude: 23.1056,
		longitude: 72.5755,
		pm25: 26.7,
		co: 3.8,
		severity: 'Unhealthy',
		sensor_name: 'Chandkheda Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-03-02',
		temperature: 31.3,
		description:
			'This sensor measures various pollutants in Chandkheda area.',
	},
	{
		id: 12,
		location: 'Vejalpur',
		latitude: 22.9824,
		longitude: 72.4934,
		pm25: 18.2,
		co: 2.5,
		severity: 'Good',
		sensor_name: 'Vejalpur Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-02-18',
		temperature: 30.7,
		description: 'This sensor monitors air quality in Vejalpur area.',
	},
	{
		id: 13,
		location: 'Naranpura',
		latitude: 23.0524,
		longitude: 72.5484,
		pm25: 20.9,
		co: 2.7,
		severity: 'Moderate',
		sensor_name: 'Naranpura Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-01-30',
		temperature: 29.4,
		description:
			'This sensor measures various pollutants in Naranpura area.',
	},
	{
		id: 14,
		location: 'Ghatlodiya',
		latitude: 23.0756,
		longitude: 72.5485,
		pm25: 21.8,
		co: 2.9,
		severity: 'Moderate',
		sensor_name: 'Ghatlodiya Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-04-10',
		temperature: 31.6,
		description: 'This sensor monitors air quality in Ghatlodiya area.',
	},
	{
		id: 15,
		location: 'Drive-In',
		latitude: 23.0539,
		longitude: 72.5302,
		pm25: 17.3,
		co: 2.2,
		severity: 'Good',
		sensor_name: 'Drive-In Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-03-08',
		temperature: 29.9,
		description: 'This sensor monitors air quality in Drive-In area.',
	},
	{
		id: 16,
		location: 'Gurukul',
		latitude: 23.0397,
		longitude: 72.5609,
		pm25: 19.6,
		co: 2.5,
		severity: 'Good',
		sensor_name: 'Gurukul Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-02-20',
		temperature: 30.3,
		description: 'This sensor monitors air quality in Gurukul area.',
	},
	{
		id: 17,
		location: 'Bopal',
		latitude: 23.0166,
		longitude: 72.4667,
		pm25: 24.1,
		co: 3.3,
		severity: 'Moderate',
		sensor_name: 'Bopal Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-01-27',
		temperature: 31.1,
		description: 'This sensor measures various pollutants in Bopal area.',
	},
	{
		id: 18,
		location: 'Ambawadi',
		latitude: 23.0227,
		longitude: 72.5576,
		pm25: 18.9,
		co: 2.4,
		severity: 'Good',
		sensor_name: 'Ambawadi Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-04-08',
		temperature: 30.4,
		description: 'This sensor monitors air quality in Ambawadi area.',
	},
	{
		id: 19,
		location: 'Shahibaug',
		latitude: 23.0576,
		longitude: 72.5905,
		pm25: 20.3,
		co: 2.6,
		severity: 'Moderate',
		sensor_name: 'Shahibaug Sensor',
		sensor_type: 'Pollution Monitor',
		installation_date: '2023-02-10',
		temperature: 29.7,
		description:
			'This sensor measures various pollutants in Shahibaug area.',
	},
	{
		id: 20,
		location: 'Nikol',
		latitude: 23.0365,
		longitude: 72.6412,
		pm25: 26.5,
		co: 3.7,
		severity: 'Unhealthy',
		sensor_name: 'Nikol Sensor',
		sensor_type: 'Air Quality Sensor',
		installation_date: '2023-03-05',
		temperature: 31.7,
		description: 'This sensor monitors air quality in Nikol area.',
	},
]
