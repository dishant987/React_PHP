import React from 'react';
import './FriendsData.css'
const FriendsData = (props) => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  const editHandler = (id) => {
    // alert(id);
    fetch('http://localhost/reactapi/getStudentById.php?id=' + id)
      .then((response) => {
        return response.json()
      }).then((data) => {
        // console.log(data)
        // alert(JSON.stringify(data))

        const friendsdata = {
          id: data.id,
          name: data.name,
          mobile: data.mobile,
          date: new Date(data.date)
        }

        props.onEditFriendsData(friendsdata)
      })
  }

  const deleteHandler = (id) => {
    if (window.confirm("Are You sure")) {
      fetch('http://localhost/reactapi/delete.php?id=' + id, {
        method: 'DELETE',
        headers: {
          "content-Type": "application/json",
        },
      }).then(alert("OK.....Deleted Record : " + id),
        window.location.reload(false)
      )
    } else {
      alert("noice")
    }

  }
  return (
    <div className='friends-item'>
      <div className='friends-date'>
        {/* {day}-{month}-{year} */}
        <div className='friends-date__month'>{month}</div>
        <div className='friends-date__year'>{year}</div>
        <div className='friends-date__day'>{day}</div>

      </div>
      <div className='friends-item__description'>
        <h1>{props.name}</h1>
      </div>
      <div className='friends-item__mobile'>{props.mobile}</div>
      <div>
        <input type='button'
          className='friends-item__edit'
          onClick={() => editHandler(props.id)}
          value={'Edit'} />
      </div>
      <div>
        <input type='button'
          className='friends-delete'
          onClick={() => deleteHandler(props.id)}
          value={'Delete'} />
      </div>
    </div>
  )
}

export default FriendsData
