function clearscreen() {
    document.getElementById("result").value = "";
}
function setscreenvalue(value) {
    document.getElementById("result").value += value;
    function caliculateresult() {
        const resultelement = document.getElementById("result");
        const expression = resultelement.value.trim();
        if(expression === '') {
            resultelement.value = 'enter an expression';
        }
        try {
            resultelement.value = eval(expression);
        } catch (e) {
            resultelement.value = 'invalid expression';
        }
    }
}