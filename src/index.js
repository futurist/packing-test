
export function getResult(...args) {
    import('./mylib_esm.js').then(m=>{
        console.log('mylib_esm', m)
    })
    import('./mylib_cjs.js').then(m=>{
        console.log('mylib_cjs', m)
    })
}
getResult()
