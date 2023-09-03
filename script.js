function btnClick(val) {
    document.getElementById('output').value+=val
}

function remove(){
    var text =document.getElementById('output').value
    text=text.slice(0,-1)
    document.getElementById('output').value = text
}

function calculate(){
    var text =document.getElementById('output').value
    try {
     let result = eval(text)
        document.getElementById('output').value = result 
    } catch (e) {
    if (e instanceof SyntaxError) {
        alert(e.message);
    }
}
   
}

function clearText(){
    document.getElementById('output').value=""
}