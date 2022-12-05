let stickyNotes = [];
let floatingNotes = [];
const generateStickyNotes = (propName, label) => {
  customer[propName] = customer[propName] ?? initiateObject();
  stickyNotes.push(propName);
  buildNoteSection(propName, label);
  stickNote(propName);
};

const generateFloatingNotes = (propName, label) => {
  customer[propName] = customer[propName] ?? initiateObject();
  floatingNotes.push(propName);
  if ($(`#noteContainer-${propName}`).length === 0)
    buildNoteSection(propName, label);
};

/* . Original */
const buildNoteSection = (propName, label) => {
  // create container for the note
  $("body").append(noteContainer(propName, view));
  var quill = new Quill(`#note-${propName}`, {
    modules: {
      imageResize: {
        displaySize: true,
      },
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
      ],
    },
    theme: "snow",
  });
  quill.charCount = 0;
  $(`#note-${propName} .ql-editor`).html(customer[propName]);
  quill.on("text-change", function () {
    quill.charCount++;
    let containerID = quill.container.id;
    let content = $("#" + containerID + " .ql-editor").html();
    customer[propName] = content;
    if (quill.charCount > 10) {
      quill.charCount = 0;
      customerUpdate(customer);
    }
  });
  $(`#noteContainer-${propName} .ql-toolbar`).prepend(
    this.toolbar(label, propName)
  );
};

/* ORIGINAL */
const noteContainer = (propName, view, anchored) => {
  return `<div id='noteOuterContainer-${propName}' class='note-container' module='${view}'>                
                <div id ='noteContainer-${propName}' class='note' viewState='compressed' >
                    <div id='quickNotes-${propName}' class='quickNotes'></div>
                    <div id = 'note-${propName}' option='${propName}'></div >
                </div>
            </div>`;
};

const loadCustomerNotes = (noteArray) => {
  $.each(noteArray, (index, note) => {
    customer[note.name] = note.value;
  });
};

const removeCustomerNotes = (newCustomer) => {
  $.each(customerNotesNames, (i, name) => {
    delete newCustomer[name];
  });
  return newCustomer;
};

const notesChanged = () => {
  let target = [];
  $.each(customerNotesNames, (i, name) => {
    let note = { name: name, value: customer[name] };
    target.push(note);
  });
  let isEqual =
    JSON.stringify(target) === JSON.stringify(customerNotesBaseline);
  if (!isEqual) {
    //update notesBaseline
    customerNotesBaseline = target;
  }
  return !isEqual;
};

const toolbar = (label, propName) => {
  let content = "<span class='note-title'>" + label + "</span>";
  content +=
    "<span class='noteIcon' onclick=addDatedNotes('" +
    propName +
    "')><i class='fa fa-calendar' aria-hidden='true'></i></span>";
  content +=
    "<span class='noteExpand'  onclick=expandNote('" +
    propName +
    "')><i class='fa fa-expand' aria-hidden='true'></i></span>";
  return content;
};

const addDatedNotes = (optionName) => {
  let original = $(`#note-${optionName} .ql-editor`).html();
  $(`#note-${optionName} .ql-editor`).html(
    `<p><strong><u>${currentDate()}</u></strong></p><p></p><p></p>${original}`
  );
};

/*  ORIGINAL */
const expandNote = (propName, expandType) => {
  customerUpdate();
  let styling = "";
  if ($(`#noteContainer-${propName}`).attr("viewState") === "compressed") {
    $("body").append($(`#noteContainer-${propName}`));
    $(`#noteContainer-${propName}`).attr("viewState", "expanded");
    $(`#noteContainer-${propName}`).attr(
      "originalHeight",
      $(`#noteContainer-${propName}`).height()
    );
    styleNote(propName, expandType);

    // $(`#quickNotes-${propName}`).show();
  } else compressNote(propName);
};

const styleNote = (propName, expandType) => {
  if (!expandType) positionFLoat(propName, "85vh", "30vw", "47%", "80px");
};

const positionFLoat = (propName, height, width, left, top) => {
  $(`#noteContainer-${propName}`).css({
    position: "absolute",
    height: height,
    width: width,
    left: left,
    top: top,
  });
  $(`#noteContainer-${propName}`)
    .resizable({ minHeight: 150, minWidth: 150 })
    .draggable({ handle: ".ql-toolbar" });
  $(`#noteContainer-${propName}`).resizable("enable");
  $(`#noteContainer-${propName}`).draggable("enable");
};

const expandDiscoveryNote = (propName) => {
  customerUpdate();
  if ($(`#noteContainer-${propName}`).attr("viewState") === "compressed") {
    $("body").append($(`#noteContainer-${propName}`));
    $(`#noteContainer-${propName}`).attr("viewState", "expanded");
    $(`#noteContainer-${propName}`).attr(
      "originalHeight",
      $(`#noteContainer-${propName}`).height()
    );
    $(`#noteContainer-${propName}`).css({
      height: "85vh",
      width: "50vw",
      position: "absolute",
      left: "47%",
      top: "80px",
      "box-shadow":
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    });
    $(`#noteContainer-${propName}`)
      .resizable({ minHeight: 150, minWidth: 450 })
      .draggable({ handle: ".ql-toolbar" });
    $(`#noteContainer-${propName}`).resizable("enable");
    $(`#noteContainer-${propName}`).draggable("enable");
    $(`#quickNotes-${propName}`).show();
  } else compressNote(propName);
};

const compressNote = (propName) => {
  customerUpdate();
  $(`#noteContainer-${propName}`).resizable("disable").draggable("disable");
  $(`#noteOuterContainer-${propName}`).append($(`#noteContainer-${propName}`));
  $(`#noteContainer-${propName}`).attr("viewState", "compressed");
  $(`#noteContainer-${propName}`).css({
    height: "",
    left: 0,
    top: 0,
    position: "relative",
    "box-shadow": "none",
  });
  $(`#quickNotes-${propName}`).hide();
  // if ($(`#noteContainer-${propName}`).attr("parentList"))
  //     generateDetailsList($(`#noteContainer-${propName}`).attr("parentList"));
  if (floatingNotes.includes(propName)) {
    $("noteOuterContainer-" + propName).hide();
    textareaChanged($("#note-" + propName + " :first-child"), propName);
  }
};

const stickNote = (value) => {
  $(".notes").append($("#noteOuterContainer-" + value));
  $("#noteOuterContainer-" + value).css({ display: "flex" });
  setStickyNotesHeight();
};

const setStickyNotesHeight = () => {
  let targetHeight = $(".main").height() - 130;
  $(".note-container").css({
    "min-height": targetHeight / 2,
    "max-height": targetHeight / 2,
  });
};
