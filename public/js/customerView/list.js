const generateList = (propName) => {
  let ct = "";
  resetList(propName);
  if (propName === "presentations") {
    if (presentations.length === 0) {
      fetchCustomerPresentations();
      return false;
    } else $(`#card-${propName}`).append(generatePresentationList());
  } else if (customer[propName].length > 0) {
    let ct = "";
    $.each(customer[propName], (index, listItem) => {
      if (propName === "contacts") ct += contactListItem(listItem, index);
      else if (propName === "otherDocs")
        ct += documentListItem(listItem, index);
    });
    $(`#card-${propName}`).append(ct);
  } else
    $(`#card-${propName}`).append(
      `<div id='card-${propName}-listEmpty'>No ${propName}</div>`
    );
};

const generatePresentationList = () => {
  resetList("presentations");
  if (presentations.length === 0) {
    fetchPresentations(generatePresentationList);
    return false;
  } else {
    let presoCount = 0;
    let ct = "";
    $.each(presentations, (index, presentation) => {
      if (presentation.customerID === customer.id) {
        ct += presentationListItem(presentation);
        presoCount++;
      }
    });
    if (presoCount > 0) $(`#card-presentations`).append(ct);
    else
      $(`#card-presentations`).append(
        `<div id='card-presentations-listEmpty'>No presentations</div>`
      );
  }
};

const resetList = (propName) => {
  $(`#card-${propName}`).children(".list-outer-container").remove();
  $(`#card-${propName}-listEmpty`).remove();
};

const generateDetailsList = (listName) => {
  $(`#card-${listName}`).children().remove();
  let ct = "";
  let tarGetArr;
  if (listName === "briefDetails") tarGetArr = briefDetails;
  else if (listName === "abbrevBriefDetails") tarGetArr = abbrevBriefDetails;
  else tarGetArr = solutionDetails;
  $.each(tarGetArr, (i, link) => {
    let classN = "";
    customer[link.propName] = customer[link.propName] ?? initiateObject();
    if (
      link.propName !== "dependencies" &&
      (customer[link.propName] === "" ||
        customer[link.propName] === "<p><br></p>")
    ) {
      classN = " required";
      if (
        link.propName !== "finalContent" &&
        !requiredDiscoveryInfo.find((obj) => obj === link.propName)
      )
        requiredDiscoveryInfo.push(link.propName);
    } else
      requiredDiscoveryInfo.splice(
        requiredDiscoveryInfo.indexOf(link.propName),
        1
      );
    ct += `<div class='noteLink${classN}' onclick=expandNote('${link.propName}') ><li>${link.title}</li></div>`;
    if ($(`#noteContainer-${link.propName}`).length === 0)
      buildNoteSection(link.propName, link.title, addParentListAttribute, [
        link.propName,
        listName,
      ]);
  });
  $(`#card-${listName}`).append(ct);
};

const addParentListAttribute = (values) => {
  $(`#noteContainer-${values[0]}`).attr("parentList", values[1]);
};

const presentationListItem = (presentation, index) => {
  let presentationName = presentation.title;
  ct = `<div class='list-outer-container'>
              <div class='list-container'>          
                <div class='wrappableLink' onclick=window.open('${presentation.url}') >${presentationName}</div >`;
  ct += "</div>"; //closing list-container
  //CTAs
  ct += `<div class='list-cta-container'>
            <div class='list-cta-icon edit-list' pop-up='Edit' onclick=presentationDialog(${presentation.id})>
                <i class='fa fa-pencil' aria-hidden='true'></i>
            </div>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deletePresentation(${presentation.id})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
        </div></div>`;
  return ct;
};

let documentListItem = (listItem, index) => {
  let documentName = listItem.name;
  ct = `<div class='list-outer-container'>
              <div class='list-container'>          
                <div class='engLink' onclick=window.open('${listItem.link}') >${documentName}</div ></div>`;
  //CTAs
  ct += `<div class='list-cta-container'>
            <div class='list-cta-icon edit-list' pop-up='Edit' onclick=editOtherDocsDialog(${index})>
                <i class='fa fa-pencil' aria-hidden='true'></i>
            </div>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deleteOtherDocs(${index})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
        </div></div>`;
  return ct;
};
