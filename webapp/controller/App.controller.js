sap.ui.define(['sap/ui/core/mvc/Controller',
'sap/m/MessageToast',
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel"
],
(Controller,MessageToast,JSONModel,ResourceModel)=>{
    "use strict";

    
    return Controller.extend('project_web.controller.App',{
       

        // onShowHello(){
        //     const oBundle = this.getView().getModel("i18n").getResourceBundle()
        //     const sReceipent = this.getView().getModel().getProperty("/recipient/name")
        //     const sMssg = oBundle.getText("helloMsg",[sReceipent])
        //     MessageToast.show(sMssg)
        // }
    })
})