module.exports = function check(str, bracketsConfig) {
    let controlArr = [];
    for(let char of str) {
        let checkArr;
        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < bracketsConfig[i].length; j++) {
                if (bracketsConfig[i][j] == char) {
                    checkArr = [i, j];
                }
            }
        }
        if(checkArr[1] == 0){
            controlArr.push(checkArr);
        }else if(controlArr.length != 0 && controlArr[controlArr.length - 1][0] == checkArr[0]){
            controlArr.pop();
        }
        else return false;
    }
    return (controlArr.length != 0) ? false : true;
}
/*const config1 = [['(', ')']];
function check (str, bracketsConfig){
    let controlArr = [];
    for(let char of str) {
        let checkArr;
        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < bracketsConfig[i].length; j++) {
                if (bracketsConfig[i][j] == char) {
                    checkArr = [i, j];
                }
            }
        }
        if(checkArr[1] == 0){
            controlArr.push(checkArr);
        }else if(controlArr.length != 0 && controlArr[controlArr.length - 1][0] == checkArr[0]){
            controlArr.pop();
        }
        else return false;
    }
    return (controlArr.length != 0) ? false : true;
   // alert('!')

}
check('())(', config1);*/
