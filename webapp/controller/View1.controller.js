sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller,MessageBox) {
    "use strict";

    return Controller.extend("zcftest.controller.View1", {
        onInit: function () {

        },
        onPressABC: function(){
            MessageBox.success("ABC Triggered")
        }
    });
});
