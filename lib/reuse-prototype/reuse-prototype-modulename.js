'use strict';

/*
 reuse-prototype-modulename.js
 
 Created 201602011649
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


(function () {

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider) {

        var ModuleName     = "reuse-prototype-modulename";
        var ModulePackages = "reuse-prototype";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);





        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.SAMPLEVARINITVALUE = 12345;
        };




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };

        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants(  ModuleConstants);











        var aReusePrototypeModulename_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Prototype_ReusePrototypeModulename = aPrototype;

            aPrototype._v_Module = null;

            aPrototype._v_Type = "ReusePrototypeModulename";


            aPrototype._v_SampleVar     = null;


            
            


            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ReusePrototypeModulename( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_ReusePrototypeModulename = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_SampleVar     = this.SAMPLEVARINITVALUE;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ReusePrototypeModulename", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_ReusePrototypeModulenameResult){}/* CQT */
            };
            if( _pInit_ReusePrototypeModulename){}/* CQT */
            aPrototype._pInit_ReusePrototypeModulename = _pInit_ReusePrototypeModulename;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ReusePrototypeModulename( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ReusePrototypeModulename = function( theReleaseParms, theReleaseDone) {

                this._v_SampleVar     = undefined;
                this._v_BufferSize     = undefined;

                this._v_Buffers        = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ReusePrototypeModulename){}/* CQT */
            aPrototype._pRelease_ReusePrototypeModulename = _pRelease_ReusePrototypeModulename;











            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ReusePrototypeModulename( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ReusePrototypeModulename = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( theWhatToClean && ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) < 0)) {

                    if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                        this._v_SampleVar     = undefined;
                        this._v_BufferSize     = undefined;

                        this._v_Buffers        = undefined;
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ReusePrototypeModulename){}/* CQT */
            aPrototype.pCleanUpTest_ReusePrototypeModulename = pCleanUpTest_ReusePrototypeModulename;














            var pS_retrieveReusePrototypeModulenameParms = function( theCallback) {

                var aMethodName = "pS_retrieveReusePrototypeModulenameParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = this.PARMS_ALLOC.slice();

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aReusePrototypeModulenameNumBuffersResolution = someResolutionsByName[ this.PARM_ALLOC_NUMBUFFERS];
                if( aReusePrototypeModulenameNumBuffersResolution && aReusePrototypeModulenameNumBuffersResolution._v_Success) {
                    this._v_SampleVar = aReusePrototypeModulenameNumBuffersResolution._v_ParmValue;
                }


                var aReusePrototypeModulenameBufferSizeResolution = someResolutionsByName[ this.PARM_ALLOC_NUMBUFFERS];
                if( aReusePrototypeModulenameBufferSizeResolution && aReusePrototypeModulenameBufferSizeResolution._v_Success) {
                    this._v_BufferSize = aReusePrototypeModulenameBufferSizeResolution._v_ParmValue;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrieveReusePrototypeModulenameParms){}/* CQT */
            aPrototype.pS_retrieveReusePrototypeModulenameParms = pS_retrieveReusePrototypeModulenameParms;










            var pS_reusePrototypeModulename = function( theCallback) {

                var aMethodName = "pS_reusePrototypeModulename";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                theCallback();
            };
            if( pS_reusePrototypeModulename){}/* CQT */
            aPrototype.pS_reusePrototypeModulename = pS_reusePrototypeModulename;















            var pF_ReusePrototypeModulename = function( theCallback) {
                var aMethodName = "pF_ReusePrototypeModulename";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_ReusePrototypeModulename){}/* CQT */
            aPrototype.pF_ReusePrototypeModulename = pF_ReusePrototypeModulename;







            var fOwnTestMethodToRun = function() {
                return this.pSS_ReusePrototypeModulename.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_ReusePrototypeModulename = function( theCallback) {
                var aMethodName = "pSS_ReusePrototypeModulename";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_retrieveReusePrototypeModulenameParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_reusePrototypeModulename.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_ReusePrototypeModulename){}/* CQT */
            aPrototype.pSS_ReusePrototypeModulename = pSS_ReusePrototypeModulename;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var ReusePrototypeModulename_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            
            this._v_SampleVar     = null;
            this._v_BufferSize     = null;

            this._v_Buffers        = null;

            this._pInit_ReusePrototypeModulename( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        ReusePrototypeModulename_Constructor.prototype = aReusePrototypeModulename_Prototype;





        var ReusePrototypeModulename_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aReusePrototypeModulename_Prototype;
            this._v_Type = null;

            this._v_SampleVar     = null;
            this._v_BufferSize     = null;

            this._v_Buffers        = null;
        };
        ReusePrototypeModulename_SuperPrototypeConstructor.prototype = aReusePrototypeModulename_Prototype;



        var aModule = {
            "ReusePrototypeModulename_Prototype": aReusePrototypeModulename_Prototype,
            "ReusePrototypeModulename_Constructor": ReusePrototypeModulename_Constructor,
            "ReusePrototypeModulename_SuperPrototypeConstructor": ReusePrototypeModulename_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aReusePrototypeModulename_Prototype._v_Module = aModule;


        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_asyncshell = require('asyncshell');

            var aM_runsubs_test = aM_asyncshell.fCmp( "common-test/runsubs-test");
            var aM_overrider    = aM_asyncshell.fCmp( "common-test/overrider");

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell"
        ], function (
                theM_asyncshell
            ) {

            var aM_runsubs_test = theM_asyncshell.lib[ "common-test"][ "runsubs-test"];
            var aM_overrider    = theM_asyncshell.lib[ "common-test"][ "overrider"];

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider
            );
        });
    }


}());


