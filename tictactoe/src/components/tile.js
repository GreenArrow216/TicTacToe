
export default function Tile(props) {
    const {onTileClick, clickedTiles, tileNumber} = props;
    return <div className={"tile"} onClick={() => onTileClick(tileNumber)}>
        <h1>{clickedTiles[tileNumber] ? clickedTiles[tileNumber] : ""}</h1>
    </div>
}   