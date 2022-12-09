const home_events = {
  initiate() {
    $("#input-filter-cieName").on("input", function () {
      localStorage.setItem(
        "engineeringCustomerName",
        $("#input-filter-cieName").val()
      );
      filterCustomers();
    });
  },
};

const homecardHandler = () => {
  $(".home-card").on("click", function (e) {
    let id = parseInt($(this).attr("obj_id"));
    document.location.href = "customerView.html?id=" + id + "&target=" + target;
  });
};

const listingInitReponseHandler = (data) => {
  customers = data;
  printCards();
  home_events.initiate();
  //runFix();
  // applyfilter();
};
