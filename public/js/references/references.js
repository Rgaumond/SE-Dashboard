let references =[];
let product = {};
let currentFeature = {};
//let reference = {};
//referenceList();


const generateReferenceItems = (productName) => {
    let finalCt = "";
    buildNoteSection(); 
    product = references.find(object => {return object.product===productName});
    loadFeatures();
  }; 

const showReference=(name)=>{
  generateReferenceItems(name);
};

const loadFeatures = () =>{
  let finalCt = "";
  $.each(product.features, (index, referenceItem) => {
    let truncatedName = truncateText(referenceItem.name);
    let ct = 
    `<div class='item' onclick="showItemDetails(${referenceItem._id})">${truncatedName}</div>`;
    finalCt+=ct;
});
$("#navigator").html(finalCt);
};

const showItemDetails = (featureID) =>{
  referenceUpdate();
  console.log(featureID)  
  currentFeature = product.features.find(object => {return object._id===featureID});
  $("#note-details .ql-editor").html(currentFeature.details);
  $(".note-container").show();
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
      modules: {toolbar: [ ['bold', 'italic', 'underline'],[{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],['link','image']]}, theme: 'snow'
  });
  quill.charCount = 0;
  $(`#note-${propName} .ql-editor`).html();
  quill.on('text-change', function () {
      quill.charCount++;
      let containerID = quill.container.id;
      let content = $("#" + containerID + " .ql-editor").html();
      currentFeature.details = content;
      if (quill.charCount > 10) {
          quill.charCount = 0;
          referenceUpdate();
      }
  });
  $(`#noteContainer-${propName} .ql-toolbar`).prepend(toolbar(label, propName));
};

const toolbar = (label, propName) => {
  // let content = "<span class='note-title'>" + label + "</span>";
  // content += "<span class='noteIcon' onclick=addDatedNotes('" + propName + "')><i class='fa fa-calendar' aria-hidden='true'></i></span>";
  // content += "<span class='noteExpand'  onclick=expandNote('" + propName + "')><i class='fa fa-expand' aria-hidden='true'></i></span>";
  // return content;
};

const showAddReference = () => {
    let ct = `<div class='dialog-card'>
        ${buildInput("referenceName", "", "To Do Name")}`;
    dialog.load("New To Do", ct, referenceValidate, "Add");
    $("#referenceName").focus();

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
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else{
        createReferenceObject($("#input-referenceName").val());
        dialog.disintegrate();
    }
}

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

const createReferenceObject = (name) => {
    let newID = Date.now();
    let newItem = {};
    newItem._id = newID;
    newItem.name=name;
    newItem.detail="";
    product.features.push(newItem);
    loadFeatures();
    showItemDetails(newID);
};

// const showTotalReferencess = (total) =>{
//     $('#reference-button').attr('data-content',total);
// };

// const confirmDelete = (id,index,name)=>{
//     if (confirm("Delete "+ name)) {
//      referenceDelete(id,index);
//     }
// };