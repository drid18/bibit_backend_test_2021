async function getanagram(params) {
    try {
        var modparams = params
        var sortedchar = []
        var groupdata = []
        var usedindex = []
        for (let index = 0; index < params.length; index++) {
            const element = params[index]
            sortedchar.push(element.split('').sort().join(''))
        }

        for (let index1 = 0; index1 < sortedchar.length; index1++) {
            const element1 = sortedchar[index1]
            var fill = []
            for (let index2 = 0; index2 < sortedchar.length; index2++) {
                if (!usedindex.includes(index2)) {
                    const element2 = sortedchar[index2]
                    if (element1 === element2) {
                        fill.push(modparams[index2])
                        usedindex.push(index2)
                    }
                }
            }
            if (fill.length > 0) groupdata.push(fill)
        }
        return (groupdata.sort(function (a, b) { return b.length - a.length }))
    } catch (error) {
        return 'somethings went wrong'
    }

}

console.log(getanagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));

