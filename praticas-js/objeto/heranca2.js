// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { _proto_: avo, attr2: 'B'}
const filho = { _proto_: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)