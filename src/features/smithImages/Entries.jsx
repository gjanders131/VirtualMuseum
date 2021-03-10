import { useSelector } from "react-redux";
import { selectEntries } from "./entriesSlice";
import Image from "../../components/Image";
import styled from "styled-components";
import ChangePage from "../../components/ChangePage";

const Entries = () => {
  const entries = useSelector(selectEntries);

  return (
    <div>
      <div className="loading">{entries.loading ? "Loading" : ""}</div>
      <ImageContainer>
        <ChangePage />
        {entries.entries.length === 0
          ? "Test"
          : entries.entries.response.rows.map((entry) => {
              let source = "";
              if (
                entry.content &&
                entry.content.descriptiveNonRepeating &&
                entry.content.descriptiveNonRepeating.online_media &&
                entry.content.descriptiveNonRepeating.online_media.media &&
                entry.content.descriptiveNonRepeating.online_media.media[0]
                  .thumbnail
              ) {
                source =
                  entry.content.descriptiveNonRepeating.online_media.media[0]
                    .thumbnail;
              } else {
                return false;
              }
              return (
                <Image title={entry.title} key={entry.hash} src={source} />
              );
            })}
      </ImageContainer>
    </div>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Entries;
