let todos =[];
//let todo = {};
toDoList();

const toDoInitReponseHandler = (todoResult) => {   
    todos = todoResult;
    showTotalTodos(todos.length);   
}

const showAddToDo = () => {
    let ct = `<div class='dialog-card'>
        ${buildInput("toDoName", "", "To Do Name")}
        ${buildInput("toDoTargetDate", "", "Target Date")}
        ${buildTextArea("toDoDetails", '', "Details")}</div>`;
    dialog.load("New To Do", ct, toDoValidate, "Add");
    $("#toDoName").focus();

};

const showEditToDo = (index) => {
    todo = todos[index];
    let ct = `<div class='dialog-card'>
        ${buildInput("toDoName", todo.name, "To Do Name")}
        ${buildInput("toDoTargetDate", todo.targetDate, "Target Date")}
        ${buildTextArea("toDoDetails", todo.details, "Details")}</div>`;
    dialog.load("New To Do", ct, toDoValidateEdit, "Update");
    $("#toDoName").focus();

};

const showToDos = () => {
    generateList
};

const generateToDoList = () => {
    let finalCt = "";
    
    $.each(todos, (index, todoItem) => {
        let details = todoItem.details;
        if(details==="")
            details = "--";
        let targetDate = todoItem.targetDate;
        if(targetDate==="")
            targetDate = "No date";
        let truncatedName = truncateText(todoItem.name);
        let ct = 
        `<div class='to-do-list-outer-container' >
            <div class='to-do-list-container' style='min-width:300px;font-size:1.4em'>
                <div class='to-do-list-title-container' >
                    <div class='to-do-list-title' onclick=showEditToDo(${index})>${truncatedName}</div>
                    <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick="confirmDelete(${todoItem._id},${index},'${truncatedName}')">
                        <i class='fa fa-trash' aria-hidden='true'></i>
                    </div>
                </div>            
                <div class='to-do-list-date' onclick=editToDoDialog(${todoItem._id},${index})>Target: ${targetDate}</div>
                <div class='to-do-list-details' style='white-space:pre-wrap' >${details}</div>
            </div>
        </div>`;
        //CTAs
        // ct += `<div class='list-cta-container'>
        //     <div class='list-cta-icon to-do-delete-list' pop-up='Delete' onclick=toDoDelete(${todoItem._id},${index})>
        //         <i class='fa fa-trash' aria-hidden='true'></i>
        //     </div>
        // </div></div>`;
        finalCt+=ct;
    });
    dialog.load("To Do List",finalCt);
  };  


const toDoValidate = () => {
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else{
        let tempObject = createToDoObject();
        tempObject.name = $("#input-toDoName").val();
        tempObject.details = $("#area-toDoDetails").val();
        tempObject.targetDate = $("#input-toDoTargetDate").val();
        dialog.disintegrate();
        toDoAdd(tempObject);
    }
}

const toDoValidateEdit = () => {
    if ($("#input-cieName").val() === "")
        alert("You must enter a name");
    else{
         todo.name = $("#input-toDoName").val();
        todo.details = $("#area-toDoDetails").val();
        todo.targetDate = $("#input-toDoTargetDate").val();
        dialog.disintegrate();
        toDoUpdate(todo);
    }
}

const createToDoObject = (name, accountManager, iamType) => {
    let newBlankCustomer = {};
    newBlankCustomer.name=name;
    newBlankCustomer.byDate="";
    newBlankCustomer.creationDate=currentDate();
    newBlankCustomer.details = "";
    return newBlankCustomer;
};

const showTotalTodos = (total) =>{
    $('#toDo-button').attr('data-content',total);
};

const confirmDelete = (id,index,name)=>{
    if (confirm("Delete "+ name)) {
     toDoDelete(id,index);
    }
};