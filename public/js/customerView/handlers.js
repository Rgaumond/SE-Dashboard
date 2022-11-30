const engineering_events = {
    initiate() {
        $(window).on('resize', function () {
            setStickyNotesHeight();
        });
        $("#save-button").on('click', function () {
            customerUpdate();
        });        
    }
};

const deleteCustomerValidation = () => {
    if (confirm("Delete!")) {
        customerDelete();
    }
};


const toggleView=()=>{
    if(!discoveryInitiated)
        initiatedDiscovery();
    if(currentView==="discovery"){
         currentView = "details";
         $("#discovery-container").hide();
    }        
    else{
        currentView = "discovery";
        $("#discovery-container").css({"display":"flex"});
    }

    
};

const addToDiscoveryNotes = (propName, note) =>{
    let original = $(`#note-${propName} .ql-editor`).html();
    $(`#note-${propName} .ql-editor`).html(`${original}<p><strong><u>${note}</u></strong></p>`);
};



// const customerChanged = (newCustomer) => {
//     if (!customerBaseline) {
//         customerBaseline = JSON.parse(JSON.stringify(newCustomer));
//         return false;
//     }
//     else {
//         let isEqual = JSON.stringify(newCustomer) === JSON.stringify(customerBaseline);
//         if (!isEqual) {//update baseline
//             customerBaseline = JSON.parse(JSON.stringify(newCustomer));
//         }
//         return !isEqual;
//     }
// };

