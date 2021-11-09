function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
                } else { return ''; }
            } else { return ''; }
        } else { return ''; }
    } else { return ''; }
}

function findFirstStringInBracketIf(params) {
    var start = params.indexOf("(")
    var end = params.indexOf(")")
    if (start >= 0 && end > start) {
        return params.substring(start, end).substring(1)
    } else if (start >= 0 && end >= 0) {
        params = params.substring(end).substring(1)
        return params
            .substring(params.indexOf("("), params.indexOf(")"))
            .substring(1)
    } else return ''
}

var text = 'aku)(dia(mereka)(kamu)'
console.log('findFirstStringInBracket       : ', findFirstStringInBracket(text));
console.log('findFirstStringInBracketLambda : ', findFirstStringInBracketIf(text));
