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
const referenceUpdate = (feature) => {
  //dialog.standy("update to do");
  fetch("/references/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feature),
  }).then((res) => {
    dialog.disintegrate();
    showItemDetails(feature._id);
    //generateReferenceList();
    //window.location.href = "customerView.html?id="+data.newID;
  });
};

const referenceUpdateKeyStroke = (feature) => {
  //dialog.standy("update to do");
  fetch("/references/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feature),
  }).then((res) => {
    // dialog.disintegrate();
    //generateReferenceList();
    //window.location.href = "customerView.html?id="+data.newID;
  });
};

/* ADDING */
const referenceAdd = (obj) => {
  dialog.standy("adding reference");
  localStorage.setItem("refProduct", obj.product);
  localStorage.setItem("refFeature", obj.name);
  let currentItemID = fetch("/references/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("refFeature", data.reference._id);
      //  console.log(data.reference._id);
      dialog.disintegrate();
      window.location.href = "references.html";
    });
};

/* DELETING */
const referenceDelete = (feature) => {
  dialog.standy("deleting customer");
  fetch("/references/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: feature._id }),
  }).then((res) => {
    dialog.disintegrate();
    // generateReferenceItems(feature.name);
  });
};

const deleteCrap = (id, index) => {
  dialog.standy("adding customer");
  fetch("/references/deleteCrap", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ name: "FGA" }),
  }).then((res) => {
    dialog.disintegrate();
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
      //   console.log(data);
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
