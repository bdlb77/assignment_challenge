export const FETCH_DEVICES = 'FETCH_DEVICES';

export function fetchDevices(date){
	// Here will make API call to Rails app
	const promise = fetch(`/api/v1/devices?date=${date}`)
		.then(response => response.json());
	return{
		type: FETCH_DEVICES,
		payload: promise
	}
}
