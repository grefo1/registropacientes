type Props = {
    onClick?:() => void;
    text: string;
};

function BotonAgregarPaciente({onClick, text} : Props){
    return(<button onClick={onClick}>{text}</button>);
}

export default BotonAgregarPaciente;