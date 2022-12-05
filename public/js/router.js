/* LISTING*/
const customerList = () =>{
    fetch('./customers/',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
    }).then(res => res.json()).then(data => {
        listingInitReponseHandler(data.customers);                      
    }); 
};

/* FILTERING */
const filterCustomers = () =>{
    //customerList();
    applyfilter();
}

/* ADDING */
const customerAdd = (customerName,accountM,IAMType) => {    
    let tempObj = createCustomerObject(customerName,accountM,IAMType);
    fetch('/customers/add',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
        ,body: JSON.stringify(tempObj)
    }).then(res => res.json()).then(data =>{
       window.location.href = "customerView.html?id="+data.newID;                             
    }); 
};

/* UPDATING */
const customerUpdate = (goHome) => {
    fetch('/customers/update',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
        ,body: JSON.stringify(customer)
    }).then(res =>  {
        colorizeEmptyDiscoveryItems();
        addToContactLink();
        if(goHome===true){
            window.location.href = "index.html";  
        };                       
    }); 
};


/* DELETING */
const customerDelete = () => {
    fetch('/customers/delete',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
        ,body: JSON.stringify({_id:customer._id})
    }).then(res=>{
        window.location.href = "index.html";  
    }); 
};

const requestCustomerView = (customerID) => {
        fetch('/customers/view/'+customerID,{
        method:"POST",
        headers: {"Content-Type":"application/json"}
        ,body: JSON.stringify({id:customerID})
    }).then(res => res.json()).then(data => {
        viewInitResponseHandler(data);
    }); 
};

const viewCustomerInfo = () => {    
    fetch('/customers/view',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
    }).then(res => res.json()).then(data => {
        window.location.href = "customerView.html"; 
    });  
};

/* LISTING*/
const customerListFilter = (query) =>{
    fetch('./customers/find',{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(query)
    }).then(res => res.json()).then(data => {
        listingInitReponseHandler(data.customers);                      
    }); 
};

const customerSimpleUpdate = (cust) => {
    fetch('/customers/update',{
        method:"POST",
        headers: {"Content-Type":"application/json"}
        ,body: JSON.stringify(cust)
    }).then(res =>  {                           
    }); 
};

const goToReferences = () =>{
    window.location.href = "references.html"; 
}