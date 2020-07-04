export function debounce(fn, dealy) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, dealy)
    }
}

import moment from 'moment'

export function dateFormat(time,fm) {
    return moment(time).format(fm)
}