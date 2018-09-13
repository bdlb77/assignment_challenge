export const FETCH_DEVICES = 'FETCH_DEVICES';

export function fetchDevices(){
	// Here will make API call to Rails app
	const promise = fetch('/api/v1/devices')
		.then(response => response.json());
	return{
		type: FETCH_DEVICES,
		payload: promise
	}
}
