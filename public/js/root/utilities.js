function getParameter(p) {
    var url = window.location.search.substring(1);
    var varUrl = url.split('&');
    for (var i = 0; i < varUrl.length; i++) {
        var parameter = varUrl[i].split('=');
        if (parameter[0] === p) {
            return parameter[1];
        }
    }
}

let listPropValues = (propName, optionsObj) => {
    let list = "";
    $.each(customer[propName].list, (index, item) => {
        if (customer[propName].list[0] !== 0){
            let value = ArrayUtilities.findObjByProp(optionsObj.options, "value", parseInt(customer[propName].list[index])).text;
            list += `<li>${value}</li>`;
        }            
    });
    customer[propName].other = customer[propName].other ?? "";
    if (customer[propName].other !== "")
        list += `<li>${customer[propName].other}</li>`;
    return list;
};

function cleanJSON(obj) {
    let unclean = JSON.stringify(obj);
    let cleaned = encodeURIComponent(unclean);
    return cleaned;
}

function truncateText(name) {
    if (name.indexOf("@") > -1)
        return name.substr(0, name.indexOf("@"));
    else
        return name;
}

function testResponse(text) {
    if (typeof text === "string" && text ==="refused") 
        return false;
    else
         return true;   
}



