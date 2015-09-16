"use strict";
var GulpConfig = (function () {
    function GulpConfig() {

        this.source = "./";
        this.sourceApp = this.source + "app/";

        this.tsOutputPath = this.source + "/dist/scripts/js";
        this.allJavaScript = [this.source + "/js/**/*.js"];
        this.allTypeScript = this.sourceApp + "**/*.ts";
        this.ignoreTypeScript =  "!" + this.sourceApp + "**/*.spec.ts";
        this.allGeneratedJs = this.tsOutputPath + "/**/*.js";

        this.lessOutputPath = this.source + "/dist/assets/css";
        this.allAssets = this.source + "assets/";
        this.allLess = this.allAssets + "less/**/*.less";
        this.allGeneratedCss = this.lessOutputPath + "/**/*.css";

        this.typings = "./tools/typings/";
        this.libraryTypeScriptDefinitions = "./tools/typings/**/*.ts";
        this.appTypeScriptReferences = this.typings + "app.d.ts";
    }
    return GulpConfig;
})();
module.exports = GulpConfig;
