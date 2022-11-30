let pendingRequestCount = 0;
let pendingRequests;

const showPendingAlert = () => {
    $(".content").append(`<div class='pendingRequests' onclick='showPendingRequests()'>Pending requests: ${pendingRequestCount} </div>`);
    if (!localStorage.getItem("alertedDate")) {
        localStorage.setItem("alertedDate", currentDate());
        showPendingRequests();
    }
    else if (new Date(Date.parse(currentDate())) > new Date(Date.parse(localStorage.getItem("alertedDate")))) {
        localStorage.setItem("alertedDate", currentDate());
        showPendingRequests();
    }

};


const isPendingEstimate = (cust) => {
    let hasPendingEstimate = false;
    let servicesRequestDate = [];

    if (cust.servicesEstimateRequest !== "" && cust.servicesEstimateReceived === "") {
        servicesRequestDate.push(new Date(Date.parse(cust.servicesEstimateRequest)));
        hasPendingEstimate = true;
    }
    else if (cust.contentEstimateRequest !== "" && cust.contentEstimateReceived === "") {
        servicesRequestDate.push(new Date(Date.parse(cust.contentEstimateRequest)));
        hasPendingEstimate = true;
    }
    if (hasPendingEstimate)
        cust.requestedDate = max_date(servicesRequestDate, cust.name);
    return hasPendingEstimate;
};

const pendingResponse = () => {
    pendingRequests = [];
    pendingRequestCount = 0;
    $.each(customers, (i, cust) => {
        if (isPendingEstimate(cust)) {
            pendingRequests.push(cust);
            pendingRequestCount++;
        }
    });
    if (pendingRequestCount > 0) showPendingAlert();
};
