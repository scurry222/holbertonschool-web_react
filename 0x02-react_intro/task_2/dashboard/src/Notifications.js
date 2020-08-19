import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utils'
import close from './close-icon.png';

export const Notification = () => {
  const handleClick = () => console.log('Close button has been clicked')
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
        onClick={handleClick}
      >
        <img src={close} className="close"></img>
      </button>
    </div>
  )
}

export default Notification