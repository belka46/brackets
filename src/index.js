module.exports = function check(str, bracketsConfig) {
    let config = bracketsConfig.toString();
    config = config.replace(/,/g,"" );
    let control = 0;
    for(let char of str){
        let index = config.indexOf(char);
        let test = index%2;
        if (index == -1){
            continue;
        }else if(test != 0){
            control -= 1;
        }else{
            control += 1;
        }
        if(control >= 0){
            continue;
        }else {
            return false;
        }
    }
    if(control != 0) return false;
    return true;
}
/*const config1 = [['(', ')']];
function check (str, bracketsConfig){
    let config = bracketsConfig.toString();
    config = config.replace(/,/g,"" );
    let control = 0;
    for(let char of str){
       let index = config.indexOf(char);
       let test = index%2;
       if (index == -1){
           continue;
       }else if(test != 0){
           control -= 1;
       }else{
           control += 1;
       }
       if(control >= 0){
           continue;
       }else {
           return false;
       }
    }
    if(control != 0) return false;
    return true;
    //alert(config);
}
check('())(', config1);*/
