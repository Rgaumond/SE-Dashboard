/* LISTING*/
const referenceList = () => {
  fetch("./references/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      referenceInitReponseHandler(data.references);
    });
};

/* UPDATING */
const referenceUpdate = () => {
  //dialog.standy("update to do");
  fetch("/references/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((res) => {
    // dialog.disintegrate();
    //generateReferenceList();
    //window.location.href = "customerView.html?id="+data.newID;
  });
};

/* ADDING */
const referenceAdd = () => {
  dialog.standy("adding reference");
  let currentItemID = fetch("/references/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tempObject),
  })
    .then((res) => res.json())
    .then((data) => {
      referenceList();
      dialog.disintegrate();
      //window.location.href = "customerView.html?id="+data.newID;
    });
};

/* DELETING */
const referenceDelete = (id, index) => {
  dialog.standy("adding customer");
  fetch("/references/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: id }),
  }).then((res) => {
    console.log(references);
    references.splice(index, 1);
    console.log(references);
    dialog.disintegrate();
    generateReferenceList();
  });
};

const requestReferenceView = (customerID) => {
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

/* ADDING */
const referenceMigrate = (ref) => {
  dialog.standy("adding reference");
  let currentItemID = fetch("/references/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ref),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

/* DELETING */
const referenceDeleteAll = () => {
  dialog.standy("adding customer");
  fetch("/references/deleteAll", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  }).then((res) => {});
};
