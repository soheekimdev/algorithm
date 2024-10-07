function findMaxCountItem(obj, count) {    
    return Number(Object.keys(obj).find(key => obj[key] === count));
}

function solution(array) {
    let answer;
    
    // array의 각 item과 count 값을 itemCountMap에 담기
    const itemCountMap = {};
    array.forEach((item => {
        if(!itemCountMap[item]) {
            itemCountMap[item] = 1;
        } else {
            itemCountMap[item]++;
        }
    }));
    
    // maxCount 구하기
    let maxCount = 1;
    const counts = Object.values(itemCountMap);
    counts.forEach(count => {
        if(count > maxCount) {
            maxCount = count;
        }
    })
    
    // maxCount를 value로 갖는 keys 구하기
    const maxCountItems = Object.entries(itemCountMap).filter(([ , count]) => count === maxCount);
    if(maxCountItems.length > 1) {
        // maxCount를 value로 갖는 key가 2개 이상이라면 -1 반환
        answer = -1;
    } else {
        // maxCount를 value로 갖는 key값 반환
        answer = findMaxCountItem(itemCountMap, maxCount);   
    }
    
    return answer;
}
