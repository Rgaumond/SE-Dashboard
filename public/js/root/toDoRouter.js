/* LISTING*/
const toDoList = () => {
  fetch("./todos/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      toDoInitReponseHandler(data.todos);
    });
};

/* ADDING */
const toDoAdd = (tempObject) => {
  dialog.standy("adding To Do");
  //console.log( tempObject)
  fetch("/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tempObject),
  })
    .then((res) => res.json())
    .then((data) => {
      toDoList();
      dialog.disintegrate();
      //window.location.href = "customerView.html?id="+data.newID;
    });
};

/* UPDATING */
const toDoUpdate = (todo) => {
  dialog.standy("update to do");
  fetch("/todos/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => {
    dialog.disintegrate();
    generateToDoList();

    //window.location.href = "customerView.html?id="+data.newID;
  });
};

/* DELETING */
const toDoDelete = (id, index) => {
  dialog.standy("adding customer");
  fetch("/todos/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: id }),
  }).then((res) => {
    console.log(todos);
    todos.splice(index, 1);
    console.log(todos);
    dialog.disintegrate();
    generateToDoList();
  });
};

const requestToDoView = (customerID) => {
  fetch("/customers/view/" + customerID, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: customerID }),
  })
    .then((res) => res.json())
    .then((data) => {
      viewInitResponseHandler(data);
    });
};
