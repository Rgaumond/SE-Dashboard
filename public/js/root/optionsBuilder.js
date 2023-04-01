const generateSelectOptions = (Arr, obj, label) => {
  obj.name = label;
  obj.options = [];
  $.each(Arr, (index, item) => {
    let tempObj = {};
    tempObj.value = index + 1;
    tempObj.text = item;
    obj.options.push(tempObj);
  });
};

let nextMeetingOptions = {};
let meetingsTypes = [
  "Discovery",
  "Demo",
  "Debrief",
  "Follow-Up",
  "Technical Deep Dive",
  "Techical Help",
];
generateSelectOptions(meetingsTypes, nextMeetingOptions, "Meeting");

let accountManagerOptions = {};
let accountManagers = [
  "François Vigneault",
  "John Campbell",
  "Kyffin De Souza",
  "Robert Samaan",
  "John Campbell",
  "Ron Hassanwalia",
];
generateSelectOptions(
  accountManagers,
  accountManagerOptions,
  "Account manager"
);

let sdrOptions = {};
let SDRs = [
  "Genny Dozortsev",
  "Stacey Ntongo",
  "Charles Kijek",
  "Michael Badejo",
  "Stacey Ntongo",
  "Genny Dozortsev",
];
generateSelectOptions(SDRs, sdrOptions, "SRD");

let specialistsOptions = {};
let specialists = [
  "Mike Berthold ARCH",
  "Jordan Taylor CIC",
  "Alexander Spotnitz ASA",
  "Louis Migault BVA",
  "Andrew Whitman CIC",
  "Laurence York OIG",
  "Ryan Masrani CSM",
];
generateSelectOptions(specialists, specialistsOptions, "SRD");

let stageOptions = {};
let stages = [
  "Select Stage",
  "0- Qualified Out",
  "1- Assigned",
  "2- Discovery & Tech Qualification",
  "3- Technical Scoping",
  "4- Validate Solution",
  "5- Final Due",
  "6- Technical Win",
  "7- Technical Loss",
  "8- Zombies",
  "9- Pending",
  "10- Closed/Won",
  "11- No Stage",
];
generateSelectOptions(stages, stageOptions, "Meeting");

let iamTypeOptions = {};
let IAMs = ["WIF", "CIC"];
generateSelectOptions(IAMs, iamTypeOptions, "IAM Type");

let wifProductsOptions = {};
let WIFs = [
  "UD",
  "MFA",
  "AMFA",
  "SS0",
  "LCM",
  "OIG",
  "OAG",
  "Workflows",
  "ASA",
];
generateSelectOptions(WIFs, wifProductsOptions, "IAM Type");

let cicProducstOptions = {};
let CICs = ["UD"];
generateSelectOptions(WIFs, cicProducstOptions, "IAM Type");

let heroTypesOptions = {};
let heroTypes = [
  // "Account Planning",
  // "Partner Enablement/Support",
  // "A Enablement/Licensing Discussion",
  // "Asset Development",
  // "Learning & Enablement",
  // "Travel",
  // "Marketing Event",
  // "Health Check (Commercial Only)",
  "Product Migrations - OIE",
  "Post-Sale Customer Support",
  "RFx Completion/Review",
  "Discovery",
  "Preparation/Follow-Up",
  "Demo Build",
  "POC Build",
  "Demo/Presentation Delivery",
  "BVA Support",
  //"Architecture Development",
  "Mutual Delivery Plan (MDP)",
];
generateSelectOptions(heroTypes, heroTypesOptions, "Hero Type");

let heroTimeOptions = {};
let heroTime = [
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
];
generateSelectOptions(heroTime, heroTimeOptions, "Hero Time");
// let sdrOptions = {
//     "name": "SRD",
//     "options": [{ "value": 1, "text": "Yves Régimbald" }, { "value": 2, "text": "Charles Kijek" },
//     { "value": 3, "text": "Michael Badejo" }],
//     select: function (onchange) {
//         return buildSelect("IAMType", this.options, this.name, onchange);
//     }
// };

/* .TO VALIDATE */

let presentationsAppOptions = {
  name: "Application",
  options: [
    { value: "app:ideal spaces sme", text: "Ideal Spaces SME" },
    { value: "app:ideal spaces", text: "Ideal Spaces" },
    { value: "app:ideal spaces essential", text: "Ideal Spaces Essential" },
    { value: "app:mooble", text: "Mooble" },
  ],
  select: function (onchange) {
    return buildSelect("presApp", this.options, this.name, onchange);
  },
};

let serviceStatusOptions = {
  name: "Engineering status",
  options: [
    { value: 3, text: "Pipeline/SQL" },
    { value: 4, text: "Pre Discovery" },
    { value: 5, text: "Discovery" },
    { value: 6, text: "Brief" },
    { value: 7, text: "Proposal" },
    { value: 8, text: "Proposal Review" },
    { value: 9, text: "Workshop" },
    { value: 10, text: "SOW" },
    { value: 11, text: "Closed" },
    { value: 12, text: "Lost to Competitor" },
    { value: 13, text: "Won" },
    { value: 14, text: "Post Sale Inquiry" },
  ],
  select: function (onchange) {
    return buildSelect("serviceStatus", this.options, this.name, onchange);
  },
};

let applicationOptions = {
  name: "Applications",
  options: [
    { value: 2, text: "Ideal Spaces SME", Abrev: "SME" },
    { value: 3, text: "Mooble", Abrev: "Mooble" },
    { value: 4, text: "Ideal Spaces Essentials Generic", Abrev: "Ess Gen" },
    { value: 5, text: "Ideal Spaces Essentials Imperial", Abrev: "Ess Imp" },
    { value: 6, text: "Ideal Spaces Essentials Nobilia", Abrev: "Ess Nobi" },
    { value: 7, text: "Ideal Spaces Enterprise", Abrev: "IS Ent" },
  ],
  select: function (onchange) {
    return buildSelect("application", this.options, this.name, onchange);
  },
};
