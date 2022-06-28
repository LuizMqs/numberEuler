function factorial (number) {
    let result = 1
    
    for (let i = number; i > 0; i--) {
        result = result * i
    } 
    document.getElementById("factorial").innerHTML = result
    return result
}

function euler () {
    const number = Number(document.getElementById("number").value)
    let result = 1
    for (let x = 1; x <= number; x++) {
        result += 1/factorial(x)
    }
    document.getElementById("result").innerHTML = result
}

document.getElementById("button").addEventListener("click", euler)
