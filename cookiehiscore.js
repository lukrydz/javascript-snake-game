let browserStorage = localStorage;

export function storeScore(playerName, score){
    let currentValue = browserStorage.getItem('scoreList')

    if (currentValue) {
        browserStorage.setItem('scoreList', currentValue + `${playerName}|${score};`)
    }
    else {
        browserStorage.setItem('scoreList', `${playerName}|${score};`)
    }
}

export function getScores(){
    let scoreList = browserStorage.getItem('scoreList')
    let scoreDict = {}
    let stringSplit = scoreList.split(';')
    for (let pair of stringSplit) {
        let name, score
        [name, score] = pair.split('|')
        
        scoreDict[name] = score
    }

    return scoreDict

}