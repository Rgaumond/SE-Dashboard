jQuery(function () {
  referenceList();
  //deleteCrap();
});

const referenceInitReponseHandler = (data) => {
  references = data;
  let ct = "";

  const uniqueProducts = new Set();
  $.each(references, (i, ref) => {
    uniqueProducts.add(ref.product);
  });
  sortedSet = Array.from(uniqueProducts);
  sortedSet.sort();

  $.each(sortedSet, (i, pr) => {
    ct += `<div class="ref-header-buttons" onclick="showReference(this,'${pr}')">
    ${pr}
  </div>`;
  });
  $("#reference-header").append(ct);
};
