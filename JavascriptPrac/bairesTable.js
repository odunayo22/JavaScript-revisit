
//Insrting tables from API fetch
const addDat= document.getElementById("getDataButton");
addDat.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()
    .then(response=>{
    console.log(response)
    response.map(user =>{
        
        const markup = `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
        <td>${user.address.suite}</td>
        </tr>`;
        
      let tabl=  document.getElementById("userData");
      tabl.innerHTML += markup;
           
          /*var tb1 = document.getElementById("userData");
          var row = tb1.insertRow();
          var cell1 = row.insertCell(); var cell2 = row.insertCell(); var cell3 = row.insertCell();
          var cell4 = row.insertCell(); var cell5 = row.insertCell(); var cell6 = row.insertCell();
          var cell7 = row.insertCell(); var cell8 = row.insertCell(); 
          cell1.innerTHML = `${user.id}`;
          cell2.innerTHML = `${user.username}`;
          cell3.innerTHML = `${user.id}`;
          cell4.innerTHML = `${user.id}`;
          */
    });
    })
    .catch(error=> console.log(error))

)
})



//Dynamic Field
const addBtn = document.querySelector(".add");
const input = document.querySelector(".ip-group");

function removeInput(){
    this.parentElement.remove();
}
function addInput(){
    const name = document.createElement('input');
    name.type ="text";
    name.placeholder="Enter your name";

    const email = document.createElement('input');
    email.type ="email";
    email.placeholder="Enter your email";

    const btn = document.createElement("a");
    btn.className="delete";
    btn.innerHTML="x";

    btn.addEventListener("click", removeInput);

    const flex = document.createElement("div");
    flex.className="flex";

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(email);
    flex.appendChild(btn);

}

/*
addBtn.addEventListener("click", addInput);
*/

