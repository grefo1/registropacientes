
type Props = {
    onClick?:() => void;
    text: string;
};

function BotonAgregarPaciente({onClick, text} : Props){
    return(
    <button 
        onClick={onClick} 
        className="px-4 py-2 bg-neutral-950 text-white rounded hover:bg-neutral-700">
            {text}
        </button>)
    
}

export default BotonAgregarPaciente;