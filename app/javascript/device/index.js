
import React from 'react'
import ReactDOM from 'react-dom'

import DeviceApp from './components/device_app';




const container = document.querySelector('.device-container')
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DeviceApp />,
    container,
  )
})
