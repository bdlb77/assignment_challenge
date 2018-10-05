export const FETCH_DEVICES = 'FETCH_DEVICES';
export const FETCH_DEVICES_BY_TYPE_AND_STATUS = 'FETCH_DEVICES_BY_TYPE_AND_STATUS';

export function fetchDevices(date){
	// Here will make API call to Rails app
	const promise = fetch(`/api/v1/devices?date=${date}`)
	.then(response => response.json());
	return{
		type: FETCH_DEVICES,
		payload: promise
	}
}

export function fetchDeviceTypesAndStatus(type, status){
	const promise = fetch(`api/v1/devices?type=${type}&status=${status}`)
	.then(response => response.json());
	return{
		type: FETCH_DEVICES_BY_TYPE_AND_STATUS,
		payload: promise
	}
}
