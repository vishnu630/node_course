const low=require('lodash')

const items=[1,[2,[3,[4]]]]

const val= low.flattenDeep(items)
console.log(val)