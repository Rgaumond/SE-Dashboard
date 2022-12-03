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

