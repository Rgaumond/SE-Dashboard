
/**
 * 
 * @param {string} id the id of the select element
 * @param {object} options the list of options
 * @param {string} label the label value
 * @param {string} onchange the callback in string format with parameters
 * @return {string} the select element in string
 */




const buildSelect = (id, options, label, onchange, propName) => {
     let onChangeCTA = "";
    if (onchange !== null)
        onChangeCTA = "onchange=" + onchange;
    let ct = `<div class='inputContainer'><label class='filterForm__label' for='${id}'>${label}</label>
                <select id='select-${id}' class='card__select' propName='${propName}' ${onChangeCTA} >
                    <p><option value='0'>&nbsp;Choose</option></p>`;
    $.each(options, (y, opt) => {
        let selected = "";
        if (customer[propName] && customer[propName].list.includes(opt.value))
            selected = "selected";
        ct += `<p><option value='${opt.value}' ${selected}>${opt.text}</option></p>`;
    });
    ct += "</select></div>";
  
    // if (customer[propName]) {
    //     customer[propName].other = customer[propName].other ?? "";
    //     ct += `<textarea propName='${propName}' propType='checkbox' onchange=otherChanged(this)>${customer[propName].other}</textarea>`;
    // }
    return ct;
};


/**
 *
 * @param {string} id the id of the textarea element
 * @param {string} label the label value
 * @param {string} value the value of the textarea
 * @param {string} onchange the callback in string format with parameters
 * @return {string} the select element in string
 */
const buildTextArea = (id, value, label, onchange) => {
    if (onchange !== null)
        onChangeCTA = "onchange=" + onchange;
    // let addDate = "onclick='"+$("#area-"+id).value + currentDate()+"'";
    // <div ${addDate}>add date</div>
    let ct = `<div class='inputContainer'><label class='filterForm__label' for='${id}'>${label}</label>
   
     <textarea id='area-${id}' propName='${id}' propType='textarea' ${onChangeCTA}>${value}</textarea></div>`;
    return ct;
};

/**
 * 
 * @param {string} id the id of the input element
 * @param {string} label the label value
 * @param {string} value the value of the input
 * @param {string} onchange the callback in string format with parameters
 * @return {string} the select element in string
 */
const buildInput = (id, value, label, onchange) => {
    if (onchange !== null)
        onChangeCTA = "onchange=" + onchange;
    let ct = `<div class='inputContainer'><label class='filterForm__label' for='${id}'>${label}</label>
     <input type='text' id='input-${id}'  propName='${id}' propType='input' ${onChangeCTA} value='${value}' autocomplete='off'/></div>`;
    return ct;
};

/**
 * 
 * @param {string} id the id (or propName) of the check element
 * @param {object} options the list of options
 * @param {string} label the label value
 * @param {string} onchange the callback in string format with parameters
 * @return {string} the select element in string
 */
const buildCheckbox = (id, options, label, onchange, propName) => {
    if (onchange !== null)
        onChangeCTA = "onchange=" + onchange;
    let ct = `<div class='inputContainer' id='check-${id}'><label class='filterForm__label' for='${id}'>${label}</label>`;
    $.each(options, (y, opt) => {
        let checked = "";
        if (customer[propName] && customer[propName].list.includes(opt.value))
            checked = "checked"
        ct += `<div><input type='checkbox' value='${opt.value}' propName='${propName}' 
           ${onChangeCTA} ${checked}>&nbsp;${opt.text}</div>`;
    });
    ct += "</div>";
    // if (customer[propName]) {
    //     customer[propName].other = customer[propName].other ?? "";
    //     ct += `<textarea propName='${propName}' propType='checkbox' onchange=otherChanged(this)>${customer[propName].other}</textarea>`;
    // }
    return ct;
};

const selectSelect = (elid, targetValue) => {
    let target = $("#elid");

};

const setCheck = (el) => {
    if (!$(el).attr("checked") || $(el).attr("checked") === "")
        $(el).attr("checked", "checked");
    else
        $(el).removeAttr("checked");
};

const initiateObject = (type) => {
    if (type === "checkbox" || type === "select")
        return { "list": [] };
    else if (type === "list" )
        return [];
    else
        return "";
};
