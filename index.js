//Task one

function convertFahrToCelsius (deg) {
    const result = (deg - 32) * 5/9;
    const str = JSON.stringify(deg)

    if(deg == Number(deg) && typeof deg !== "boolean" && deg !== "" && typeof deg !== "object" && (!isNaN(deg))){
    console.log(Number(result.toFixed(4)))
    return Number(result.toFixed(4))
    }
    else if (Array.isArray(deg)){
    console.log(`${str} is not a valid number but a/an array`)
    return(`${str} is not a valid number but a/an array`)
    }
    else{
    console.log(` ${str} is not a valid number but a ${typeof deg}`)
    return(`${str} is not a valid number but a ${typeof deg}`)
    }
}

convertFahrToCelsius(0)
convertFahrToCelsius('chris')
