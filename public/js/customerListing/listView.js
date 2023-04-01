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
  for (var i = 2; i < 15; i++) {
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
  for (var i = 2; i < 15; i++) {
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
  ct += `<div class="stage-header">STAGE:  ${
    stage - 1
  } <span class="ccDate" onclick="ccDate()">today</span></div>`;
  $.each(filteredList, (index, cust) => {
    ct += htmlListTemplate(cust);
  });

  return ct;
};

const cc = (id) => {
  let theText = $("#" + id).html();
  let front = theText.substring(0, theText.indexOf("("));
  let back = theText.substring(theText.indexOf(")") + 1);
  let middle = "(RG: " + new Date().toDateString() + ") ";
  var copyText = front + middle + back;
  var strippedHtml = copyText.replace(/<[^>]+>/g, "");
  navigator.clipboard.writeText(strippedHtml);
};

const htmlListTemplate = (cust) => {
  ctempt = `
  <div class='cust-list-container' ">
    <div id='${cust._id}' class='customer-listing-header'   >
    <span style="cursor:pointer" onclick="showNote(${cust._id})">${cust.name} </span> <span class="customer-estimate">($${cust.projectEstimate})</span><span class="customer-target-date"> ${cust.targetDate}</span>
    <span class="open-listing" onclick="window.open('customerView.html?id=${cust._id}')">VIEW</span>
    </div>
    
      <div id="liste-item-details${cust._id}" class="list-item-details-container">
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
      <div id="${cust._id}hero-container"></div>
    </div></div>`;
  return ctempt;
};

let currentListingDetailsID = 0;
const showNote = (id) => {
  $(".list-item-details-container").hide();
  addHerosToListing(id);
  $(`#liste-item-details${id}`).show();
  currentListingDetailsID = id;
};

const refreshHeroDetails = () => {
  showNote(currentListingDetailsID);
};

const addHerosToListing = (id) => {
  cHero = "";
  $(`#${id}hero-container`).html("");

  let connectedHeros = heros.filter((obj) => {
    return obj.customerID === id;
  });
  if (connectedHeros.length > 0) {
    cHero += `<div class='customer-listing-notes'>
                <div class="note-header" >Heros: </div>`;
    $.each(connectedHeros, (index, hero) => {
      cHero += `<div id='${hero._id}Hero' class='listing-hero'>${hero.time} hours    ${hero.activity}  ${hero.date}<br/>${hero.description}</div>
        <div class="list-cta-icon to-do-delete-list" pop-up="Delete" onclick="confirmDeleteHero(${hero._id},0,'Demo Build',refreshHeroDetails)">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>
        </div>`;
    });
    cHero += `</div>`;
    $(`#${id}hero-container`).html(cHero);
  }
};

const ccDate = (id) => {
  navigator.clipboard.writeText("RG: " + new Date().toDateString());
};
