let resultArray = [];
const showSearchDialog = () => {
  resultArray = [];
  let ct = localStorage.getItem("previousSearch");
  ct += `<div class='dialog-card'>
        ${buildInput("search", "", "Search")}`;
  dialog.load("Search", ct, searchReference, "Search");
  $("#input-search").focus();
};

const searchReference = () => {
  var arrayOfLines = [];
  console.log("input" + $("#input-search").val());
  if ($("#input-search").val().includes(" "))
    arrayOfLines = $("#input-search").val().split(" ");
  else arrayOfLines.push($("#input-search").val());

  $.each(references, (index, ref) => {
    if (
      arrayOfLines.every((item) =>
        ref.details.toLowerCase().includes(item.toLowerCase())
      )
    )
      resultArray.push(ref);
  });

  if (resultArray.length === 0)
    $.each(references, (index, ref) => {
      if (
        arrayOfLines.every((item) =>
          ref.name.toLowerCase().includes(item.toLowerCase())
        )
      )
        resultArray.push(ref);
    });

  showResult();
};

const showResult = () => {
  let finalCt = "";

  $.each(resultArray, (index, ref) => {
    let ct = `<div class='ref-result-outer-container' >
                <div class='ref-result-container' style='min-width:300px;font-size:1.4em'>
                    <div class='ref-result-title'>
                    <span onclick="showRefResultDetails('${ref._id}Details')">${ref.product}:${ref.name}</span> 
                    <span class='showRefLink' onclick="showItemDetails(${ref._id})">show</span>
                    </div>
                    <div id='${ref._id}Details' class='ref-result-details'>${ref.details}</div>
                </div>
              </div>`;
    finalCt += ct;
  });
  localStorage.setItem("previousSearch", finalCt);
  dialog.load("Result List", finalCt);
};

const showRefResultDetails = (elid) => {
  $("#" + elid).toggle();
};
let payload = {
  grant_type: "password",
  client_id:
    "3MVG9riCAn8HHkYWOdS9J5IqXSBB6Br2SuP.8YOJpfVCP6eJ3PSfHo0Wt1l0HguBI..kwZbsOE0LisqjF1Yie",
  client_secret:
    "B288F6FB98B41F6F20789F0AAEF3A1C69F93C587096C03A29B08385C45A25962",
  username: "oktatestrg@gmail.com",
  password: "SompnBt3KHS4r75PUKGqiOnWsbUYaafhtdNrn5",
};

const testSF = () => {
  fetch("https://login.salesforce.com/services/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(JSON.stringify(data));
      //window.location.href = "customerView.html?id="+data.newID;
    });
};
