const showModifDialog = () => {
  let ct = `<div class='dialog-card'>
        ${buildInput("modifProduct", currentFeature.product, "Product")}
        ${buildInput("modifTitle", currentFeature.name, "Title")}`;
  dialog.load("Modify", ct, modifyReference, "Modify");
  $("#input-modifProduct").focus();
};

const modifyReference = () => {
  currentFeature.product = $("#input-modifProduct").val();
  currentFeature.name = $("#input-modifTitle").val();
  referenceUpdate(currentFeature);
};
