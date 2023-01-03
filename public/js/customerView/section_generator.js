let columns = [
  { name: "info1", view: "details" },
  { name: "activities", view: "details" },
  { name: "tech", view: "details" },
  { name: "contact", view: "details" },
  { name: "discovery", view: "discovery" },
];

const generateInfoElement = () => {
  generateColumns(columns);
  generateStickyNotes("activity", "Meetings");
  generateStickyNotes("temp", "NOTES");

  generateFloatingNotes("currentStack", "Meetings");
};

const generateColumns = (columns) => {
  $.each(columns, (index, column) => {
    generateColumn(column.name, column.view);
  });
  generateSections();
};

const generateSections = () => {
  generateSection(
    "SALES",
    [
      ["accountManager", "select", "AE"],
      ["iamType", "select", "IAMType"],
      ["sdr", "select", "SDR"],
      ["specialists", "checkbox", "Specialist(s)"],
      ["salesForceLink", "link", "Salesforce"],
      ["googleDrive", "link", "Shared Files"],
    ],
    "info1"
  );
  generateSection("DOCUMENTS", [["otherDocs", "list", "Dccuments"]], "info1");
  generateSection(
    "NEXT",
    [
      ["discoveryDate", "date", "Discovery"],
      ["demoDate", "date", "Last Demoed"],
      ["lastStep", "textarea", "Last Step"],
      ["nextSteps", "textarea", "Next Steps"],
      ["nextMeetingDate", "date", "Next Meeting Date"],
      ["nextMeeting", "select", "Next Meeting Type"],
    ],
    "info1"
  );

  generateSection(
    "SOLUTION",
    [
      ["numberOfUsers", "textarea", "Number of Users"],
      ["painPoints", "textarea", "Pain Points"],
      ["competition", "textarea", "Competition"],
      ["targetDate", "date", "Target Date"],
      ["projectEstimate", "input", "Project Estimate"],
      ["wifProducts", "checkbox", "target Product"],
      ["solutionNotes", "textarea", "Solution Notes"],
    ],
    "activities"
  );

  generateSection(
    "STACK",
    [
      ["onPremNumber", "input", "# App OnPrem"],
      ["onCloudNumber", "input", "# App Cloud"],
      ["sourceOfTruth", "input", "Source of Truth"],
      ["LCM", "textarea", "LCM Current"],
      ["currentStack", "textarea", "Current Stack"],
    ],
    "tech"
  );

  generateSection("CONTACTS", [["contacts", "list", "Contacts"]], "contact");

  generateSection(
    "DISCOVERY",
    [
      ["onPremNumber", "input", "# App OnPrem"],
      ["onCloudNumber", "input", "# App Cloud"],
      ["sourceOfTruth", "input", "Source of Truth"],
      ["LCM", "textarea", "LCM Current"],
      ["currentStack", "textarea", "Current Stack"],
      ["numbeOfUsers", "input", "Number of Users"],
      ["painPoints", "textarea", "Pain Points"],
      ["competition", "textarea", "Competition"],
      ["solutionNotes", "textarea", "Solution Notes"],
      ["sourceOfTruth", "input", "Source Of Truth"],
    ],
    "discovery"
  );

  // colorizeEmptyDiscoveryItems();
};

// function generateInfoElement() {
//     generateColumn("info1", "info");
//         generateSection("COMPANY_INFO", [
//             ["countries", "checkbox", "Countries"],
//             ["businessType", "select", "Business"],
//             ["domains", "checkbox", "Domains"],
//             ["ourProduct", "checkbox", "Has 2020 products"],
//             ["website", "link", "Website"],
//             ["eCommerce", "select", "Has e-Commerce"],
//         ], "info1");

//         generateSection("COMMERCIAL_INFO", [
//             ["branding", "input", "Branding"],
//             ["languages", "checkbox", "Languages"],
//             ["currencies", "checkbox", "Currencies"],
//             ["units", "select", "Units"],
//             ["targetDomains", "checkbox", "Targeted domains"],
//             ["timeToMarket", "input", "Time to market"],
//         ], "info1");

//     generateColumn("engineering1", "engineering");
//         generateSection("OWNERS", [
//             ["solutionEngineer", "select", "Solution engineer"],
//             ["accountManager", "select", "Account manager"],
//             ["region", "select", "Region"],
//             ["application", "select", "Application"],
//             ["serviceStatus", "select", "Service status"],
//             ["folder", "link", "One Drive"],
//         ], "engineering1");
//         generateSection("INTEGRATION", [
//             ["login", "select", "Login"],
//             ["pricing", "select", "Pricing"],
//             ["itemList", "select", "Item List"],
//             ["cart", "select", "Cart"],
//             ["appointmentBooking", "select", "Appointment booking"],
//             ["socialMedias", "checkbox", "Social medias"],
//             ["landingPage", "select", "Landing Page"],
//             ["downloadToProTool", "select", "Download to protool"],
//             ["roles", "checkbox", "Roles"],
//         ], "engineering1");

//     generateColumn("engineering2", "engineering");
//         generateSection("ESTIMATES", [
//             ["nextMeeting", "date", "Next Meeting"],
//             ["servicesEstimateReceived", "date", "PS received"],
//             ["contentEstimateRequest", "date", "Content requested"],
//             ["contentEstimateReceived", "date", "Content received"],
//         ], "engineering2");
//         generateSection("ABBREV_BRIEF_DETAILS", [["abbrevBriefDetails", "staticList", "Brief"]], "engineering2");
//         generateSection("BRIEF_DETAILS", [["briefDetails", "staticList", "Brief"]], "engineering2");
//         generateSection("SOLUTION_DETAILS", [["solutionDetails", "staticList", "Brief"]], "engineering2");

//     generateColumn("engineering3", "engineering");
//         generateSection("CONTACTS", [["contacts", "list", "Contacts"]], "engineering3");
//         generateSection("DOCUMENTS_FOLDERS", [["documents", "list", "Documents"]], "engineering3");
//         generateSection("PRESENTATIONS", [["presentations", "list", "Presentations"]], "engineering3");

//         generateStickyNotes("activity", "ACTIVITIES");
//         generateStickyNotes("temp", "NOTES");
// }
