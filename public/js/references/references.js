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
    return obj.product.toLowerCase() === productName.toLowerCase();
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
  const final = sortedFeatures.reduce((finalSoFar, ref) => {
    const thisUserFirstChar = ref.name[0];
    if (finalSoFar.length === 0) addHeader();
    else {
      const lastUserFirstChar = finalSoFar[finalSoFar.length - 1].name[0];
      if (lastUserFirstChar !== thisUserFirstChar) addHeader();
    }
    finalSoFar.push(ref);
    return finalSoFar;
    function addHeader() {
      finalSoFar.push({ header: thisUserFirstChar });
    }
  }, []);

  $.each(final, (index, feature) => {
    let ct = "";
    if (feature.header) ct = `<div class='header' ">${feature.header}</div>`;
    else {
      let truncatedName = truncateText(feature.name);
      ct = `<div class='item' onclick="showItemDetails(${feature._id})">${truncatedName}</div>`;
    }
    finalCt += ct;
  });

  // $.each(sortedFeatures, (index, feature) => {
  //   let truncatedName = truncateText(feature.name);
  //   let ct = `<div class='item' onclick="showItemDetails(${feature._id})">${truncatedName}</div>`;
  //   finalCt += ct;
  // });
  $("#navigator").html(finalCt);
};

const showItemDetails = (featureID) => {
  //referenceUpdate();

  localStorage.setItem("refFeature", featureID);
  currentFeature = currentFeatures.find((object) => {
    return object._id === featureID;
  });
  localStorage.setItem("refProduct", currentFeature.product);
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
  let productName = "";
  currentProductName ? (productName = currentProductName) : (productName = "");

  let ct = `<div class='dialog-card'>
    ${buildInput("productName", productName, "Product Name")}
        ${buildInput("featureName", "", "To Do Name")}`;
  dialog.load("New To Do", ct, referenceValidate, "Add");
  $("#input-referenceName").focus();
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
  if ($("#input-productName").val() === "") alert("You must enter a product");
  else if ($("#input-featureName").val() === "")
    alert("You must enter a feature");
  else {
    createReferenceObject(
      $("#input-productName").val(),
      $("#input-featureName").val()
    );
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

const createReferenceObject = (product, feature) => {
  let newID = Date.now();
  let newItem = {};
  newItem._id = newID;
  newItem.name = feature;
  newItem.product = product;
  newItem.details = "";
  referenceAdd(newItem);
  currentFeatures.push(newItem);
  loadFeatures();
  showItemDetails(newID);
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

// const loadApps = () => {
//   currentProductName = "APPS";
//   $.each(softwares, (index, soft) => {
//     createReferenceObject(soft, index);
//   });
// };
