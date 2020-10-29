const LEAL = 'lealdade';
const CORAGEM = 'corajosa';
const AMBICIOSA = 'ambiciosa';
const CALCULISTA = 'calculista';
const ORGULHO = 'orgulhosa';
const ESTUDIOSA = 'estudiosa';
const INTELECTUAL = 'intelectual';
const GENTIL = 'gentil';
const TOLERENTE = 'tolerente';
const PACIENCIA = 'paciente';


function harryPoter (nome, qualidades){
    switch(qualidades.toLowerCase()){

    case "lealdade":

    case "corajosa":

    return nome + " você é da casa Grifinória" ;

    case "ambiciosa":

    case "calculista":

    case "orgulhosa":
    return nome + " você é da casa Sonserina";

    case "estudiosa":

    case "intelectual":    
    return nome + " você é da casa Corvinal";

    case "gentil":

    case "tolerante":
        
    case "paciente":
    return nome + " você é da casa Lufa-Lufa";

    default:
    console.log("Não existe casa para essa qualidade.");
    break;
    }
    }

    console.log(harryPoter("Vitoria", "gentil"));