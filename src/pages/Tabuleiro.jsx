import LinhaTabuleiro from "@/components/LinhaTabuleiro";
export default function primeiraPage() {
    let array = []
    for (let index = 1; index <= 8; index++) {
        
        array.push(<LinhaTabuleiro linha = {index}></LinhaTabuleiro>)
        
    }
    return array;
}