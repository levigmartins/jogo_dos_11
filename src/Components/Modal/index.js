import './Modal.css';

function Modal(props) {
    return(
        <div className='modal'>
            <h1 className="header-text">Jogo do Dia</h1>
            <p>{props.info.team1} {props.info.team1Result} x {props.info.team2Result} {props.info.team2}</p>
            <p>{props.info.tournament}</p>
            <p>{props.info.stadium}</p>
            <p>{props.info.date}</p>
        </div>
    )
}

export default Modal;