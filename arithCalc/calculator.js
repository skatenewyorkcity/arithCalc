function vl(value) {
    document.getElementById("screen").value += value;
}
function reset(value) {
    document.getElementById("screen").value = "";
}
function solve(value) {
    var solution = 0;
    solution = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(solution);
}