let references = [];
let product = {};
let currentProductName;
let currentFeatures = [];
let currentFeature = {};
let section_built = false;

//referenceList();

const generateReferenceItems = (productName) => {
  currentProductName = productName;
  $("#reference-title").html(currentProductName);
  if (!section_built) {
    buildNoteSection();
    section_built = true;
  } else {
    $(".note-container").hide();
  }

  currentFeatures = references.filter((obj) => {
    return obj.product === productName;
  });
  loadFeatures();
};

const showReference = (el, name) => {
  //referenceUpdate();
  generateReferenceItems(name);
  manageNavigation(el);
};

const loadFeatures = () => {
  let finalCt = "";
  let sortedFeatures = ArrayUtilities.sortByName(currentFeatures);
  $.each(sortedFeatures, (index, feature) => {
    let truncatedName = truncateText(feature.name);
    let ct = `<div class='item' onclick="showItemDetails(${feature._id})">${truncatedName}</div>`;
    finalCt += ct;
  });
  $("#navigator").html(finalCt);
};

const showItemDetails = (featureID) => {
  //referenceUpdate();
  currentFeature = currentFeatures.find((object) => {
    return object._id === featureID;
  });
  if (!currentFeature.details) currentFeature.details = "";
  $("#note-details .ql-editor").html(currentFeature.details);
  $(".note-container").show();
  $(".ref-note-title").html(currentFeature.name);
};

const noteContainer = (propName) => {
  return `<div id='noteOuterContainer-${propName}' class='note-container' >                
              <div id ='noteContainer-${propName}' class='note' viewState='compressed' >
                  <div id='quickNotes-${propName}' class='quickNotes'></div>
                  <div id = 'note-${propName}' option='${propName}'></div >
              </div>
          </div>`;
};
const buildNoteSection = () => {
  // create container for the note
  let propName = "details";
  let label = "details";
  $("#details").append(noteContainer(propName));
  var quill = new Quill(`#note-${propName}`, {
    modules: {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        ["link", "image"],
      ],
    },
    theme: "snow",
  });
  quill.charCount = 0;
  $(`#note-${propName} .ql-editor`).html();
  quill.on("text-change", function () {
    quill.charCount++;
    let containerID = quill.container.id;
    let content = $("#" + containerID + " .ql-editor").html();
    currentFeature.details = content;
    referenceUpdate(currentFeature);
    // if (quill.charCount > 1) {
    //   quill.charCount = 0;
    //   referenceUpdate();
    // }
  });
  $(`#noteContainer-${propName} .ql-toolbar`).prepend(toolbar(label, propName));
};

const toolbar = (label, propName) => {
  let content = "<span class='ref-note-title' >" + label + "</span>";
  content +=
    "<span class='noteIcon' onclick='referenceUpdate()'><i class='fa fa-floppy-o' aria-hidden='true'></i></span>";
  // content += "<span class='noteExpand'  onclick=expandNote('" + propName + "')><i class='fa fa-expand' aria-hidden='true'></i></span>";
  return content;
};

const showAddReference = () => {
  if (currentProductName !== undefined) {
    let ct = `<div class='dialog-card'>
        ${buildInput("referenceName", "", "To Do Name")}`;
    dialog.load("New To Do", ct, referenceValidate, "Add");
    $("#input-referenceName").focus();
  } else alert("Please select a reference");
};

// const showEditReference = (index) => {
//     reference = references[index];
//     let ct = `<div class='dialog-card'>
//         ${buildInput("referenceName", reference.name, "To Do Name")}
//         ${buildInput("referenceTargetDate", reference.targetDate, "Target Date")}
//         ${buildTextArea("referenceDetails", reference.details, "Details")}</div>`;
//     dialog.load("New To Do", ct, referenceValidateEdit, "Update");
//     $("#referenceName").focus();

// };

// const showReferences = () => {
//     generateList
// };

const referenceValidate = () => {
  if ($("#input-referenceName").val() === "") alert("You must enter a name");
  else {
    createReferenceObject($("#input-referenceName").val());
    dialog.disintegrate();
  }
};

// const referenceValidateEdit = () => {
//     if ($("#input-cieName").val() === "")
//         alert("You must enter a name");
//     else{
//          reference.name = $("#input-referenceName").val();
//         reference.details = $("#area-referenceDetails").val();
//         reference.targetDate = $("#input-referenceTargetDate").val();
//         dialog.disintegrate();
//         referenceUpdate(reference);
//     }
// }

const createReferenceObject = (name, index) => {
  let newID = Date.now() + index;
  let newItem = {};
  newItem._id = newID;
  newItem.name = name;
  newItem.product = currentProductName;
  newItem.details = "";
  console.log(newItem);

  referenceAdd(newItem);
  //currentFeatures.push(newItem);
  // loadFeatures();
  //showItemDetails(newID);
};

const manageNavigation = (el) => {
  $(".ref-header-buttons").css({
    borderColor: "#000",
    color: "#000",
    backgroundColor: "#fff",
  });
  el.style.borderColor = "blue";
  el.style.backgroundColor = "blue";
  el.style.color = "white";
};

// const showTotalReferences = (total) =>{
//     $('#reference-button').attr('data-content',total);
// };

// const confirmDelete = (id,index,name)=>{
//     if (confirm("Delete "+ name)) {
//      referenceDelete(id,index);
//     }
// };

let softwares = [
  "Office365 (MS)",
  "Intune (MS)",
  "Sentinel (MS)",
  "ADFS (ms)",
  "Sailpoint",
  "Ping",
  "Exchange (MS)",
  "Azure AD (MS)",
  "AD (MS)",
  "AADConnect (MS)",
  "Defender (MS)",
  "GitHub",
  "LDAP",
  "Zimbra",
  "Goolge Cast",
  "Alfresco",
  "Zoom",
  "Novel",
  "B2C (MS)",
  "Jamf",
  "Servers Unix",
  "Servers Windows",
  "SAP",
  "IBM",
  "Hybrid (MS)",
];
const loadApps = () => {
  currentProductName = "APPS";
  $.each(softwares, (index, soft) => {
    createReferenceObject(soft, index);
  });
};
