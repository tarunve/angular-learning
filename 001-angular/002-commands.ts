/**
 * 
 *  Angular CLI:
 *  ===========
 *  -   Install Angular CLI globally :
 *          npm install -g @angular/cli
 *  -   Once installed, we can use commands with 'ng'
 *  -   Ex : To run angular app :
 *              ng serve
 * 
 *  Commands:
 *  ========
 *  -   General syntax
 *          ng <command> <args> --<options>
 *  -   Create new angular application:
 *          ng new apm-new --prefix pm
 *  -   Generate 
 *      -   Component:      ng g c product/product-detail --flat
 *          --flat : doesn't create new folder.
 *      -   Route Guard :   ng g g product/product-detail
 *      -   Module:         ng g m product/product --flat -m app
 *          -m  : import the module in app module.
 *                          ng g m shared/shared --flat -m product/product.module 
 *      -   Directives :    ng g d <name>
 *      -   Interfaces :    ng g i <name>
 *      -   Pipes :         ng g p <name>
 *      -   Services:       ng g s <name>
 *  -   Run application:
 *              ng serve
 *      -   compiles the application
 *      -   generate application bundles
 *      -   starts a local web server
 *      -   serves the application from memory
 *      -   rebuilds on file changes.
 *  -   Testing the application:
 *      -   ng test
 *          ng e2e      // for end to end testing
 *  -   Deploy the application
 *          ng deploy
 *  -   version upgrade
 *          ng update
 */