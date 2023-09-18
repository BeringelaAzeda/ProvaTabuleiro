export default function Quadrado(props){
    return(
        <div className={props.classe}>
            {props.peca == null ? null : <div className={props.peca}></div>}
        </div>          
    )
}