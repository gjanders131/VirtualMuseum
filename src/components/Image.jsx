import styled from "styled-components";

const Image = ({ title, name, src, date }) => {
  return (
    <ImageTile>
      <img src={src} alt={title} />
      <div className="title">{title}</div>
    </ImageTile>
  );
};

const ImageTile = styled.div`
  text-align: center;
  width: 300px;
  height: 500px;
  img {
    width: 300px;
    object-fit: cover;
    display: inline-block;
  }
`;

export default Image;
