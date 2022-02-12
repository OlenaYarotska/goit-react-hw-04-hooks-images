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
          return setError(toast.error("No images were found for $(search}!"));
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

  //   setLoading(true);
  //  const abc = await fetchImages(page, search);
  // fetchImages(page, search)
  //   .then((hits) => {

  //     if (images.length === 0) {
  //       return toast.error('No images found');
  //       setGallery(null);
  //     }
  //     setImages(prevState =>
  //       [...prevState, ...hits],
  //       //  page + 1,
  //       );
  //     })
  //   }

  //     .catch(error => console.log(error))
  //     .finally(() => {
  //       setLoading(false);
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     });
  // };

  function handleBtn() {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  }

  // const openModal = (image) => {
  //   setLargeImageUrl(image);
  //   setShowModal(true);
  // }
  const openModal = (evt) => {
    setLargeImageUrl(evt.target.dataset.source);
    closeModal();
  };

  const closeModal = () => {
    //  setLargeImageUrl('');
    //  setShowModal(true);
    setShowModal(!showModal);
  };
  const handleSubmitForm = (value) => {
    setImages([]);
    setError(null);
    setSearch(value);
    setPage(1);
    setLoading(true);
  };

  // const handleSubmitForm = inputValue => {
  //   setImages([]);
  //   // setError(null);
  //   setSearch(inputValue);
  //   setPage(1);
  // };
  return (
    <>
      <Searchbar onHandleSubmit={handleSubmitForm} />

      {images.length > 0 && !error && (
        <ImageGallery images={images} onOpenModal={openModal} />
      )}

      {loading && <Spinner />}

      {!loading && images.length >= 12 && !error && (
        <div className="Btn-wrapper">
          <Button onClickBtn={handleBtn} />
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
