jQuery(function () {
  referenceList();
});

const referenceInitReponseHandler = (data) => {
  references = data;

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
