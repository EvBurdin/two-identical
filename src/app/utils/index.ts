export const getNewArray = (size) => copy(new Array(size).fill(null))

export const copy = (x) => JSON.parse(JSON.stringify(x))