const heroInitReponseHandler = () => {
  showTotalHeros(heros.length);
};

const showAddHero = () => {
  let customerList = ArrayUtilities.sortByTextValue(customers, "name");
  // obj.name = label;
  // obj.options = [];
  // $.each(customerList, (index, item) => {
  //   let tempObj = {};
  //   tempObj.value = index + 1;
  //   tempObj.text = item;
  //   obj.options.push(tempObj);
  // });

  $.each(customerList, (index, cust) => {
    cust.text = cust.name;
    cust.value = cust._id;
  });
  let ct = `<div class='dialog-card'>
        ${buildInput("heroTargetDate", "", "Target Date")}
        ${buildSelect(
          "heroTimeSelect",
          ArrayUtilities.sortByTextValue(heroTimeOptions.options, "text"),
          "Hero Times"
        )}
        ${buildSelect(
          "heroTypeSelect",
          ArrayUtilities.sortByTextValue(heroTypesOptions.options, "text"),
          "Hero Types"
        )}
        ${buildSelect("customerNameSelect", customerList, "Customer")}
        ${buildTextArea("heroDescription", "", "Description")}</div>`;
  dialog.load("New Hero", ct, heroValidate, "Add", enableDatePicker);
  $("#heroName").focus();
};

const enableDatePicker = () => {
  $("#input-heroTargetDate").datepicker({
    dateFormat: "dd-M-yy",
    changeMonth: true,
    changeYear: true,
  });
};
const showHeros = () => {
  generateList;
};

const generateHeroList = () => {
  let finalCt = "";

  $.each(heros, (index, hero) => {
    let time = hero.time;
    let type = hero.type;
    let ct = `<div class='to-do-list-outer-container' >
            <div class='to-do-list-container' style='min-width:300px;font-size:1.4em'>
                <div class='to-do-list-title-container' >
                    <div class='to-do-list-title'>${hero.customerName}&nbsp;&nbsp;&nbsp;<span style='font-size:.8em'>${hero.activity}&nbsp;&nbsp;&nbsp;<b>Date:</b> <span style='font-size:.8em'>${hero.date}</span>&nbsp;&nbsp;&nbsp;<b>Time:</b><span style='color:blue'>${hero.time} hour</span></div>
                   
                    <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick="confirmDeleteHero(${hero._id},${index},'${hero.activity}',generateHeroList)">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-trash' aria-hidden='true'></i>
                    </div>
                </div>            
                <div class='to-do-list-details' style='font-size:0.8em;color:#000'>${hero.description}</div>
            </div>
        </div>`;
    //CTAs
    // ct += `<div class='list-cta-container'>
    //     <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick=heroDelete(${heroItem._id},${index})>
    //         <i class='fa fa-trash' aria-hidden='true'></i>
    //     </div>
    // </div></div>`;
    finalCt += ct;
  });
  dialog.load("Heros List", finalCt);
};

const heroValidate = () => {
  if (
    $("#select-heroTimeSelect").val() === "0" ||
    $("#input-heroTargetDate").val() === "" ||
    $("#select-heroTypeSelect").val() === "0"
  ) {
    alert("Incomplete");
  } else {
    let tempObject = {};
    tempObject.time = $("#select-heroTimeSelect option:selected").text();
    tempObject.activity = $("#select-heroTypeSelect option:selected").text();
    tempObject.date = $("#input-heroTargetDate").val();
    tempObject.customerName = $(
      "#select-customerNameSelect option:selected"
    ).text();
    tempObject.customerID = $(
      "#select-customerNameSelect option:selected"
    ).val();
    tempObject.description = $("#area-heroDescription").val();
    dialog.disintegrate();
    heroAdd(tempObject);
  }
};

const heroValidateEdit = () => {
  if ($("#input-heroName").val() === "") alert("You must enter a name");
  else {
    hero.name = $("#input-heroName").val();
    hero.details = $("#select-heroDetailsSelect").text();
    hero.targetDate = $("#input-heroTargetDate").text();
    hero.description = $("#area-heroDescription").val();
    dialog.disintegrate();
    heroUpdate(hero);
  }
};

const showTotalHeros = (total) => {
  $("#hero-button").attr("data-content", total);
};

const confirmDeleteHero = (id, index, name, callback) => {
  if (confirm("Delete " + name)) {
    heroDelete(id, index, callback);
  }
};
// const showEditHero = (index) => {
//   hero = heros[index];
//   let ct = `<div class='dialog-card'>
//         ${buildInput("heroName", hero.name, "To Do Name")}
//         ${buildInput("heroTargetDate", hero.targetDate, "Target Date")}
//         ${buildSelect(
//           "heroDetailsSelect",
//           ArrayUtilities.sortByTextValue(heroTypesOptions.options, "text"),
//           "Hero Types"
//         )}

//         </div>`;
//   dialog.load("New Hero", ct, heroValidateEdit, "Update", "enableDatePicker");
//   $("#heroName").focus();
// };
