import axios from "axios";
const KEY = "24368394-ccc0003f8191eae78e1f7d910";
const BaseUrl = "https://pixabay.com/api/";

async function fetchImages({ search, page }) {
  const response = await axios.get(
    `${BaseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  // const fetchedImages = await response;

  // return fetchedImages.data;
  return response.hits;
}
export default fetchImages;
