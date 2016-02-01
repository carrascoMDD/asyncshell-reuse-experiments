/*
 jasminespec-02-reuse-prototype-fullpath.js

 Created 201602011002
 */

/*
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */


/// <reference path="lib/reuse-prototype/reuse-prototype-fullpath.js"/>
"use strict";

var aReusePrototypeFullpath_title = "ReusePrototypeFullpath.title";


var aSetupError         = null;
var aReusePrototypeFullpath = null;


var pSetupInstance_ReusePrototypeFullpath = function() {

    var aModule_Identifier   = require( "../node_modules/asyncshell/lib/common-test/identifier-test");
    var aModule_Recorder     = require( "../node_modules/asyncshell/lib/common-test/recorder-test");

    var anIdentifierId = "jasminespec-02-reuse-prototype-fullpathanIdentifierid";
    var anIdentifier = new aModule_Identifier.IdentifierTest_Constructor(
        {},
        anIdentifierId
    );

    var aRecorderTitle = "jasminespec-02-reuse-prototype-fullpath.aRecorderTitle";

    var aRecorder = new aModule_Recorder.RecorderTest_Constructor(
        aRecorderTitle,
        {},
        anIdentifier
    );


    var aModule_SpecParserConfig   = require( "../node_modules/asyncshell/lib/common-test/configs/specparser/specparser-config");

    var aReusePrototypeFullpath_exampletest_source = require( "../asyncshelltests/reuse-prototype-fullpath-exampletest.json");

    var aSpecParserConfig = new aModule_SpecParserConfig.SpecParserConfig_Constructor(
        anIdentifier,
        aReusePrototypeFullpath_exampletest_source, /* theConfigSpec */
        null , /* theParentParser */
        false, /* theSkipPopulation */
        true   /* theAbandonAtFirstSyntaxError */
    );




    if( !aSpecParserConfig.fParse()) {
        aSetupError = "!aSpecParserConfig.fParse()";
        return;
    }

    if( !aSpecParserConfig._v_ParseSuccess) {
        aSetupError = "!aSpecParserConfig._v_ParseSuccess";
        return;
    }


    var aConfiguration = aSpecParserConfig._v_ConfPopulated;
    if( !aConfiguration) {
        aSetupError = "!aSpecParserConfig._v_ConfPopulated";
        return;
    }



    var aModule_ReusePrototypeFullpath = require( "../lib/reuse-prototype/reuse-prototype-fullpath");

    aReusePrototypeFullpath = new aModule_ReusePrototypeFullpath.ReusePrototypeFullpath_Constructor(
        aReusePrototypeFullpath_title,
        aConfiguration,
        anIdentifier,
        aRecorder
    );

};



pSetupInstance_ReusePrototypeFullpath();



describe("reuse-prototype-fullpath", function() {


    describe("reuse-prototype-fullpath setup", function() {

        it("no aSetupError", function() {
            expect( aSetupError).toBeNull();
        });

        it("aReusePrototypeFullpath not null", function() {
            expect( aReusePrototypeFullpath).not.toBeNull();
        });
    });






    describe("reuse-prototype-fullpath module", function() {


        it("Has module defined", function () {
            expect( aReusePrototypeFullpath._v_Module).not.toBeUndefined();
        });

        it("Has module not null", function () {
            expect( aReusePrototypeFullpath._v_Module).not.toBeNull( null);
        });

        it("Has module ModuleName common_svce_type", function () {
            expect( aReusePrototypeFullpath._v_Module.ModuleName).toBe( "reuse-prototype-fullpath");
        });

        it("Has module ModulePackages common", function () {
            expect( aReusePrototypeFullpath._v_Module.ModulePackages).toBe( "reuse-prototype");
        });

        it("Has module ModuleFullName common.commonctrl", function () {
            expect( aReusePrototypeFullpath._v_Module.ModuleFullName).toBe( "reuse-prototype/reuse-prototype-fullpath");
        });

        it("Has module CommonSvce_Prototype defined", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Prototype).not.toBeUndefined();
        });

        it("Has module CommonSvce_Prototype not null", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Prototype).not.toBeNull( null);
        });

        it("Has module CommonSvce_Constructor defined", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Constructor).not.toBeUndefined();
        });

        it("Has module CommonSvce_Constructor not null", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Constructor).not.toBeNull( null);
        });

        it("Has module CommonSvce_SuperPrototypeConstructor defined", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_SuperPrototypeConstructor).not.toBeUndefined();
        });

        it("Has module CommonSvce_SuperPrototypeConstructor not null", function () {
            expect( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_SuperPrototypeConstructor).not.toBeNull( null);
        });
    });






    describe("reuse-prototype-fullpath prototype", function() {

        it("Has _v_Prototype defined", function () {
            expect( aReusePrototypeFullpath._v_Prototype).not.toBeUndefined();
        });

        it("Has _v_Prototype EQ module ReusePrototypeFullpath_Prototype", function () {
            expect( aReusePrototypeFullpath._v_Prototype).toBe( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Prototype);
        });

        it("Has _v_Prototype_ReusePrototypeFullpath defined", function () {
            expect( aReusePrototypeFullpath._v_Prototype_ReusePrototypeFullpath).not.toBeUndefined();
        });

        it("Has _v_Prototype_ReusePrototypeFullpath EQ _v_Module.ReusePrototypeFullpath_Prototype", function () {
            expect( aReusePrototypeFullpath._v_Prototype_ReusePrototypeFullpath).toBe( aReusePrototypeFullpath._v_Module.ReusePrototypeFullpath_Prototype);
        });

    });






    describe("reuse-prototype-fullpath instance", function() {

        it("Has _v_Type ReusePrototypeFullpath", function () {
            expect( aReusePrototypeFullpath._v_Type).toBe( "ReusePrototypeFullpath");
        });

        it("Has title CommonSvce_DefaultName", function () {
            expect( aReusePrototypeFullpath._v_Title).toBe( aReusePrototypeFullpath_title);
        });

    });



});

