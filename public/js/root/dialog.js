const dialog = {
  load(title, content, buttonAction, buttonLabel, callback) {
    dialog.disintegrate();
    $("body")
      .append(`<div class='dialog-container'><div class='dialog'><div class='dialog__title'>${title}<div class='dialog__title-close' onclick='dialog.disintegrate()'>
            <i class= "fa fa-times-circle " aria - hidden="true" ></i >
                        </div ></div>
            <div class='dialog__main'></div>
            <div class='dialog__footer'>
            <button onclick='dialog.disintegrate()'>Cancel</button>
            </div></div></div>`);
    $(".dialog__main").append(content);
    if (buttonAction) dialog.button(buttonLabel, buttonAction);
    if (callback) {
      enableDatePicker();
    }
  },
  shell() {
    dialog.disintegrate();
    $("body").append(`<div class='dialog-container'>
                <div class='dialog'>
                    <div class='dialog__title'><h1 class='dialog__h1'></h1><div class='dialog__title-close' onclick='dialog.disintegrate()'>
                                <i class="fa fa-times-circle " aria-hidden="true"></i>
                        </div></div>
                    <div class='dialog__main'></div>
                    <div class='dialog__footer'><button onclick='dialog.disintegrate()'>Close</button></div>
                </div></div>`);
    $(`.dialog__main`).on("keypress", function (e) {
      if (e.which === 13) {
        dialog.disintegrate();
      }
    });
  },
  floatingShell(propName) {
    dialog.disintegrate();
    $("body").append(`<div class='dialog-container'>
                <div class='dialog float'>
                    <div class='dialog__title'><h1 class='dialog__h1'>${propName}</h1><div class='dialog__title-close' onclick='dialog.disintegrate()'>
                                <i class="fa fa-times-circle " aria-hidden="true"></i>
                        </div></div>
                    <div class='dialog__main'></div>
                    <div class='dialog__footer'><button onclick='dialog.disintegrate()'>Close</button></div>
                </div></div>`);
  },
  alert(content, title) {
    dialog.disintegrate();
    title = title ?? "Alert";
    $("body").append(`<div class='dialog-container'>
                  <div class='dialog'>
                    <div class='dialog__title'>
                        <h1 class='dialog__h1'>${title}</h1>
                        <div class='dialog__title-close' onclick='dialog.disintegrate()'>
                                <i class="fa fa-times-circle " aria-hidden="true"></i>
                        </div>
                    </div>
            <div class='dialog__main'></div>
            <div class='dialog__footer'>
            <button onclick='dialog.disintegrate()'>Close</button>
            </div></div></div>`);
    $(".dialog__main").append(content);
  },
  standy(message) {
    dialog.disintegrate();
    $("body").append(`<div class='dialog-container'>
                  <div class='dialog'>
                    <div class='dialog__title'>
                        <h1 class='dialog__h1'></h1>    
                    </div>
            <div class='dialog__main'></div>
            <div class='dialog__footer'>
            </div></div></div>`);
    $(".dialog__main").append(`<div>Please wait: ${message}</div>`);
  },
  disintegrate(callback) {
    $(".dialog-container").remove();
    $(`.dialog__main`).off("keypress", function (e) {});
    if (callback !== undefined) callback();
  },
  position(h, w) {
    let vRealEstate = ($(window).height() - h) / 2;
    let hRealEstate = ($(window).width() - w) / 2;
    dialog.container.css({ top: vRealEstate, left: hRealEstate });
  },
  show() {
    dialog.veil.show();
    dialog.container.show();
    $(".veilCloser").show();
  },
  button(label, cta) {
    let ct =
      "<button class='dialog--bt' id='dialog--bt'>" + label + "</button>";
    $(".dialog__footer").append(ct);
    $("#dialog--bt").on("click", function () {
      cta();
    });
    $("input").bind("enterKey", function (e) {
      alert("Enter key pressed");
    });
    $("input").keyup(function (e) {
      if (e.keyCode === 13) {
        cta();
      }
    });
  },
};
