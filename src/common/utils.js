export function debounce(fn, dealy) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, dealy)
    }
}