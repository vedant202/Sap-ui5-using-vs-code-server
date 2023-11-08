sap.ui.define([],()=>{
    "use strict";

    return {
        statusText(sStatus){
            const oResourceModel = this.getOwnerComponent().getModel('i18n').getResourceBundle();
            switch(sStatus){
                case "A":
                    return oResourceModel.getText("invoicesStatusA");
                case "B":
                    return oResourceModel.getText("invoicesStatusB");
                case "C":
                    return oResourceModel.getText("invoicesStatusC");

                default:
                    return sStatus;
            }
        }
    }

})