import { AnimatePresence, easeInOut } from "framer-motion";
import { HEADINGS, TILES_MARGINS } from "../../utils/texts";
import {
  AnimatedColumn,
  Tile,
  TileColumn,
  TilesContainer,
} from "./Tiles.styled";

const Tiles = ({ currentHeadingsIndex }) => {
  const transition = (index) => {
    return {
      duration: 1 + index / 10,
      ease: easeInOut,
    };
  };
  return (
    <TilesContainer>
      {TILES_MARGINS.map((margin, index) => {
        return (
          <div key={index}>
            {HEADINGS.map((heading, headingIndex) => {
              return (
                <AnimatePresence key={headingIndex}>
                  {currentHeadingsIndex === headingIndex && (
                    <AnimatedColumn
                      initial={{ y: 100, opacity: 0 }}
                      animate={{
                        y: 40,
                        opacity: 1,
                        transition: transition(index),
                      }}
                      exit={{
                        y: "-50%",
                        x: 0,
                        opacity: 0,
                        transition: transition(index),
                      }}
                      transition={transition(index)}
                    >
                      <TileColumn margin={margin}>
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
                    </AnimatedColumn>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        );
      })}
    </TilesContainer>
  );
};

export default Tiles;
