$(document).ready(function () {
  view = "engineering";
  requestCustomerView(getParameter("id"));
  /* WIll trigger viewInitResponseHandler  */
  heroList();
}, window);

const viewInitResponseHandler = (data) => {
  customerList(listingInitReponseHandler);
  customer = data.customer;
  document.title = customer.name;
  generateInfoElement();

  dialog.standy("Loading " + customer.name);
  // loadHamburger();
  styleEngineeringHeader(); // in variables
  initiateRootEvents();
  dialog.disintegrate();
  $("[id=column-discovery]").hide();
  ArrayUtilities.sortByNameString(software);
  $.each(customer.contacts, (index, contact) => {
    contactLinks.push(contact.name);
  });
};

const styleEngineeringHeader = () => {
  //$("#engineering-header-container").html(`${customer.name}`);
  $("#header-right").append(
    `<div id='eng-header-name' >
            <div onclick='editCustomerDialog()'>${customer.name}</div>
            <div class='delete-customer-button' onclick='deleteCustomerValidation()'></div>
        </div>
       
        <div id='eng-header-action'>
            <div id="viewToggle" onclick="toggleView(this)"></div>
            <div id='hero-button' class='header-button-blank' onclick='generateHeroList()'>hero</div>
            <div class='header-button-blank' onclick='showAddHero()'>hero +</div>
             <div id='' class='header-button-blank' onclick='addStackDialog()'>stack</div>
            <div id='' class='header-button-blank' onclick='goToReferences()'>ref</div>
            <div id='save-button' class='header-button' onclick='customerUpdate()'> </div>
            <div id='toDo-button' class='header-button' onclick='generateToDoList()'></div>
            <div id='add-toDo-button' class='header-button' onclick='showAddToDo()'></div>
        </div>`
  );
  $(".delete-customer-button").html(deleteIcon());
  $("#save-button").html(saveIcon());
  engineering_events.initiate();
};
