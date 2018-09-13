import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css" // A path to the theme CSS

flatpickr(".datepicker", {
    defaultDate: ["2017-05-01"],
    enable: [
        {
            from: "2017-05-01",
            to: "2017-05-30"
        }
    ]
})
