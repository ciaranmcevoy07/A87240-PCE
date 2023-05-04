const fs =require("fs")

module.exports.readFile = async () =>{
    const Doente = []
    const Registo = []
    const filePath = "C:\\Users\\ciara\\Desktop\\A87240-PCE\\aula7\\";
    const filenames = ["doentes.csv", "registos_covid19.csv", "cod_postal.csv"];

    for(let name of filenames) {
        const fileRead = fs.readFileSync(filePath + name);
        let lines = fileRead.toString().split("\n");
        for(let line of lines) {
            let lineParams = line.split(";");
            if(lineParams[lineParams.length-1].includes("\r"))
                lineParams[lineParams.length-1] = lineParams[lineParams.length-1].slice(0,-1);
            if (name == "doentes.csv") {
                const new_doente = {
                    cod_postal: normalizaVazios(lineParams[0]),
                    data_nascimento:normalizaVazios(lineParams[1]),
                    genero:normalizaVazios(lineParams[2]),
                    id_paciente:normalizaVazios(lineParams[3]),
                    nome:normalizaVazios(lineParams[4]),
                }
                Doente.push(new_doente)
                console.log(new_doente)
            }
            if (name == "registos_covid19.csv") {
                const new_registo = {
                    numseq: normalizaVazios(lineParams[0]),
                    dataRegisto: normalizaVazios(lineParams[1]),
                    tempratura: normalizaTemp(lineParams[2]),
                    falta_ar: normalizaVazios(lineParams[3]),
                    dor_cabeca: normalizaVazios(lineParams[4]),
                    dor_muscular: normalizaVazios(lineParams[5]),
                    tosse: normalizaVazios(lineParams[6]),
                    diarreia: normalizaVazios(lineParams[7]),
                    olfato_paladar: normalizaVazios(lineParams[8]),
                    avaliacao_global: normalizaVazios(lineParams[9])
                }
                Registo.push(new_registo)
                console.log(new_registo)
            }
        }
    Doente.map(x=> {
        x.Registo = Registo.filter(y => y.numseq == x.id_paciente)
        return x;
    })

    function normalizaTemp(temp){
        return parseFloat(temp.split(" ")[0])
    }

    function normalizaVazios(valor) {
        return (valor ==='' || !valor) ? 0 : valor;
    }
    }
};
