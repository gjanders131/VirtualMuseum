import React from "react";
import styled from "styled-components";
import Image from "./Image";

export default class Archive extends React.Component {
  state = {
    loading: true,
    images: null,
  };

  handleCheckThumbnail = (data) => {
    const image = data.response.rows.filter((obj) => {
      if (
        obj.content &&
        obj.content.descriptiveNonRepeating &&
        obj.content.descriptiveNonRepeating.online_media &&
        obj.content.descriptiveNonRepeating.online_media.media &&
        obj.content.descriptiveNonRepeating.online_media.media[0].thumbnail
      ) {
        return obj;
      }
      return false;
    });
    return image;
  };

  handleAddEntries = async (toCheck, start, rows, cat, query, url, key) => {
    let updatedData = [];
    if (toCheck < 10) {
      const missing = rows - toCheck.length;
      start += rows;
      rows = missing;
      let updateCategorySearch = `category/${cat}/search?q=${query}&start=${start}&rows=${rows}&${key}`;
      let updateCategorySearchURL = `${url}${updateCategorySearch}`;
      const updateResponse = await fetch(updateCategorySearchURL);
      updatedData = await updateResponse.json();
    }
    console.log(updatedData);
    return updatedData;
  };

  async componentDidMount() {
    const url = `https://api.si.edu/openaccess/api/v1.0/`;
    const query = "painting";
    const cat = "art_design";
    let start = 0;
    let rows = 10;
    const key = `api_key=${process.env.REACT_APP_API_KEY}`;
    let categorySearch = `category/${cat}/search?q=${query}&start=${start}&rows=${rows}&${key}`;
    let categorySearchURL = `${url}${categorySearch}`;

    const response = await fetch(categorySearchURL);
    const data = await response.json();
    /* console.log(data.response); */

    let hasImage = this.handleCheckThumbnail(data);
    let newEntries = await this.handleAddEntries();
    /*     console.log(newEntries);
     */
    /*     newEntries.forEach((entry) => {
      hasImage.push(entry);
    }); */

    this.setState({ loading: false, /* images: hasImage */ });
  }
  render() {
    return (
      <>
        <div>Images go here</div>
        <div>
          {this.state.loading || !this.state.images ? (
            <div>Loading...</div>
          ) : (
            <ImageContainer>
              {this.state.images.map((img) => {
                return (
                  <Image
                    title={img.title}
                    key={img.id}
                    src={
                      img.content.descriptiveNonRepeating.online_media.media[0]
                        .thumbnail
                    }
                  />
                );
              })}
            </ImageContainer>
          )}
        </div>
      </>
    );
  }
}

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
