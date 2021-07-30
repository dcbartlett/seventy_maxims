# The Seventy Maxims of Maximally Effective Mercenaries

This module just provides the Seventy Maxims in a consumable format.

## Usage

```javascript

const { getMaxim } = require('@dcbartlett/seventy_maxims')
const randomMaxim = getMaxim()
console.log(randomMaxim)
const randomFullMaxim = getMaxim(true)
console.log(randomFullMaxim)
const definedMaxim = getMaxim(10)
console.log(definedMaxim)
const definedFullMaxim = getMaxim(10, true)
console.log(definedFullMaxim)

```