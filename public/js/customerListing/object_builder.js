const createCustomerObject = (name, accountManager, iamType) => {
    let newBlankCustomer = {};
    newBlankCustomer.name=name;
    newBlankCustomer.lastUpdate=currentDate();
    newBlankCustomer.creationDate=currentDate();
    newBlankCustomer.accountManager = { "list": [] };
    newBlankCustomer.accountManager.list.push(accountManager.value);
    newBlankCustomer.iamType = { "list": [] };
    newBlankCustomer.iamType.list.push(iamType.value);
    // newBlankCustomer.accountManager=accountManager;
    // newBlankCustomer.IAMType= iamType;
    newBlankCustomer.googleMeetingNotes="";
    newBlankCustomer.srm="";
    
    newBlankCustomer.products={};    
    newBlankCustomer.salesForceLink="";
    newBlankCustomer.contacts=[];
    newBlankCustomer.generalInfo="";
    newBlankCustomer.numbeOfUsers="";
    newBlankCustomer.nextSteps="";    
    newBlankCustomer.project="";
    
    return newBlankCustomer;
};





// const createCustomer = (newName, accountManager, engineer) => {
//     let newBlankCustomer = {};
//     newBlankCustomer.name = newName;
//     newBlankCustomer.region = { "list": [] };
//     newBlankCustomer.region.list.push(accountManager.region);
//     newBlankCustomer.languages = { "list": [] };
//     newBlankCustomer.languages.list.push(accountManager.languages);
//     newBlankCustomer.currencies = { "list": [] };
//     newBlankCustomer.currencies.list.push(accountManager.currencies);
//     newBlankCustomer.units = { "list": [] };
//     newBlankCustomer.units.list.push(accountManager.units);
//     newBlankCustomer.accountManager = { "list": [] };
//     newBlankCustomer.accountManager.list.push(accountManager.value);
//     newBlankCustomer.solutionEngineer = { "list": [] };
//     newBlankCustomer.solutionEngineer.list.push(Number(engineer));
//     newBlankCustomer.servicesEstimateRequest;
//     newBlankCustomer.servicesEstimateReceived;
//     newBlankCustomer.contentEstimateRequest;
//     newBlankCustomer.contentEstimateReceived;
//     return newBlankCustomer;
// };