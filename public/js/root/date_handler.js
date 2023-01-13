function currentDate() {
  var months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = months[currentDate.getMonth()];
  let cYear = currentDate.getFullYear();
  return cDay + "-" + cMonth + "-" + cYear;
}

function generateDatePicker(id) {
  $(function () {
    $("#" + id).datepicker({
      dateFormat: "dd-M-yy",
      changeMonth: true,
      changeYear: true,
    });
  });
}

function max_date(all_dates) {
  var max_dt = all_dates[0],
    max_dtObj = new Date(all_dates[0]);
  all_dates.forEach(function (dt, index) {
    if (new Date(dt) > max_dtObj) {
      max_dt = dt;
      max_dtObj = new Date(dt);
    }
  });
  return max_dt;
}

console.log(`in`);
