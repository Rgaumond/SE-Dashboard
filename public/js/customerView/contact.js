const contactListItem = (listItem, index) => {
    ct = `<div class='list-outer-container'>
            <div class='list-container'>
                <div class='contact_wrappable' title='Title: ${listItem.title}' onclick=editContactDialog(${index})>${truncateText(listItem.name)}</div>
    </div>`;

    //CTAs
    ct += `<div class='list-cta-container'>
            <div class='list-cta-icon delete-list' pop-up='Delete' onclick=deleteContact(${index})>
                <i class='fa fa-trash' aria-hidden='true'></i>
            </div>
          </div></div>`;
    return ct;
};

const addContact = () => {
    let newContact = {
        "name": $("#input-contactName").val(),
        "title": $("#input-contactTitle").val(),
        "details": $("#area-contactDetails").val()
    };
    customer.contacts.push(newContact);
    dialog.disintegrate();
    customerUpdate();
    generateList("contacts");
};

const editContact = () => {
    let index = $(".dialog-card").attr("index");
    customer.contacts[index].name = $("#input-contactName").val();
    customer.contacts[index].title = $("#input-contactTitle").val();
    customer.contacts[index].details = $("#area-contactDetails").val();
    dialog.disintegrate();
    customerUpdate();
    generateList("contacts");
};

const deleteContact = (index) => {
    if (confirm("Delete!")) {
        customer.contacts.splice(index, 1);
        customerUpdate();
        generateList("contacts");
    }
};
