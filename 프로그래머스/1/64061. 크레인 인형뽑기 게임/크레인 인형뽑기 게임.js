let popCount = 0;

function getItemAtIndex(array, index) {
  const findPlace = array[index - 1];
  if (findPlace) {
    return findPlace;
  } else {
    return 0;
  }
}

function addDollToBasket(doll, basket) {
  const resultBasket = basket.slice();
  const lastDoll = resultBasket.at(-1);
  if (!doll) return;
  if (doll === lastDoll) {
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
  for (const move of moves) {
    for (let i = 0; i < copiedBoard.length; i++) {
      const doll = getItemAtIndex(copiedBoard[i], move);
      if (!!doll) {
        copiedBoard[i][move - 1] = 0;
        dollBasket = addDollToBasket(doll, dollBasket);
        break;
      }
    }
  }

  return popCount;
}

// 테스트 함수
const test = (solution) => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const moves = [1, 5, 3, 5, 1, 2, 1, 4];
  const result = solution(board, moves);
  const expectedResult = 4;
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution);
