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
    let result = eval(text)
    document.getElementById('output').value = result
}

function clearText(){
    document.getElementById('output').value=""
}