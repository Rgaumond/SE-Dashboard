const initiateRootEvents = () => {


    $("#header-logo").on('click', function () {
        if (view === "engineering")
            customerUpdate(true);
        else if (view === "home")
            return false;
        // else
        //     document.location.href = "home.html";
    });
    $("#input-filter-cieName").on('input', function () {
        applyfilter('cieName');
    });
};

// const navigateHome = () => {
//     document.location.href = "index.html";
// };