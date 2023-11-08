sap.ui.define(['sap/ui/core/mvc/Controller',
'sap/m/MessageToast',
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel"
],
(Controller,MessageToast,JSONModel,ResourceModel)=>{
    "use strict";

    
    return Controller.extend('project_web.controller.HelloPanel',{
       

        onShowHello(){
            const oBundle = this.getView().getModel("i18n").getResourceBundle()
            const sReceipent = this.getView().getModel().getProperty("/recipient/name")
            const sMssg = oBundle.getText("helloMsg",[sReceipent])
            MessageToast.show(sMssg)
        },

        onOpenDialog(){
            this.pDialog ??= this.loadFragment({
                name: "project_web.view.HelloDialog"
            }) 
            this.pDialog.then((oDialog)=>oDialog.open())
        },
        onCloseDialog(){
            this.byId("helloDialog").close()
        }
    })
})