function disp(val){
    document.getElementById("txt").value+=val;
}
function solve(){
    let x = document.getElementById("txt").value
    let y = eval(x)
    document.getElementById("txt").value=y
}
function clr(){
    document.getElementById("txt").value=" ";
}