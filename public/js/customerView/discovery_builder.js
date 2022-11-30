const initiatedDiscovery = () =>{
    discoveryInitiated=true;
    addToContactLink();
    loadSoftwareLinks();
    discoveryStackView();
    loadMeetingLinks();
    addAreaToNote();
};


const loadSoftwareLinks = ()=>{
    $.each(software,(index, soft)=>{
        $("#discovery-stack-links").append(
            `<div class="discovery-link" onclick="addToDiscoveryNotes('currentStack','${soft}')">${soft}</div>`
        );
    });
};

const loadMeetingLinks = ()=>{
    $.each(contactLinks,(index, cont)=>{
        $("#discovery-meeting-links").append(
            `<div class="discovery-link" onclick="addToDiscoveryNotes('temp','${cont}')">${cont}</div>`
        );
    });

    $("#discovery-meeting-links").append(addInputsToNote());
};

const discoveryStackView = () =>{
    let targetWidth = $("#discovery-stack-notes").width();
    $("#discovery-stack-notes").append($("#noteContainer-currentStack"));
    $("#noteContainer-currentStack").height("100%");

    targetWidth = $("#discovery-meeting-notes").width();
    $("#discovery-meeting-notes").append($("#noteContainer-temp"));
    $("#noteContainer-temp").height("100%");

};

const identifyUnanswerdProperties = () =>{
    unanswered=[];
    $.each(customer,(propName,propValue)=>{        
        if (!unanswered.includes(propName)){            
            if(propValue==="" || propValue==="<p><br></p>"){
                unanswered.push(propName);
             }           
        }
    });
};

const colorizeEmptyDiscoveryItems = ()=>{
    identifyUnanswerdProperties();
    let unAnsweredDiscovery = [];
    $.each(customerPropDetails,(index,propLabel)=>{
        if( unanswered.includes(propLabel.name) && 
                discoveryItems.includes(propLabel.name) )
                unAnsweredDiscovery.push(propLabel.label);
    
    $.each($(".eng-card__title"),(index,el)=>{
        if (unAnsweredDiscovery.includes(el.textContent)) 
            el.style.color = "red";
        else
            el.style.color = "black";            
    });           
    });
    
    
    //let test = ArrayUtilities.findObjByProp(customerPropDetails, "name", "sourceOfTruth");
    
}

const addToContactLink=()=>{
    let capture = ["accountManager","sdr","specialists"]
    $.each(capture,(index,value)=>{
        if(customer[value].list[0])
            contactLinks.push(ArrayUtilities.findObjByProp(eval(value + "Options").options, "value", parseInt(customer[value].list[0])).text);
    });
};

const addInputsToNote = (propName, value, label,onchange) =>{
   let ct = "";
   $.each(discoveryInputs,(index,inp)=>{
    ct += `<div style="padding:10px 0">`;
    ct += buildInput(inp.name, customer[inp.name], inp.label, "inputChanged(this)");
    ct+=`</div>`;
   });   
   return ct;
};

const addAreaToNote = () =>{
    let container = $("#discovery-meeting-subnotes");
    let targetWidth = container.width();
    $.each(discoveryArea,(index,propName)=>{
        container.append($("#noteContainer-"+propName));
        container.append($("#noteContainer-"+propName));
        $("#noteContainer-"+propName).height("25%");
    }); 
};
