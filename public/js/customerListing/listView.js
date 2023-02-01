var listViewOn = false;
let filteredList = [];
const listView = () => {
  if (!listViewOn) {
    $(".content").html(listNav());
    listViewOn = true;
  } else {
    initSub();
    listViewOn = false;
  }
};

const listNav = () => {
  let ct = `<div class="stage-link-container">`;
  for (var i = 3; i < 15; i++) {
    ct += `<div class="stage-link" onclick="loadStage(${i})">${i - 1}</div>`;
  }
  ct += `</div><div class="stage-container"></div>`;
  return ct;
};

const loadStage = (stage) => {
  filteredList = [];
  let init_filtered = customers.filter((obj) => {
    return obj.projectEstimate > 50000;
  });

  $.each(init_filtered, (index, cust) => {
    cust.staging = cust.stage.list[0] - 1;
    if (cust.staging === stage) filteredList.push(cust);
  });
  filteredList.sort(function (a, b) {
    return new Date(a.targetDate) - new Date(b.targetDate);
  });
  $(".stage-container").html(list(stage));
};

const filterList = () => {
  let init_filtered = customers.filter((obj) => {
    return obj.projectEstimate > 50000;
  });

  $.each(init_filtered, (index, cust) => {
    cust.staging = cust.stage.list[0] - 1;
  });
  let second_pass = [];
  for (var i = 3; i < 15; i++) {
    second_pass = [];
    $.each(init_filtered, (ind, cust) => {
      if (cust.staging === i) second_pass.push(cust);
    });
    second_pass.sort(function (a, b) {
      return new Date(a.targetDate) - new Date(b.targetDate);
    });
    $.each(second_pass, (ind, cust) => {
      filteredList.push(cust);
    });
  }

  // ArrayUtilities.sortByNumericValue(filtered, "staging");

  // filtered.sort(function (a, b) {
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(b.targetDate) - new Date(a.targetDate);
  // });
};

const list = (stage) => {
  let ct = "";
  ct += `<div class="stage-header">STAGE:  ${stage - 1} </div>`;
  $.each(filteredList, (index, cust) => {
    ct += htmlListTemplate(cust);
  });

  return ct;
};

const cc = (id) => {
  let theText = $("#" + id).html();
  let front = theText.substring(0, theText.indexOf("("));
  let back = theText.substring(theText.indexOf(")") + 1);
  let middle = " (RG:" + new Date().toDateString() + ") ";
  var copyText = front + middle + back;
  var strippedHtml = copyText.replace(/<[^>]+>/g, "");
  navigator.clipboard.writeText(strippedHtml);
};

const htmlListTemplate = (cust) => {
  ctempt = `
  <div class='cust-list-container' ">
    <div id='${cust._id}' class='customer-listing-header'   onclick="document.location.href = 'customerView.html?id=${cust._id}'">${cust.name}  <span class="customer-estimate">($${cust.projectEstimate})</span><span class="customer-target-date"> ${cust.targetDate}</span></div>
    <div  class='customer-listing-next-steps'>
      <div class="note-header" >SE Next Steps: </div>
      <div id='${cust._id}NextSteps' >${cust.nextSteps}</div>
      <div class="cc-button" onclick="cc('${cust._id}NextSteps')">Copy</div>
    </div>
    <div class='customer-listing-notes'>
      <div class="note-header" >SE Notes: </div>
      <div id='${cust._id}Notes' >${cust.solutionNotes}</div>
      <div class="cc-button" onclick="cc('${cust._id}Notes')">Copy</div>
    </div>
  </div>  
`;
  return ctempt;
};
