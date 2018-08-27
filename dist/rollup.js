var myLib = (function (exports) {
    'use strict';

    function getResult(name, ...args) {
        import(
            /* webpackChunkName: "[request]" */
            /* webpackPrefetch: true */
            `./mylib_${name}`).then(m=>{
            console.log(name, m);
        });
    }
    getResult('cjs');

    exports.getResult = getResult;

    return exports;

}({}));
