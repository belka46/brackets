module.exports = function check(str, bracketsConfig) {
    let controlArr = [];
    for(let char of str) {
        let checkArr;
        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < bracketsConfig[i].length; j++) {
                if (bracketsConfig[i][j] == char){
                    if(bracketsConfig[i][j + 1] == char) {
                        checkArr = sameBreackets(controlArr, i, j);
                        break;
                    }else {
                        checkArr = [i, j];
                        break;
                    }
                }
            }
        }

        if (checkArr[1] == 0) {
            controlArr.push(checkArr);
        } else if (controlArr.length != 0 && controlArr[controlArr.length - 1][0] == checkArr[0]) {
            controlArr.pop();
        }
        else return false;
    }
    let checkresult = (controlArr.length != 0) ? false : true;
    return checkresult;
}

function sameBreackets(arr, i, j){
    let checkArr;
    if (arr.length == 0) {
        checkArr = [i, j];
    } else if (arr[arr.length - 1][0] != i) {
        checkArr = [i, j];
    } else {
        checkArr = [i, j + 1];
    }
    return checkArr;
}
