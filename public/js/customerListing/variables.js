﻿const styleListingHeader = () => {
  //$("#engineering-header-container").html(`${customer.name}`);
  $("#header-right").append(
    `<div id="filterContainer"></div>
     <div id='eng-header-action'>
        <div id='reference-button' class='header-button-blank' onclick='printCards("amount")'>Sort Amount</div>
        <div id='reference-button' class='header-button-blank' onclick='addStackDialog()'>stack</div>
        <div id='reference-button' class='header-button-blank' onclick='goToReferences()'>ref</div>
        <div id='toDo-button' class='header-button' onclick='generateToDoList()'></div>
        <div id='add-toDo-button' class='header-button' onclick='showAddToDo()'></div>
     </div>`
  );
};
