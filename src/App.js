import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Spinner from "./Components/Spinner/Spinner";
import Modal from "./Components/Modal/Modal";
import fetchImages from "./services/api";
import Button from "./Components/Button/Button";

function App() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageUrl] = useState("");

  useEffect(() => {
    if (!search) return;
    const onClickButton = async () => {
      try {
        const gallery = await fetchImages(search, page);
        if (gallery.length === 0) {
          return setError(toast.error("No images were found!"));
        }
        setImages((prev) => [...prev, ...gallery]);
      } catch (error) {
        setError(toast.error("Something went wrong"));
      } finally {
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    };
    onClickButton();
  }, [page, search]);

  function handleBtn() {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  }

  const openModal = (largeImageURL) => {
    setShowModal(true);
    setLargeImageUrl(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageUrl("");
    setShowModal(!showModal);
  };
  const handleSubmitForm = (value) => {
    setImages([]);
    setError(null);
    setSearch(value);
    setPage(1);
    setLoading(true);
  };

  return (
    <>
      <Searchbar onHandleSubmit={handleSubmitForm} />

      {images.length > 0 && !error && (
        <ImageGallery images={images} onImgClick={openModal} />
      )}

      {loading && <Spinner />}

      {!loading && images.length >= 12 && !error && (
        <div className="Btn-wrapper">
          <Button handleBtn={handleBtn} />
        </div>
      )}

      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
      <ToastContainer />
    </>
  );
}
export default App;
