const styleListingHeader = () => {
    //$("#engineering-header-container").html(`${customer.name}`);
    $("#header-right").append(
    `<div id="filterContainer"></div>
     <div id='eng-header-action'>
         <div id='toDo-button' class='header-button' onclick='generateToDoList()'></div>
         <div id='add-toDo-button' class='header-button' onclick='showAddToDo()'></div>
     </div>`
    );
};