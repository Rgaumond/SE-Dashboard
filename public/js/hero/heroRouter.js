/* LISTING*/
const stackList = () =>{
  fetch('./stacks/',{
      method:"POST",
      headers: {"Content-Type":"application/json"}
  }).then(res => res.json()).then(data => {
      stackInitReponseHandler(data.stacks);                      
  }); 
};

/* ADDING */
const stackAdd = (tempObject) => {
  dialog.standy("adding To Do");
  console.log( tempObject)
  fetch('/stacks/add',{
      method:"POST",
      headers: {"Content-Type":"application/json"}
      ,body: JSON.stringify(tempObject)
  }).then(res => res.json()).then(data =>{
      stackList();
      dialog.disintegrate();
     //window.location.href = "customerView.html?id="+data.newID;                             
  }); 
};

/* UPDATING */
const stackUpdate = (stack) => {
  dialog.standy("update to do");
  fetch('/stacks/update',{
      method:"POST",
      headers: {"Content-Type":"application/json"}
      ,body: JSON.stringify(stack)
  }).then(res =>{
      dialog.disintegrate();
      generateToDoList();
      
     //window.location.href = "customerView.html?id="+data.newID;                             
  });
};

/* DELETING */
const stackDelete = (id,index) => {
  dialog.standy("adding customer");
  fetch('/stacks/delete',{
      method:"POST",
      headers: {"Content-Type":"application/json"}
      ,body: JSON.stringify({_id:id})
  }).then(res=>{
      console.log(stacks)
      stacks.splice(index,1);
      console.log(stacks)
      dialog.disintegrate();
      generateToDoList();
  }); 
};

const requestToDoView = (customerID) => {
  fetch('/customers/view/'+customerID,{
      method:"POST",
      headers: {"Content-Type":"application/json"}
      ,body: JSON.stringify({id:customerID})
  }).then(res => res.json()).then(data => {
      viewInitResponseHandler(data);
  }); 
};

