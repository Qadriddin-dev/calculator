function insert(num) {
    document.querySelector('.output').value = document.querySelector('.output').value+num;
  }
  
  function equal() {
    let expresion = document.querySelector('.output').value;
  
    if(expresion) {
      document.querySelector('.output').value = eval(document.querySelector('.output').value);
    }
  }
  
  function deletes() {
    document.querySelector('.output').value="";
  }