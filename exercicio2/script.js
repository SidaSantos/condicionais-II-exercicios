let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

console.log("teste 2")*/

switch(nacionalidade) {
    case "brasileira":
        console.log(nacionalidade)
        break
    case "argentina":
        console.log(nacionalidade)  
        break
    case "uruguaia":
        console.log(nacionalidade)
        break
    case "chilena":
        console.log(nacionalidade)
        break
    case "colombiana":
        console.log(nacionalidade)
        break
    default:
        console.log("nacionalidade não encontrada")


}
