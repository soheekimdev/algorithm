let popCount = 0;

function getItemAtIndex(array, index) {
    const findPlace = array[index - 1];
    if(findPlace) {
        return findPlace;
    } else {
        return 0;
    }
}

function addDollToBasket(doll, basket) {
    const resultBasket = basket.slice();
    const lastDoll = resultBasket.at(-1);
    if(!doll) return;
    if(doll === lastDoll) {
        resultBasket.pop();
        popCount += 2;
    } else {
        resultBasket.push(doll);
    }
    return resultBasket;
}

function solution(board, moves) {
    const copiedBoard = board.slice();
    let dollBasket = [];
    for(const move of moves) {
        for(let i = 0; i < copiedBoard.length; i++) {
            const doll = getItemAtIndex(copiedBoard[i], move);
            if(!!doll) {
                copiedBoard[i][move - 1] = 0;
                dollBasket = addDollToBasket(doll, dollBasket);
                break;
            }
        }
    }
    
    return popCount;
}