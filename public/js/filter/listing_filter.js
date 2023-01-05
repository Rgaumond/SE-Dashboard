const applyfilter = () => {
  let name = "";
  if (localStorage.getItem("engineeringCustomerName"))
    name = localStorage.getItem("engineeringCustomerName");
  if (name === "") customerList(listingInitReponseHandler);
  else if (!/[^a-z]/i.test(name)) {
    let filterObj = {};
    filterObj.name = name;
    customerListFilter(filterObj);
  } else {
    name = name.substring(0, name.length - 1);
    $("#input-filter-cieName").val(name);
    localStorage.setItem(
      "engineeringCustomerName",
      $("#input-filter-cieName").val()
    );
    alert("illegal character");
  }
};

const clearCustomerFilter = () => {
  $("#input-filter-cieName").val("");
  localStorage.setItem(
    "engineeringCustomerName",
    $("#input-filter-cieName").val()
  );
  filterCustomers();
};

/***INITIATION **/
const buildCustomerFilterInputs = () => {
  let name = "";
  if (localStorage.getItem("engineeringCustomerName"))
    name = localStorage.getItem("engineeringCustomerName");
  $(`#filterContainer`).append(
    `${buildInput(
      "filter-cieName",
      name,
      "Customer",
      "applyfilter('cieName')"
    )}`
  );
  $(`#filterContainer`).append(
    `<div class='filteredOn-clear' onclick='clearCustomerFilter()'><i class='fa fa-filter' aria-hidden='true'></i></div>`
  );
};
