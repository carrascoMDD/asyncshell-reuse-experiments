/*
 jasminespec-03-reuse-prototype-modulename.js

 Created 201602011653
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


/// <reference path="lib/reuse-prototype/reuse-prototype-modulename.js"/>
"use strict";

var aReusePrototypeModulename_title = "ReusePrototypeModulename.title";


var aSetupError         = null;
var aReusePrototypeModulename = null;


var pSetupInstance_ReusePrototypeModulename = function() {

    var aM_asyncshell = require('asyncshell');

    var aModule_Identifier = aM_asyncshell.fCmp( "common-test/identifier-test");
    var aModule_Recorder   = aM_asyncshell.fCmp( "common-test/recorder-test");



    var anIdentifierId = "jasminespec-02-reuse-prototype-modulenameanIdentifierid";
    var anIdentifier = new aModule_Identifier.IdentifierTest_Constructor(
        {},
        anIdentifierId
    );

    var aRecorderTitle = "jasminespec-03-reuse-prototype-modulename.aRecorderTitle";

    var aRecorder = new aModule_Recorder.RecorderTest_Constructor(
        aRecorderTitle,
        {},
        anIdentifier
    );


    var aModule_SpecParserConfig   = aM_asyncshell.fCmp( "common-test/configs/specparser/specparser-config");

    var aReusePrototypeModulename_exampletest_source = require( "../asyncshelltests/reuse-prototype-modulename-exampletest.json");

    var aSpecParserConfig = new aModule_SpecParserConfig.SpecParserConfig_Constructor(
        anIdentifier,
        aReusePrototypeModulename_exampletest_source, /* theConfigSpec */
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



    var aModule_ReusePrototypeModulename = require( "../lib/reuse-prototype/reuse-prototype-modulename");

    aReusePrototypeModulename = new aModule_ReusePrototypeModulename.ReusePrototypeModulename_Constructor(
        aReusePrototypeModulename_title,
        aConfiguration,
        anIdentifier,
        aRecorder
    );

};



pSetupInstance_ReusePrototypeModulename();



describe("reuse-prototype-modulename", function() {


    describe("reuse-prototype-modulename setup", function() {

        it("no aSetupError", function() {
            expect( aSetupError).toBeNull();
        });

        it("aReusePrototypeModulename not null", function() {
            expect( aReusePrototypeModulename).not.toBeNull();
        });
    });






    describe("reuse-prototype-modulename module", function() {


        it("Has module defined", function () {
            expect( aReusePrototypeModulename._v_Module).not.toBeUndefined();
        });

        it("Has module not null", function () {
            expect( aReusePrototypeModulename._v_Module).not.toBeNull( null);
        });

        it("Has module ModuleName common_svce_type", function () {
            expect( aReusePrototypeModulename._v_Module.ModuleName).toBe( "reuse-prototype-modulename");
        });

        it("Has module ModulePackages common", function () {
            expect( aReusePrototypeModulename._v_Module.ModulePackages).toBe( "reuse-prototype");
        });

        it("Has module ModuleFullName common.commonctrl", function () {
            expect( aReusePrototypeModulename._v_Module.ModuleFullName).toBe( "reuse-prototype/reuse-prototype-modulename");
        });

        it("Has module CommonSvce_Prototype defined", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Prototype).not.toBeUndefined();
        });

        it("Has module CommonSvce_Prototype not null", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Prototype).not.toBeNull( null);
        });

        it("Has module CommonSvce_Constructor defined", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Constructor).not.toBeUndefined();
        });

        it("Has module CommonSvce_Constructor not null", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Constructor).not.toBeNull( null);
        });

        it("Has module CommonSvce_SuperPrototypeConstructor defined", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_SuperPrototypeConstructor).not.toBeUndefined();
        });

        it("Has module CommonSvce_SuperPrototypeConstructor not null", function () {
            expect( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_SuperPrototypeConstructor).not.toBeNull( null);
        });
    });






    describe("reuse-prototype-modulename prototype", function() {

        it("Has _v_Prototype defined", function () {
            expect( aReusePrototypeModulename._v_Prototype).not.toBeUndefined();
        });

        it("Has _v_Prototype EQ module ReusePrototypeModulename_Prototype", function () {
            expect( aReusePrototypeModulename._v_Prototype).toBe( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Prototype);
        });

        it("Has _v_Prototype_ReusePrototypeModulename defined", function () {
            expect( aReusePrototypeModulename._v_Prototype_ReusePrototypeModulename).not.toBeUndefined();
        });

        it("Has _v_Prototype_ReusePrototypeModulename EQ _v_Module.ReusePrototypeModulename_Prototype", function () {
            expect( aReusePrototypeModulename._v_Prototype_ReusePrototypeModulename).toBe( aReusePrototypeModulename._v_Module.ReusePrototypeModulename_Prototype);
        });

    });






    describe("reuse-prototype-modulename instance", function() {

        it("Has _v_Type ReusePrototypeModulename", function () {
            expect( aReusePrototypeModulename._v_Type).toBe( "ReusePrototypeModulename");
        });

        it("Has title CommonSvce_DefaultName", function () {
            expect( aReusePrototypeModulename._v_Title).toBe( aReusePrototypeModulename_title);
        });

    });



});

