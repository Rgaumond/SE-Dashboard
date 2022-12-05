let stacks =[];
//let stack = {};
stackList();

const stackInitReponseHandler = (stackResult) => {   
    stacks = stackResult;
    showTotalStacks(stacks.length);   
}

const showAddStack = () => {
    let ct = `<div class='dialog-card'>
        ${buildInput("stackName", "", "To Do Name")}
        ${buildInput("stackTargetDate", "", "Target Date")}
        ${buildTextArea("stackDetails", '', "Details")}</div>`;
    dialog.load("New To Do", ct, stackValidate, "Add");
    $("#stackName").focus();

};

const showEditStack = (index) => {
    stack = stacks[index];
    let ct = `<div class='dialog-card'>
        ${buildInput("stackName", stack.name, "To Do Name")}
        ${buildInput("stackTargetDate", stack.targetDate, "Target Date")}
        ${buildTextArea("stackDetails", stack.details, "Details")}</div>`;
    dialog.load("New To Do", ct, stackValidateEdit, "Update");
    $("#stackName").focus();

};

const showStacks = () => {
    generateList
};

const generateStackList = () => {
    let finalCt = "";
    
    $.each(stacks, (index, stackItem) => {
        let details = stackItem.details;
        if(details==="")
            details = "--";
        let targetDate = stackItem.targetDate;
        if(targetDate==="")
            targetDate = "No date";
        let truncatedName = truncateText(stackItem.name);
        let ct = 
        `<div class='to-do-list-outer-container' >
            <div class='to-do-list-container' style='min-width:300px;font-size:1.4em'>
                <div class='to-do-list-title-container' >
                    <div class='to-do-list-title' onclick=showEditStack(${index})>${truncatedName}</div>
                    <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick="confirmDelete(${stackItem._id},${index},'${truncatedName}')">
                        <i class='fa fa-trash' aria-hidden='true'></i>
                    </div>
                </div>            
                <div class='to-do-list-date' onclick=editStackDialog(${stackItem._id},${index})>Target: ${targetDate}</div>
                <div class='to-do-list-details' style='white-space:pre-wrap' >${details}</div>
            </div>
        </div>`;
        //CTAs
        // ct += `<div class='list-cta-container'>
        //     <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick=stackDelete(${stackItem._id},${index})>
        //         <i class='fa fa-trash' aria-hidden='true'></i>
        //     </div>
        // </div></div>`;
        finalCt+=ct;
    });
    dialog.load("To Do List",finalCt);
  };  


const stackValidate = () => {
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else{
        let tempObject = createStackObject();
        tempObject.name = $("#input-stackName").val();
        tempObject.details = $("#area-stackDetails").val();
        tempObject.targetDate = $("#input-stackTargetDate").val();
        dialog.disintegrate();
        stackAdd(tempObject);
    }
}

const stackValidateEdit = () => {
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else{
         stack.name = $("#input-stackName").val();
        stack.details = $("#area-stackDetails").val();
        stack.targetDate = $("#input-stackTargetDate").val();
        dialog.disintegrate();
        stackUpdate(stack);
    }
}

const createStackObject = (name, accountManager, iamType) => {
    let newBlankCustomer = {};
    newBlankCustomer.name=name;
    newBlankCustomer.byDate="";
    newBlankCustomer.creationDate=currentDate();
    newBlankCustomer.details = "";
    return newBlankCustomer;
};

const showTotalStacks = (total) =>{
    $('#stack-button').attr('data-content',total);
};

const confirmDelete = (id,index,name)=>{
    if (confirm("Delete "+ name)) {
     stackDelete(id,index);
    }
};