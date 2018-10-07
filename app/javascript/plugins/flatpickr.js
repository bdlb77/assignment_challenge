import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Note this is important!

flatpickr('.datepicker', {
	altInput: true,
	enable: [
		{
			from: '2017-05-01',
			to: '2017-05-30'
		}
	],
	dateFormat: 'd.m.Y',
	maxDate: '31.05.2017'
});
