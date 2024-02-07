import { HEADINGS, TILES_MARGINS } from "../../utils/texts";
import { Tile, TileColumn, TilesContainer } from "./Tiles.styled";

const Tiles = ({ currentHeadingsIndex }) => {
  return (
    <TilesContainer>
      {TILES_MARGINS.map((margin, index) => {
        return (
          <TileColumn key={index} margin={margin}>
            <Tile
              src={`/${HEADINGS[currentHeadingsIndex].section}/${
                HEADINGS[currentHeadingsIndex].section
              }-${index * 2}.jpeg`}
            />
            <Tile
              src={`/${HEADINGS[currentHeadingsIndex].section}/${
                HEADINGS[currentHeadingsIndex].section
              }-${index * 2 + 1}.jpeg`}
            />
          </TileColumn>
        );
      })}
    </TilesContainer>
  );
};

export default Tiles;
