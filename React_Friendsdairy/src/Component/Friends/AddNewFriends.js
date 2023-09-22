import React, { useState } from 'react';
import './AddNewFriends.css';
// import FriendsData from './FriendsData';

const AddNewFriends = (props) => {

  const [enteredName, setenteredName] = useState('')
  const [enteredMobile, setenteredMobile] = useState('')
  const [enteredDate, setenteredDate] = useState('')
  const nameChangeHandler = (event) => {
    setenteredName(event.target.value)
  }
  const mobileChangeHandler = (event) => {
    setenteredMobile(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()

    const friendData = {
      name: enteredName,
      mobile: enteredMobile,
      date: new Date(enteredDate)
    }

    props.onSaveFriendsData(friendData);
    console.log(friendData)
    setenteredName('');
    setenteredMobile('');
    setenteredDate('');

  }
  return (
    <div className='new-friend'>
      <form onSubmit={submitHandler}>
        <div className='new-friend__controls'>
          <div className='new-friend__control'>
            <label>Name : </label>
            <input type='text' value={enteredName} onChange={nameChangeHandler} autoFocus />
          </div>
          <div className='new-friend__control'>
            <label>Mobile : </label>
            <input type='text' value={enteredMobile} onChange={mobileChangeHandler} />
          </div>
          <div className='new-friend__control'>
            <label>Date : </label>
            <input type='date' value={enteredDate} onChange={dateChangeHandler} />
          </div>

        </div>
        <div className='new-friend__actions'>
          <button type='submit'>Add Friend</button>
        </div>

      </form>


    </div>
  )
}

export default AddNewFriends
