import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import { fetchImages } from "./data/fetch";
import "./styles.css";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselData, setCarouselData] = useState({});

  useEffect(() => {
    fetchImages(Math.floor(Math.random() * 30)).then((data) => {
      setCarouselData(data);
    });
  }, []);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      {modalOpen && (
        <Modal onClose={handleClose} title="sample" size="80vh">
          <Carousel content={carouselData} />
        </Modal>
      )}
    </div>
  );
}
