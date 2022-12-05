$(document).ready(function () {
  customers = [];
  $(document).ready(function () {
    view = "home";
    document.title = "Solutions Engineering";
    dialog.standy("Loading Customers");
    styleListingHeader();
    buildCustomerFilterInputs();
    initiateRootEvents();
    dialog.disintegrate();
    applyfilter();
  }, window);
}, window);

const addCustomerButton = () => {
  let icon = addCustomerIcon();
  return `<div class='home-addCustomerIcon' onclick='showAddCustomer()'>${icon}</div>`;
};
const sortByAmount = () =>{


};



const runFix = () => {
  /* Called in event_handler */
  // $.each(customers,(index, cust)=>{
  //     console.log(cust)
  //     cust.numberOfUsers = cust.numberOfUsers;
  //     customerSimpleUpdate(cust);
  //     }
  // );
};
