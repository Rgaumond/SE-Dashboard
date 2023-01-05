/* LISTING*/
const heroList = () => {
  fetch("./heros/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      heros = data.heros;
      heroInitReponseHandler();
    });
};

/* ADDING */
const heroAdd = (tempObject) => {
  dialog.standy("adding To Do");

  fetch("/heros/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tempObject),
  })
    .then((res) => res.json())
    .then((data) => {
      heroList();
      dialog.disintegrate();
      //window.location.href = "customerView.html?id="+data.newID;
    });
};

/* UPDATING */
const heroUpdate = (hero) => {
  dialog.standy("update to do");
  fetch("/heros/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hero),
  }).then((res) => {
    dialog.disintegrate();
    generateHeroList();

    //window.location.href = "customerView.html?id="+data.newID;
  });
};

/* DELETING */
const heroDelete = (id, index) => {
  dialog.standy("adding customer");
  fetch("/heros/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: id }),
  }).then((res) => {
    heros.splice(index, 1);
    dialog.disintegrate();
    generateHeroList();
  });
};

// const requestToDoView = (customerID) => {
//   fetch('/customers/view/'+customerID,{
//       method:"POST",
//       headers: {"Content-Type":"application/json"}
//       ,body: JSON.stringify({id:customerID})
//   }).then(res => res.json()).then(data => {
//       viewInitResponseHandler(data);
//   });
// };
