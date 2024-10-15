let textfield = document.getElementById("textfield")

function display(input){
    textfield.value +=input
}

function clearAll(){
    textfield.value = ""
}

function calcPercent(){
    textfield.value /= 100
}

function calcSquare(){
    textfield.value**=2
}

function calcSquareRoot(){
    textfield.value = Math.sqrt(textfield.value)
}

function del(){
    if(textfield.value.length > 0){
        textfield.value = textfield.value.slice(0 , -1)
    }
}

function calculate(){
    try{
            let modifiedExpression = textfield.value.replace(/\((\d+)\)/,"*$1")
            textfield.value = eval(modifiedExpression)
        
    }
    catch{
        textfield.value = "Error"
    }
}
