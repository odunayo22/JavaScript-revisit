/**async await fetch with url parameter */
let users = [];
let sortOrder = 1;
const myUrl = "https://jsonplaceholder.typicode.com/users";


//fetch data function
async function fetchData(url){
    let dat = await fetch(url);
    const ans= dat.json();
    return ans;
}
    
//fetchData(myUrl);


document.addEventListener("DOMContentLoaded", async () => {
    
    try  {
       users = await fetchData(myUrl);
       
       users .map((user)=>{
       
        const show =
    `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        </tr>`;
        

        let tab2=  document.getElementById("table-data");
      tab2.innerHTML += show;
       });
       
    } catch (e){
        console.log(e);
    }

    console.log(users);
})



//Sort User function
function sortUsers(users, order){
    users.sort(()=>{

    })
}



//users is the array of users and order can be 1 or -1, which means ascending or descending respectively
function sortUsers(users, order){
    if(order === 1){
        users.sort(a,b,c)
    }else if (order === -1){
        users.sort(c, b , a)
    }else return;
}

//implement a function that select users with the name input
function filterUserByName(users, name){
    for (i = 0; i > users.length; i++){
        if (sortBtn === name){
             users[i]
        }else return
    }
    return users;

}


function displayData(tbody, users){
    tbody.innerHTml = users?.map((user)=>
    `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
    </tr>`)
    .join("");
}


async function initializeApp(){
    
   

    users = await fetchData(myUrl);
    displayData(tbody, users);

    //wen a visitor click the sortBtn element, the users should be ordered ascending in the first click, and descending in the second click
    sortBtn.addEventListener("click", ()=>{
        sortUsers()
    });

    //when a visitor fill name in the nameFilter element, the table should only show users associated to this name
    
}


const rows = document.querySelectorAll('tbody tr');
console.log(rows);
const sortBtn = document.getElementById("sort");
const nameFilter = document.getElementById("nameFilter");

nameFilter.addEventListener('keyup', function(e){
  
    const q = e.target.value.toLowerCase();
    console.log(e);
    rows.forEach((row)=>{
        console.log(row);
        row.querySelector('td').textContent.toLowerCase().startsWith(q) ? row.style.display = "" : (row.style.display ='none');
    });
});