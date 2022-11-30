const showAddCustomer = () => {
    let ct = `<div class='dialog-card'>${buildInput("cieName", "", "Cie Name")}
                ${buildSelect("accountManagerSelect", ArrayUtilities.sortByTextValue(accountManagerOptions.options,'text'), "Account Manager")}
                ${buildSelect("iamType", ArrayUtilities.sortByTextValue(iamTypeOptions.options,'text'), "IAM Type")}</div>`;
    dialog.load("New customer", ct, addCustomerValidate, "Add");
    $("#cieName").focus();

};

const addCustomerValidate = () => {
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else if ($("#select-accountManagerSelect").val() === "0")
        alert("You must select an account manager");
    else if ($("#select-iamType").val() === "0")
        alert("You must select an IAM type");
   else {
    let name = $("#input-cieName").val()
       let newName = name.toLowerCase();
       let itExist = false;

       $.each(customers, (index, customer) => {
           if (newName === customer.name.toLowerCase())
               itExist = true;
       });
       if (itExist)
           alert("this customer already exist");
       else {
            let accountM = ArrayUtilities.findObjByProp(accountManagerOptions.options, "value", parseInt($("#select-accountManagerSelect").val()));
            let IAM = ArrayUtilities.findObjByProp(iamTypeOptions.options, "value", parseInt($("#select-iamType").val()));
            console.log("AE: "+parseInt($("#select-accountManagerSelect").val()))
            console.log("IAM: "+parseInt($("#select-iamType").val()))
            dialog.disintegrate();
            customerAdd(name,accountM,IAM);
       }
   }
}