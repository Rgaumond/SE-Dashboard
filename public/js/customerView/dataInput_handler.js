otherChanged = (el) => {
    let propName = $(el).attr("propName");
    let propType = $(el).attr("propType");
    customer[propName].other = $(el).val();
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, propType));
    customerUpdate();
};
const inputChanged = (el) => {
    let propName = $(el).attr("propName");
    customer[propName] = $(el).val();
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, "input"));
    customerUpdate();
};
// ACTIVE CODING
const textareaChanged = (el,propName) => {
    //let propName = $(el).attr("propName");
    customer[propName] = $(el).html();
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, "textarea"));
    customerUpdate();
};

const linkChanged = (el) => {
    let propName = $(el).attr("propName");
    customer[propName] = $(el).val();
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, "link"));
    customerUpdate();
};

const selectChanged = (el) => {
    let propName = $(el).attr("propName");
    customer[propName].list = [];
    customer[propName].list.push(Number($(el).val()));
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, "select"));
    customerUpdate();
};

const checkedChanged = (el) => {
    let propName = $(el).attr("propName");
    customer[propName].list = [];
    $.each($(`.dialog__main input[type=checkbox]`), (index, bx) => {
        if (bx.checked)
            customer[propName].list.push(Number(bx.value));
    });
    customerUpdate();
    $('.eng-card__value', `#card-${propName}`).html("");
    $('.eng-card__value', `#card-${propName}`).append(writeValues(propName, "checkbox"));

};
