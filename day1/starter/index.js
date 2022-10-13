//1. Api call;
//2. Card Layout;
//3. configurable field;

const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;

const uservariable = [
        {
            label: "Name",
            value: "firstName",
            //formatter : nameFormatter,
        },
        {
            label: "Age",
            value: "age",
        },
        {
            label: "Phone no.",
            value: "phone",
        },
        {
            label: "Blood Group",
            value: "bloodGroup",
        },
        {
            label: "Company",
            value: "name",
          },
          {
            label: "Position",
            value: "name",
          },
          {
            label: "weight ",
            value: "weight",
          },

];



   function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => fromStarting(json));
  }


// function setNameValue(label, value){
      
//     let div = document.createElement("div");
//     div.setAttribute("class", "item");

//     let h3 = document.createElement("h3");
//     h3.setAttribute("class", "itemdefine");
//     h3.innerText = label;

//     let span = document.createElement("span");
//     span.setAttribute("class", "itemdefinespan");
//     span.innerText = value;

//     div.appendChild(h3);
//     div.appendChild(span);

//     return div;
    
// }


function fromStarting(data){
   const mainBox = document.getElementById("mainbox");
  
   let {limit, skip, total, users} = data;
   
   //console.log(users);
   //console.log(uservariable);

   users.forEach( (ele) => {

   let mainboxchild = document.createElement("div");
   mainboxchild.setAttribute("class", "start");
    

   let image = document.createElement("img");
   image.setAttribute("class", "image");
   image.setAttribute("src", `${ele.image}`);

   let div = document.createElement("div");
   div.setAttribute("class", "items");


//    console.log(uservariable);

//     uservariable.forEach((ele) => {
//     let { label, formatter, value } = ele;
//     if (formatter) {
//       value = formatter(users);
//     } else {
//       value = users[value];
//       value="surya"
//     }
//     div.appendChild(setNameValue(label, value));
//   });
    


//1st div;
    let div1 = document.createElement("div");
    div1.setAttribute("class", "item");

    let h31 = document.createElement("h3");
    h31.setAttribute("class", "itemdefine");
    h31.innerText = "Name";

    let span1 = document.createElement("span");
    span1.setAttribute("class", "itemdefinespan");
    span1.innerText = ele.firstName +" "+ ele.lastName;

    //2nd div;
    let div2 = document.createElement("div");
    div2.setAttribute("class", "item");

    let h32 = document.createElement("h3");
    h32.setAttribute("class", "itemdefine");
    h32.innerText = "Age";

    let span2 = document.createElement("span");
    span2.setAttribute("class", "itemdefinespan");
    span2.innerText = ele.age;

    //3rd div;
    let div3 = document.createElement("div");
    div3.setAttribute("class", "item");

    let h33 = document.createElement("h3");
    h33.setAttribute("class", "itemdefine");
    h33.innerText = "Phone no.";

    let span3 = document.createElement("span");
    span3.setAttribute("class", "itemdefinespan");
    span3.innerText = ele.phone; 

    //4th div;
    let div4 = document.createElement("div");
    div4.setAttribute("class", "item");

    let h34 = document.createElement("h3");
    h34.setAttribute("class", "itemdefine");
    h34.innerText = "Blood Group";

    let span4 = document.createElement("span");
    span4.setAttribute("class", "itemdefinespan");
    span4.innerText = ele.bloodGroup;

   


    mainBox.appendChild(mainboxchild);

      mainboxchild.appendChild(image);
      mainboxchild.appendChild(div);
     
      

     div.appendChild(div1);
     div1.appendChild(h31);
     div1.appendChild(span1);


     div.appendChild(div2);
     div2.appendChild(h32);
     div2.appendChild(span2);

     div.appendChild(div3);
     div3.appendChild(h33);
     div3.appendChild(span3);

     div.appendChild(div4);
     div4.appendChild(h34);
     div4.appendChild(span4);

    }) ;

}


fetchDataFromServer();