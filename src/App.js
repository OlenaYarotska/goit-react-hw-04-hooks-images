import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Spinner from "./Components/Spinner/Spinner";
import Modal from "./Components/Modal/Modal";
import { fetchImages } from "./services/api";
import Button from "./Components/Button/Button";

class App extends Component {
  state = {
    search: "",
    loading: false,
    showModal: false,
    largeImageURL: "",
    error: null,
    page: 1,
    images: [],
    gallery: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.onClickButton();
    }
  }
  onClickButton = () => {
    if (!this.state.search) return;

    this.setState({ loading: true });
    const { page, search } = this.state;
    fetchImages({ page, search })
      .then(({ hits }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          gallery: hits.length,
          page: prevState.page + 1,
        }));

        if (this.state.gallery === 0) {
          toast.error("Nothing is found");
        }

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  openModal = (largeImageURL) => {
    this.setState({ bigPicture: largeImageURL, showModal: true });
  };
  closeModal = () => {
    this.setState({ bigPicture: "", showModal: false });
  };

  handleSubmitForm = (inputValue) => {
    this.setState({
      images: [],
      error: null,
      search: inputValue,
      page: 1,
    });
  };

  render() {
    const { loading, showModal, bigPicture, images, gallery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />

        <ImageGallery images={images} onClickImg={this.openModal} />
        {gallery !== 0 && !loading && (
          <div className="Btn-wrapper">
            <Button onClickBtn={this.onClickButton} />
          </div>
        )}

        {loading && <Spinner />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={bigPicture} alt="" />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}
export default App;
