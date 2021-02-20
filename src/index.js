module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
  var stack = [];
  var isOpen = false;
  for(var i = 0; i < arr.length; i++){
    if(isOpen){
      var close = bracketsConfig.find(b => b[1] == arr[i] && stack[stack.length - 1] == b[0]);
      if(close){
        stack.pop();
        continue;
      }
    }
    var open = bracketsConfig.find(b => b[0] == arr[i]);
    if(open){
      isOpen = true;
      stack.push(arr[i]);
    }else{
      var close = bracketsConfig.find(b => b[1] == arr[i] && stack[stack.length - 1] == b[0]);
      if(close){
        stack.pop();
      }else{
        return false;
      }
    }

  }
  if(stack.length == 0){
    return true;
  }else{
    return false;
  }
}
