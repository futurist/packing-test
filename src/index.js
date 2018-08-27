
export function getResult(name, ...args) {
    import(
        /* webpackChunkName: "[request]" */
        /* webpackPreload: true */
        /* webpackPrefetch: true */
        `./mylib_${name}`).then(m=>{
        console.log(name, m)
    })
}
getResult('cjs')
