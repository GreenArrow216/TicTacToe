import { useEffect, useState} from 'react';
import Tile from "./tile";

import "./style.scss";
import { calculateWinner } from '../helper';

export default function TicTacToe() {
    const numberOfTiles = 9;
    const [nextIsX, changePlayer] = useState(true);
    const [clickedTiles, changeClickedTiles] = useState([]);

    useEffect(() => {
        let winner = calculateWinner(clickedTiles);
        if (winner) {
            changePlayer(true);
            changeClickedTiles([]);
            alert(`winner is ${winner}`)
        }
    }, [clickedTiles])

    const onTileClick = clickedTile => {
        changePlayer(!nextIsX);
        if(!clickedTiles[clickedTile]) {
            let newClickedTiles = [...clickedTiles];
            newClickedTiles[clickedTile] = nextIsX ? "X" :"O";
            changeClickedTiles(newClickedTiles);
        }
    } 

    return <div className={"tic-tac-toe-box"}>
        {[...Array(numberOfTiles)].map((data,index) =>
        <Tile key={index} tileNumber={index} clickedTiles={clickedTiles} onTileClick={onTileClick}/>
        )}
    </div>
}