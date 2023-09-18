import Quadrado from "@/components/Quadrado"

export default function LinhaTabuleiro(props){
    let array = []
    let peca = "";
    let cor = "";
    for (let index = 1; index <= 8; index++) {
        if(index == 1){
            if(props.linha % 2 != 0){
                cor = "QdBranco"
            }
            else{              
                cor = "QdPreto"
            }
        }

        if(props.linha <= 3){
            peca = "vermelho"
        }
        if(props.linha > 5){
            peca = "cinza"
        }
        
        array.push(<Quadrado peca = {peca} classe = {cor}></Quadrado>)

        if(cor == "QdBranco"){
            cor = "QdPreto"
        }
        else{
            cor = "QdBranco"
        }
        
    }
    array.push(<Quadrado classe = {"bloquear"}></Quadrado>)
    return array;
}