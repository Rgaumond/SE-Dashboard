const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    lastUpdate: String,
    creationDate: String,
    accountManager: mongoose.Schema.Types.Mixed,
    iamType: mongoose.Schema.Types.Mixed,
    activity: String,
    temp: String,
    stack: String,
    LCM: String,
    lastUpdateDate: String,
    googleDrive: String,
    salesForceLink: String,
    numberOfUsers: String,
    contacts: [],
    otherDocs: [],
    nextSteps: String,
    nextMeeting: mongoose.Schema.Types.Mixed,
    nextMeetingDate: String,
    onPremNumber: String,
    onCloudNumber: String,
    sdr: mongoose.Schema.Types.Mixed,
    wifProducts: mongoose.Schema.Types.Mixed,
    targetDate: String,
    discoveryDate: String,
    demoDate: String,
    currentStack: String,
    painPoints: String,
    competition: String,
    lastStep: String,
    solutionNotes: String,
    projectEstimate: Number,
    stage: mongoose.Schema.Types.Mixed,
    specialists: mongoose.Schema.Types.Mixed,

    sourceOfTruth: mongoose.Schema.Types.Mixed,

    cicProducts: mongoose.Schema.Types.Mixed,

    generalInfo: String,

    project: String,
  },
  { collection: "customers" }
);

module.exports = mongoose.model("CustomerModel", searchSchema);
