jQuery(function () {
  referenceList();
  //deleteCrap();
});

const subjects = [
  "Other",
  "AWS",
  "WkFlow",
  "App",
  "OAG",
  "ASA",
  "WiF",
  "OAuth",
  "CIC",
  "CICfR",
  "WiFfR",
];

const referenceInitReponseHandler = (data) => {
  references = data;
  let ct = "";

  const uniqueProducts = new Set();
  $.each(references, (i, ref) => {
    uniqueProducts.add(ref.product);
  });

  uniqueProducts.forEach((value) => {
    console.log(value);
  });

  uniqueProducts.forEach((val) => {
    ct += `<div class="ref-header-buttons" onclick="showReference(this,'${val}')">
    ${val}
  </div>`;
  });
  $("#reference-header").append(ct);

  // <div class="ref-header-buttons" onclick="showReference(this,'Other')">
  //       Other
  //     </div>
  //loadApps();
  //referenceDeleteAll();

  // $.each(references, (index, ref) => {
  //   $.each(ref.features, (index, fea) => {
  //     var date = new Date();

  //     let newItem = {};
  //     newItem._id = date.getTime() - index * 12;
  //     newItem.product = ref.product;
  //     newItem.name = fea.name;
  //     newItem.details = fea.details;
  //     referenceMigrate(newItem);
  //   });
  // });
};
