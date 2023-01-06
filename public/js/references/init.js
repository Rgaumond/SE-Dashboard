jQuery(function () {
  referenceList();
  //deleteCrap();
});
let sortedSet = [];
const referenceInitReponseHandler = (data) => {
  references = data;

  const uniqueProducts = new Set();
  $.each(references, (i, ref) => {
    uniqueProducts.add(ref.product);
  });
  sortedSet = Array.from(uniqueProducts);
  sortedSet.sort();
  loadHeader();
};

const loadHeader = () => {
  let ct = "";
  $("#reference-navbar").html("");
  ct += `<div class="ref-header-buttons ref-action-button" onclick="showAddReference()">+</div>`;
  $.each(sortedSet, (i, pr) => {
    ct += `<div class="ref-header-buttons" id="ref${pr}" onclick="showReference(this,'${pr}')">${pr} </div>`;
  });
  ct += `<div class="ref-header-buttons" onclick="window.open('./').focus">Return</div>`;
  $("#reference-navbar").append(ct);

  if (
    localStorage.getItem("refProduct") &&
    localStorage.getItem("refFeature") &&
    document.getElementById("ref" + localStorage.getItem("refProduct")) != null
  ) {
    let product = localStorage.getItem("refProduct");
    showReference(
      document.getElementById("ref" + localStorage.getItem("refProduct")),
      product
    );
    showItemDetails(parseInt(localStorage.getItem("refFeature")));
  }
};
