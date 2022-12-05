const printCards = (sort) => {
  $(".content").html("");
  if (!sort) {
    $.each(ArrayUtilities.sortByName(customers), (index, cust) => {
      generateHomeCards.generate(cust);
    });
  } else {
    $.each(
      ArrayUtilities.sortByNumericValueDesc(customers, "projectEstimate"),
      (index, cust) => {
        generateHomeCards.generate(cust);
      }
    );
  }

  homecardHandler();
  $(".content").append(addCustomerButton());
  $(".content").append(
    `<div class='filterTotal'>Result: ${customers.length} clients</div>`
  );
  dialog.disintegrate(pendingResponse);
};

const generateHomeCards = {
  generate(customer) {
    if (!customer.projectEstimate) customer.projectEstimate = 0;
    const { _id, name, projectEstimate } = customer;
    // let eng = ArrayUtilities.findObjByProp(solutionEngineerOptions.options, "value", customer.solutionEngineer.list[0]);
    // if (eng === null) {
    //     eng = { "text": "?" };
    // }
    // let accMan = ArrayUtilities.findObjByProp(accountManagerOptions.options, "value", customer.accountManager.list[0]);
    // if (accMan === null) {
    //     accMan = { "text": "Not assigned" };
    // }
    let pendingEstimate = "";
    //if (isPendingEstimate(customer))
    //    pendingEstimate = "pendingEstimate";
    let ct = `<div id='card${_id}' CID='${_id}' class='home-card'>
        <div class='home-card-outer ${pendingEstimate}'></div>
        <div class='home-card-inner'> 
            <div id='card-front${_id}'  CID='${_id}' class='home-card-front'>
                <div style='width:100%'>${name}</div>
                <div style='font-size:.8em'>$${projectEstimate}</div>
            </div>
            <div id='card-back${_id}' customerID='${_id}' class='home-card-back'>
                <div>${name}</div>
                
                <div class='home-card-button-container'>`;

    if (customer.folder)
      ct += ` <button class='home-card-button' targetURL='${customer.folder}' target='folder')>
                        <i class='fa fa-folder-open' aria-hidden='true'></i>
                    </button>`;

    ct += `<button class='home-card-button' obj_id='${_id}' targetName='${name}' target='engineering'>
                        <i class='fa fa-cogs' aria-hidden='true'></i>
                    </button>
                    <button class='home-card-button' targetName='${name}' obj_id='${_id}' target='info'>
                        <i class='fa fa-info' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        </div>
        </div >`;
    $(".content").append(ct);
  },
};
