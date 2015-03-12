

var button = document.getElementById("eval-button");

button.addEventListener("click", function(){
    var expression  = document.getElementById("expression").value;
    var resultDisplay = document.getElementById("result-row");
    var result = eval(expression);
    resultDisplay.innerText = result;


});

