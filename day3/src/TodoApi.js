
import React, { useEffect, useState } from 'react';
import axois from 'axios';

import AddInTodo from './ComponentTodo/AddInTodo';
import DeleteTodoList from './ComponentTodo/DeleteTodoList';
//import EditButton from './Component/EditButton';

import ProjectCard from './ComponentTodo/ProjectCard';
import { Button } from 'antd';
import axios from 'axios';




function TodoApi() {

  const [ShowformTodo, setShowFormTodo] = useState('');
  const [Displayusers, setDisplayUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  function ShowTodoList() {
   
    fetch("/todo")
      .then((response) => response.json())
      .then((json) => {
        let newusers = json;
        console.log(json);
        setDisplayUsers(newusers);
      });
  }

  useEffect(() => {
    
    ShowTodoList();
  }, []);



  const addproject = (newproject) => {

    // This code is not working properly because here is need of another setState without any use;
    // let userList = Displayusers;
    // userList.push(user);
    // setDisplayUsers(userList);

    //it's written just because of output the all users after adding;
    // let newCounter = counter + 1;
    // setCounter(newCounter);
    console.log(newproject);//
   

     axois.post("/todo", newproject)
       .then((json) => {
        //axios.get('/todo').then((data) =>{console.log(data.json())});
        ShowTodoList();
         })
         .catch((error) =>{
          console.log("this is error " + error)
         });
    
  }

  const deleteproject = (key) => {
    // console.log(key);
    // let userList = Displayusers;
    // userList.splice(key, 1);
    // setDisplayUsers(userList);

    // //it's written just because of output the all users after deleting;
    // let newCounter = counter + 1;
    // setCounter(newCounter);
    
      console.log("this is key " + key);
    axios.delete(`/todo/${key}`)
    .then((json) => {

      ShowTodoList();
       })
       .catch((error) =>{
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

     
    axios.put(`/todo/${key}`, updateuser)
        .then((json) => {
          
          ShowTodoList ();
           })
           .catch((error) =>{
            console.log("this is error " + error)
           });

         //Showusers();  
  }

  const hideit = () => {
    setShowFormTodo('');
  }

  const showit = () => {
    setShowFormTodo(
      <>
        <AddInTodo Addproject={addproject}></AddInTodo>
        <div className='hideit'>
        <Button className='hideitbtn' onClick={hideit}>Cancel</Button>
        </div>
      </>)
  }

  return (
    <div>

      <div className='navbar'>
        <Button className="showitbtn" onClick={showit}>Add Item In To-Do List</Button>
      </div>
      <div className='showform'>
        {ShowformTodo}
      </div>
      <div className='alluser'>
        <div className='userallinfo'>
            <div className='userinfocolor' >Project Title</div>
            <div className='userinfocolor'>Project Status</div>
            <div className='userinfocolor'>Project Owner</div>
            <div className='userinfocolor'>Due Date</div>
            <div className='userinfosmall' style={{color : "blue"}}>Operations</div>
        </div>
        {Displayusers.map((PROJECT, index) => {
        
        return (
          <div className='userallinfo'>
            <ProjectCard key={index}  project={PROJECT} />
            <div className='userinfosmall'>
            <DeleteTodoList  project={PROJECT} Deleteproject={deleteproject}></DeleteTodoList>
            {/* <EditButton  edituser={edituser} user={USER}></EditButton> */}
            </div>
          </div>)

      })}
      </div>

    </div>
  )

}

export default TodoApi;