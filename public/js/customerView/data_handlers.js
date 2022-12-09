const writeValues = (propName, type) => {
  customer[propName] = customer[propName] ?? initiateObject(type);
  let value = "";
  if (type === "input" || type === "date") {
    value = loadInputValue(propName, type);
  } else if (type === "link") value = loadLink(propName, type);
  else if (type === "list") {
    generateList(propName);
  } else if (type === "staticList") {
    generateDetailsList(propName);
  }
  //ACTIVE CODING
  else if (type === "textarea") {
    value = loadTextAreaValue(propName);
  } else {
    let optionsObj = eval(propName + "Options");
    value += listPropValues(propName, optionsObj);
    if (value === "") {
      value = "choose";
    }
  }
  return value;
};

const loadInputValue = (propName, type) => {
  let value = "";
  if (customer[propName] === "") {
    if (isRequired(propName)) value += `required!2`;
    else value += `<div style='padding-left:20px'>---</div>`;
  } else {
    let theClass = "";
    value += `<div  style='padding-left:20px;overflow-wrap: anywhere;'>${customer[propName]}</div>`;
  }
  return value;
};
//ACTIVE CODING
const loadTextAreaValue = (propName, type) => {
  let value = "";
  if (customer[propName] === "") {
    if (isRequired(propName))
      value += `<div style='padding-left:20px'>---</div>`;
    else {
      value += `---`;
    }
  } else {
    let theClass = "";
    value += `<div  style='padding-left:20px;overflow-wrap: anywhere;white-space:pre-wrap ;font-size:0.8em'>${customer[propName]}</div>`;
  }
  return value;
};

const loadLink = (propName, type) => {
  let value = "";
  if (customer[propName] === "") {
    value += `--`;
  } else {
    value += `<div class="engLink" style='padding-left:20px;overflow-wrap: anywhere;' onclick=window.open('${customer[propName]}')>Open
                    <span style='color:#000;text-decoration:none; position:absolute;right:0' propName='${propName}' propType='${type}'
onclick='editProp(this);event.stopPropagation();'>(edit)</span>
                    </div>`;
  }
  return value;
};

const editLink = (el) => {
  let targetEl = $(el).find(".eng-card__value");
  //  if (targetEl.html() === "required!3")
  editProp(el);
};
const editProp = (el) => {
  let propName = $(el).attr("propName");
  let propType = $(el).attr("propType");
  if (propName === "briefDetails") {
    return false;
  }
  // ACTIVE CODING
  else if (propType === "textarea") {
    expandNote(propName);
  } else {
    let ct;
    if (propType === "checkbox")
      ct = buildCheckbox(
        propName,
        eval(propName + "Options").options,
        "",
        "checkedChanged(this)",
        propName
      );
    else if (propType === "select")
      if (propName === "accountManager")
        ct = buildSelect(
          propName,
          ArrayUtilities.sortByTextValue(
            eval(propName + "Options").options,
            "text"
          ),
          "",
          "selectChanged(this)",
          propName
        );
      else
        ct = buildSelect(
          propName,
          eval(propName + "Options").options,
          "",
          "selectChanged(this)",
          propName
        );
    else if (propType === "input" || propType === "date") {
      ct = buildInput(propName, customer[propName], "", "inputChanged(this)");
    } else if (propType === "link") {
      ct = buildInput(propName, customer[propName], "", "linkChanged(this)");
    }

    dialog.floatingShell(propName);
    $(`.dialog__main`).append(ct);
    if (propType === "input" || propType === "link") {
      let cursorRange = $(`#input-${propName}`).val().length * 2;
      $(`#input-${propName}`).focus();
      $(`#input-${propName}`)[0].setSelectionRange(cursorRange, cursorRange);
    }
    if (propType === "date") {
      $(function () {
        $(`#input-${propName}`).datepicker({
          dateFormat: "dd-M-yy",
          changeMonth: true,
          changeYear: true,
        });
      });
    }
    $(`.dialog`).css({
      left: $(`#card-${propName}`).offset().left + "px",
      top: $(`#card-${propName}`).offset().top - 10,
    });

    $(`.dialog__main`).on("keypress", function (e) {
      // console.log(e.which)
      // if(e.which===96){
      //     let newText = $(`.dialog__main`).text().slice(0,-1)
      //     $(`.dialog__main`).html(newText)
      //     console.log(newText)
      // }
      if (e.which === 13 && propType !== "textarea") {
        dialog.disintegrate();
      }
    });
  }
};

const showRequired = (propname, value) => {
  // if (isRequired(propname) && (value === "" || value === "choose" || value === "required!")) {
  //     $(`#card-${propname} .eng-card__title`).css({ "color": "red" });
  //     if (!requiredDiscoveryInfo.find(obj => obj === propname))
  //         requiredDiscoveryInfo.push(propname);
  // }
  // else {
  //     $(`#card-${propname} .eng-card__title`).css({ "color": "#000" });
  //     if (requiredDiscoveryInfo.indexOf(propname) > -1)
  //         requiredDiscoveryInfo.splice(requiredDiscoveryInfo.indexOf(propname), 1);
  // }
};

const isRequired = (propname) => {
  // return discoveryRequired.some((prop) => {
  //     return prop === propname;
  // });
};

// const showRequiredNotes = (propname, value) => {
//     const strWithoutHTmlTags = value.replace(/(<([^>]+)>)/gi, "");
//     if (isRequired(propname) && strWithoutHTmlTags === "")
//         $(`#noteContainer-${propname}`).find(".note-title").css({ "color": "red" });
//     else
//         $(`#noteContainer-${propname}`).find(".note-title").css({ "color": "#000" });
// };
