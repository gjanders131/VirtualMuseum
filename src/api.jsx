export const base_url = "https://api.si.edu/openaccess/api/v1.0/";
export const key = `api_key=${process.env.REACT_APP_API_KEY}`;

const query = "Painting";
const cat = "art_design";
const categorySearch = `category/${cat}/search/q=${query}&api_key=${process.env.REACT_APP_API_KEY}`;

export const categorySearchURL = () => `${base_url}${categorySearch}`;
