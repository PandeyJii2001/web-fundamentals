// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  let {limit, skip, total, users} = data;
  console.log(users);


  let maincode=document.getElementById("maincode");
 let user=document.createElement("div");
 user.setAttribute("class", "user");
 maincode

  //USing filter method for id;
 let tempdata = users.filter((ele) => {
  if(ele.age<25){
  console.log(ele.firstName);
  return ele.firstName;
  }
 })

 console.log(tempdata.firstName);
  
 

 


//Using map method;
  // let name=users.map((ele) => {
  //   console.log("firstname: "+ ele.firstName + "  lastname: "+ ele.lastName)
  //   return ("firstname: "+ ele.firstName + "  lastname: "+ ele.lastName);
  // })

  
//USing eachName function;
// let names= users.forEach((ele) => {
//   console.log( "firstname: "+ ele.firstName );
// });

//Using Reduce method;
// let useReduce= users.reduce( (a, b, index) => {
//   a+=b.age;
 
//   console.log(a);
// }, 100);



  // let ele = document.getElementById("code");
  // let tempData = data.filter((a) => a.id < 50);
  // ele.innerHTML = JSON.stringify(tempData, null, 4);
}

fetchDataFromServer();
