import { render } from "@testing-library/react";
import './App.css'

function Info(props) {
    return(
        <div>
            <h1 className="header-text">Jogo do Dia</h1>
            <p>{props.info.team1} x {props.info.team2}</p>
            <p>{props.info.tournament}</p>
            <p>{props.info.stadium}</p>
            <p>{props.info.date}</p>
        </div>
    )
}

export default Info;