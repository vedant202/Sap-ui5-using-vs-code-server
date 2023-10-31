sap.ui.define(["sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
  
],
(UIComponent, JSONModel)=>{
    "use strict";

    return UIComponent.extend("project_web.Component",{
        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            manifest:"json"
         },
        init(){
            console.log(this,arguments)
            UIComponent.prototype.init.apply(this,arguments);

            // set data model
         const oData = {
            recipient : {
               name : "World12"
            }
         };
         const oModel = new JSONModel(oData);
         console.log("oModel",oModel)

         this.setModel(oModel);

         
        }
    })
})