let unanswered = [];

let customerPropDetails =[];

let infoLoaded = [];

let discoveryItems=[
    "onPremNumber","onCloudNumber","sourceOfTruth","LCM","currentStack","numbeOfUsers",
    "competition","painPoints","solutionNotes","sourceOfTruth"
    ];

let software = [
    "Office365 (MS)","Intune (MS)","Sentinel (MS)","ADFS (ms)","Sailpoint","Ping","Exchange (MS)","Azure AD (MS)","AD (MS)","AADConnect (MS)",
    "Defender (MS)","GitHub","LDAP","Zimbra","Goolge Cast","Alfresco","Zoom","Novel","B2C (MS)","Jamf","Servers Unix","Servers Windows","SAP","IBM","Hybrid (MS)"
]

let discoveryInputs = [
    {name:"onPremNumber",label:"# App on Prem"},
    {name:"onCloudNumber",label:"# App on Cloud"},
    {name:"numberOfUsers",label:"# of Users"},
    {name:"sourceOfTruth",label:"Source of Truth"},
];

let discoveryArea = ["LCM", "painPoints", "competition", "nextSteps"]

let contactLinks = [];

let currentView = "details";

let discoveryInitiated = false;


    
