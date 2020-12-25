import React, {useState} from 'react';

import './Profile.css';
import moment from "moment";

export const Profile = () => {
  const [date, setDate] = useState(moment().format('MMMM Do YYYY'));
  // const [time, setTime] = useState(moment().format('h:mm:ss a'));

  return (
  <div className="profile">

    <div className="dateTime">
      {date}
    </div>

  </div>
)};
