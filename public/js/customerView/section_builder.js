const generateColumn = (name, view) => {
    $(".content").append(`<div id='column-${name}' class='column' module='${view}' ></div>`);
};

/**
 *
 * @param {string} name name of the section
 * @param {array} subSections Array [property name, type, label]
 */
const generateSection = (name, subSections, containerID) => {
    $(`#column-${containerID}`).append(`<div id='section-${name}' class='section' title='${name}'></div>`);
    generateSubSection(subSections,name);
};

const generateSubSection = (subSections, name) => {
    $.each(subSections, (index, card) => {        
        let propName, type, label;
        [propName, type, label] = card;
        customerPropDetails.push({"name":propName,"label":label});
        $(`#section-${name}`).append(subSectionTemplate(propName, type, label));
        if(!infoLoaded.includes(propName)){
            $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, type));
            infoLoaded.push(propName);
        }
            
    });
};

/**
 * 
 * @param {string} propName property name
 *  @param {string} propType the type
 * @param {string} label the label pretty print
 * @return {string} the html
 */
let subSectionTemplate = (propName, propType, label) => {
    let valueContainer = "<div class='eng-card__value'></div>";
    let clickEvent = "";
    if (propType !== "staticList")
        if (propType === "link")
            clickEvent = `onclick='editLink(this)'`;
        else
            clickEvent = `onclick='editProp(this)'`;
    let title = "";
    if (propType === "list") {
        valueContainer = clickEvent = "";
        title = `<div class='add-list' pop-up='Add' onclick=addCustomer${propName}Dialog()>
                <i class='fa fa-plus-circle' aria-hidden='true' ></i ></div >`;
    }
    else if (propType !== "staticList")
        title = `<div class='eng-card__title'>${label}</div>`;
    //Genrate floating note for textarea
    if(propType==="textarea")generateFloatingNotes(propName,label);
    
    return `<div id='card-${propName}-container' class='eng-card-container' propName='${propName}' propType='${propType}' label='${label}' ${clickEvent}>
                <div id='card-${propName}' class='eng-card'>${title}${valueContainer}</div>
            </div>`;
};

/*
let contactListItem = (listItem, index) => {
    ct = `<div class='list-outer-container'>
            <div class='list-container'>
                <div class='wrappable'>${truncateText(listItem.name)}</div>
                <div class='wrappable'>t:${listItem.title}</div>`;
    if (listItem.details !== "")
        ct += `<div class='wrappable'>d:${listItem.details}</div>`;
    ct += "</div>";//closing list-container
    //CTAs
    ct += `<div class='list-cta-container'>
            <div class='list-cta-icon edit-list' pop-up='Edit' onclick=showEditContact(${index})>
                <i class='fa fa-pencil' aria-hidden='true'></i>
            </div>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deleteContact(${index})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
          </div></div>`;
    return ct;
};










let documentListItem = (listItem, index) => {
    let documentName = listItem.title;
    ct = `<div class='list-outer-container'>
              <div class='list-container'>          
                <div class='wrappableLink' onclick=window.open('${listItem.url}') >${documentName}</div ></div>`;
    //CTAs
    ct += `<div class='list-cta-container'>
            <div class='list-cta-icon edit-list' pop-up='Edit' onclick=showEditDocument(${index})>
                <i class='fa fa-pencil' aria-hidden='true'></i>
            </div>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deleteDocument(${index})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
        </div></div>`;
    return ct;
};

let presentationListItem = (presentation, index) => {
    let documentName = presentation.title;
    ct = `<div class='list-outer-container'>
              <div class='list-container'>          
                <div class='wrappableLink' onclick=window.open('${presentation.url}') >${documentName}</div >`;
    ct += "</div>";//closing list-container
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

let noteShell = (propName, view) => {
    return `<div id='noteOuterContainer-${propName}' class='note-container' module='${view}'>
        <div id = 'noteContainer-${propName}' class='note' viewState='compressed' > 
        <div id = 'note-${propName}' option='${propName}'></div >
        </div>
        </div>`;
};

let editCard = (propName) => {
    return `<div id='editCard-${propName}' class='edit-card'></div>`;
};

let buildHAmburgerButton = (label, event) => {
    let ct = `<div class='hamburger-link' onclick="${event}">${label}</div>`;
    return ct;
};

let createExpander = (propname) => {
    $("body").append(
        `<div id='expander-${propname}' class='expander-container'>
        <div class='expander-addOn'></div>
        <div class='expander-note'></div>
       </div>`);
};
*/