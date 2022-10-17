
import React, { useEffect, useState } from 'react';
import axois from 'axios';
import axios from 'axios';

import AddButton from './Component/AddButton';
import DelButton from './Component/DelButton';
import EditButton from './Component/EditButton';
import User from './Component/User';

import { Button } from 'antd';


function UserApi() {

  const [Showform, setShowForm] = useState('');
  const [Displayusers, setDisplayUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  function Showusers() {
    //http://localhost:8080/user
    //https://dummyjson.com/users
    fetch("/user")
      .then((response) => response.json())
      .then((json) => {
        let newusers = json;
        console.log(json);
        setDisplayUsers(newusers);
      });
  }

  useEffect(() => {
    // Use camel Case here
    Showusers();
  }, []);



  const adduser = (user) => {

    // This code is not working properly because here is need of another setState without any use;
    // let userList = Displayusers;
    // userList.push(user);
    // setDisplayUsers(userList);

    //it's written just because of output the all users after adding;
    // let newCounter = counter + 1;
    // setCounter(newCounter);
    console.log(user);//


    axois.post("/user", user)
      .then((json) => {
        //axios.get('/user').then((data) =>{console.log(data.json())});
        Showusers();
      })
      .catch((error) => {
        console.log("this is error " + error)
      });

    //Showusers ();
  }

  const deleteuser = (key) => {
    // console.log(key);
    // let userList = Displayusers;
    // userList.splice(key, 1);
    // setDisplayUsers(userList);

    // //it's written just because of output the all users after deleting;
    // let newCounter = counter + 1;
    // setCounter(newCounter);


    axios.delete(`/user/${key}`)
      .then((json) => {

        Showusers();
      })
      .catch((error) => {
        console.log("this is error " + error)
      });

    //Showusers ();
  }

  const edituser = (updateuser, key) => {
    // let userList = Displayusers;
    // userList[key] = updateuser;
    // setDisplayUsers(userList);

    //it's written just because of output the all users after editing;
    // let newCounter = counter + 1;
    // setCounter(newCounter);


    axios.put(`/user/${key}`, updateuser)
      .then((json) => {

        Showusers();
      })
      .catch((error) => {
        console.log("this is error " + error)
      });

    //Showusers();  
  }

  const hideit = () => {
    setShowForm('');
  }

  const showit = () => {
    setShowForm(
      <>
        <AddButton Adduser={adduser}></AddButton>
        <div className='hideit'>
          <Button className='hideitbtn' onClick={hideit}>Cancel</Button>
        </div>
      </>)
  }

  return (
    <div>
      <div className='navbar'>
        <Button className="showitbtn" onClick={showit}>Add New User</Button>
      </div>
      <div className='showform'>
        {Showform}
      </div>
      <div className='alluser'>
        <div className='userallinfo'>
          <div className='userinfo'>Name</div>
          <div className='userinfo'>Phone no.</div>
          <div className='userinfo'>Email</div>
          <div className='userinfosmall'>Blood Group</div>
          <div className='userinfosmall'>Age</div>
          <div className='userinfosmall'>Weight</div>
          <div className='userinfosmall'>Operations</div>
        </div>
        {Displayusers.map((USER, index) => {

          return (
            <div className='userallinfo'>
              <User key={index} user={USER} />
              <div className='userinfosmall'>
                <DelButton user={USER} deleteuser={deleteuser}></DelButton>
                <EditButton edituser={edituser} user={USER}></EditButton>
              </div>
            </div>)

        })}
      </div>

    </div>
  )

}

export default UserApi;