import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utils'

export const Notification = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
        data-priority='urgent'
        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        style={{
            display: 'inline',
        }}
        aria-label='Close'
        onClick="console.log(Close button has been clicked)"
    >
        <img src="./close-icon.png"></img>
      </button>
    </div>
  )
}

export default Notification