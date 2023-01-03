const otherDocsListItem = (listItem, index) => {
  ct = `<div class='list-outer-container'>
            <div class='list-container'>
                <div class='otherDocs_wrappable' title='Title: ${
                  listItem.link
                }' onclick=editOtherDocsDialog(${index})>${truncateText(
    listItem.name
  )}</div>
    </div>`;

  //CTAs
  ct += `<div class='list-cta-container'>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deleteOtherDocs(${index})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
          </div></div>`;
  return ct;
};

const addOtherDocs = () => {
  let newOtherDocs = {
    name: $("#input-otherDocsName").val(),
    link: $("#input-otherDocsLink").val(),
  };
  customer.otherDocs.push(newOtherDocs);
  dialog.disintegrate();
  customerUpdate();
  generateList("otherDocs");
};

const editOtherDocs = () => {
  let index = $(".dialog-card").attr("index");
  customer.otherDocs[index].name = $("#input-otherDocsName").val();
  customer.otherDocs[index].link = $("#input-otherDocsLink").val();
  dialog.disintegrate();
  customerUpdate();
  generateList("otherDocs");
};

const deleteOtherDocs = (index) => {
  if (confirm("Delete!")) {
    customer.otherDocs.splice(index, 1);
    customerUpdate();
    generateList("otherDocs");
  }
};
