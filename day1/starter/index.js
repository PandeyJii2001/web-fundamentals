//1. Api call;
//2. Card Layout;
//3. configurable field;

const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;
let uservariable = [
  {
    label: "Name ",
    value: "name",
    formatter: nameFormatter,
  },
  {
    label: "Age",
    value: "age",
  },
  {
    label: "Phone ",
    value: "phone",
  },
  {
    label: "Blood Group",
    value: "bloodGroup",
  },
  {
    label: "Company",
    value: "name",
    formatter: companyNameFormatter,
  },
  {
    label: "Position",
    value: "name",
    formatter: companyPositionFormatter,
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


function setNameValue(label, value){
      
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let h3 = document.createElement("h3");
    h3.setAttribute("class", "itemdefine");
    h3.innerText = label;

    let span = document.createElement("span");
    span.setAttribute("class", "itemdefinespan");
    span.innerText = value;

    div.appendChild(h3);
    div.appendChild(span);

    return div;
    
}


function fromStarting(data){
   const mainBox = document.getElementById("mainbox");
  
   let {limit, skip, total, users} = data;
   
   console.log(users);
   

   users.map( (ele) => {

   let mainboxchild = document.createElement("div");
   mainboxchild.setAttribute("class", "start");
    

   let image = document.createElement("img");
   image.setAttribute("class", "image");
   image.setAttribute("src", `${ele.image}`);

   let div = document.createElement("div");
   div.setAttribute("class", "items");

    
     uservariable.forEach((ele1) => {
    let { label,formatter, value } = ele1;
    if (formatter) {
      value = formatter(ele);
    } else {
      value = ele[value];
      
    }

   
    div.appendChild(setNameValue(label, value));
  });
    


    mainBox.appendChild(mainboxchild);

      mainboxchild.appendChild(image);
      mainboxchild.appendChild(div);
   
    }) ;

}


fetchDataFromServer();