﻿const editCustomerDialog = () => {
    dialog.load("Edit customer name", buildInput("customerName", customer.name, "Customer name", "return(false)"), editCustomer, "Save");
};

const editCustomer = () => {
    if ($("#input-customerName").val() === customer.name)
        alert("You have not changed the name");
    else if ($("#input-customerName").val() === "")
        alert("A name is required");
    else {
        customer.name = $("#input-customerName").val();
        customerUpdate(customer);
    }
    
};

const editContactDialog = (index) => {
    const { name, title, details } = customer.contacts[index];
    let ct = `<div class='dialog-card' index=${index}>${buildInput("contactName", name, "Name")}
            ${buildInput("contactTitle", title, "Job title")}
            ${buildTextArea("contactDetails", details, "Other details")}</div>`;
    dialog.load("Edit contact", ct, editContact, "Edit");
    $("#select-contactName").focus();
};

const addCustomercontactsDialog = () => {
    let ct = `<div class='dialog-card'>${buildInput("contactName", "", "Name")}
            ${buildInput("contactTitle", "", "Job title")}
            ${buildTextArea("contactDetails", "", "Other details")}</div>`;
    dialog.load("New contact", ct, addContact, "Add");
    $("#contact-name").focus();
};
