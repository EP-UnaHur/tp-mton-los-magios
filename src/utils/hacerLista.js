const hacerLista = (data) => {
    return Array.isArray(data) ? data : [data];
}

module.exports = hacerLista