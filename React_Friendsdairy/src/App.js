import React, { useState, useEffect } from 'react'
import Banner from './Component/Title/Banner.js';
import FriendsData from './Component/Friends/FriendsData.js';
import './App.css'
import AddNewFriends from './Component/Friends/AddNewFriends.js';
import EditFriend from './Component/Friends/EditFriend.js';
let DummyFriendsList = [

]

//JSX
const App = () => {

  const [friends, setFriends] = useState(DummyFriendsList)
  const [eid, setEditid] = useState('')
  const [ename, setEditname] = useState('')
  const [emobile, setEditmobile] = useState('')
  const [edate, setEditdate] = useState('')

  let fetchdata = () => {
    fetch('http://localhost/reactapi/list.php').then(
      response => {
        return response.json()
      }
    ).then(
      data => {
        // console.log(data);
        setFriends(data)
      }
    )
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const addFriendsHandler = (friend) => {
    fetch('http://localhost/reactapi/insert.php', {
      method: 'POST',
      body: JSON.stringify(friend),
      headers: {
        'content-Type': "application/json"
      }
    }).then(
      response => {
        fetchdata()
      }
    )
  }

  const getEditFriendDataHandler = (editFriendData) => {
    // console.log("From App.js")
    // console.log(editFriendData);
    setEditid(editFriendData.id)
    setEditname(editFriendData.name)
    setEditmobile(editFriendData.mobile)
    setEditdate(editFriendData.date)
  }

  const updateFriendsHandler = (friend) => {
    // alert("from app.js" + JSON.stringify(friend))
    fetch('http://localhost/reactapi/update.php?id=' + Number(friend.id), {
      method: 'PUT',
      body: JSON.stringify(friend),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(
      response => {
        fetchdata()
        setEditid(0);
      }
    )

  }
  return (
    <div>
      <Banner />
      <AddNewFriends onSaveFriendsData={addFriendsHandler} />
      <div className='friends'>
        {friends.map((friend) => (
          <FriendsData
            key={friend.id}
            id={friend.id}
            name={friend.name}
            mobile={friend.mobile}
            date={new Date(friend.date)}
            onEditFriendsData={getEditFriendDataHandler}
          />
        ))}
      </div>
      {eid ? <EditFriend id={eid} name={ename} mobile={emobile} date={new Date(edate)}
        OnUpdateFriendsData={updateFriendsHandler} /> : null}
    </div>
  )
}


export default App
