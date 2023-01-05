var settings = {
  async: true,
  crossDomain: true,
  url: "https://richard-travel0.demo-platform.auth0app.com/oauth/token",
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  data: '{"client_id":"q26PPrcnJItOqyF3ecr7G0fO30tD8gE0","client_secret":"-RHPUN7MVFmy_oLP93SwkqDTd-c7kDvyhm4Skxa13pW_X2773rPm7kH_633pZ8FP","audience":"https://richardtravel0-travel0.auth0.cloud/api","grant_type":"client_credentials"}',
};

$.ajax(settings).done(function (response) {
  console.log("test" + response);
});

$(document).ready(function () {
  customers = [];
  view = "home";
  document.title = "Solutions Engineering";
  dialog.standy("Loading Customers");
  styleListingHeader();
  buildCustomerFilterInputs();
  initiateRootEvents();
  dialog.disintegrate();
  applyfilter();
  heroList();
}, window);

const addCustomerButton = () => {
  let icon = addCustomerIcon();
  return `<div class='home-addCustomerIcon' onclick='showAddCustomer()'>${icon}</div>`;
};
const sortByAmount = () => {};

const runFix = () => {
  /* Called in event_handler */
  // $.each(customers,(index, cust)=>{
  //     console.log(cust)
  //     cust.numberOfUsers = cust.numberOfUsers;
  //     customerSimpleUpdate(cust);
  //     }
  // );
};
