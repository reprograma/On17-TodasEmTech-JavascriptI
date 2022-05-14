function maiorEmenor(minhaArray){
    let numeroMaiorInicial = 0;
    let numeroMenorInicial = 0;

    minhaArray.forEach(numeroCorrent => {


        if(numeroCorrent > numeroMaiorInicial){
            numeroMaiorInicial = numeroCorrent
        }



        if(numeroCorrent < numeroMenorInicial){
            numeroMenorInicial = numeroCorrent
        }


    });

    console.log(numeroMaiorInicial)
    console.log(numeroMenorInicial)


}



maiorEmenor([0, 23, 14, 36, 96, 87])