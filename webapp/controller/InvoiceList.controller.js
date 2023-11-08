sap.ui.define(['sap/ui/model/json/JSONModel',
'sap/ui/core/mvc/Controller',
'./HelloPanel.controller'
,'../model/formatter','sap/ui/model/Filter',"sap/ui/model/FilterOperator"],(JSONModel,Controller,hController,formatter,Filter, FilterOperator)=>{
    "use Strict";
    
    return hController.extend("project_web.controller.InvoiceList",{
        formatter:formatter,
        onInit(){
            const oViewModel = new JSONModel({
                currency:"EUR"
            });
            console.log(hController)
            this.getView().setModel(oViewModel,'view') 
        },

        clg:console.log,

        onFilterInvoices(oEvent){
            const aFilter = []
            const sQuery = oEvent.getParameter('newValue')
            const oView = this.getView()
            console.log("oView",oView)
            console.log("oEvent",oEvent)
            console.log("FilterOperator.Contains",FilterOperator.Contains)
            console.log("query",sQuery)
            console.log(new Filter("ProductName",FilterOperator.Contains,sQuery))

            if(sQuery){
                aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery))
            }
            console.log("aFilter",aFilter)
            // filter binding

            const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);

        }
    })

})