
let rootCss = ["root", "header", "icons", "dialog"]
let rootJS = ["global_variables",  "optionsBuilder", "event_handler", "icons", "array_handler",
    "date_handler", "utilities", "dialog", "input_builder","toDorouter","toDos"];
const loadRootImport = () => {
    $.each(rootCss, (i, path) => {
        $("head").append(`<link href="css/root/${path}.css" rel="stylesheet" type="text/css">`);
    });
    $.each(rootJS, (i, path) => {
        $("head").append(`<script type="text/javascript" src="js/root/${path}.js"></script>`);
    });
};

