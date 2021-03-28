var itemsList = document.querySelectorAll('.calc__items button');
var calcInput = document.querySelector('#calc-input');

itemsList.forEach(function(item) {
  item.onclick = function(e){
      if (e.target.value.toLowerCase() === "c"){
          calcInput.value = "";
      } else if (e.target.value.toLowerCase() === "="){
       
        calcInput.value = eval(calcInput.value);
      }
      else { 
          calcInput.value += item.value;
        }
}
})