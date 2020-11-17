import React, { useRef, useState } from "react";
import styles from "../pages/styles/create_test.module.scss";
import stylish from "./styles/PhotoManager.module.scss";
import uploadIcon from "../GAssets/upload_data.svg";
import Carousel from "react-multi-carousel";
import { responsive } from "./constants";
import Axios from "axios";
import { IQnA } from "../@types/test";

const PhotoManager = (props: {
  displayed: boolean;
  togglePhotoManager: (toggle: boolean) => void;
  currentCard: React.MutableRefObject<null> | undefined;
  setCurrentCard: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<null> | undefined>
  >;
  pageToRender: IQnA[];
  saveChanges: (page: any) => void;
}) => {
  let tmpPage = props.pageToRender;
  async function readUploadedIMG(inputFile: Blob) {
    const tmpFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      tmpFileReader.onerror = () => {
        tmpFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      tmpFileReader.onload = () => {
        resolve(tmpFileReader.result);
      };
      tmpFileReader.readAsDataURL(inputFile);
    });
  }

  const [upIMGs, setUpIMGs] = useState<Array<any>>([]);

  const [recievedIMGLocations, setRecievedIMGLocation] = useState<
    Array<string>
  >([]);

  async function handleFileInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let tmp = [];
    if (fileInput.current !== null && fileInput.current.files !== null) {
      for (
        let fileIndex = 0;
        fileIndex < fileInput.current.files?.length;
        fileIndex++
      ) {
        try {
          const fileContents = await readUploadedIMG(
            fileInput.current.files[fileIndex]
          );
          tmp.push(fileContents);
          // setUploadedImg(fileContents);
        } catch (error) {
          alert(error);
        }
      }
      setUpIMGs(tmp);
    }
    Axios.post("http://localhost:4000/tests/testIMG", upIMGs)
      .then(function (response) {
        console.log(response.data);
        setRecievedIMGLocation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const fileInput = useRef<HTMLInputElement>(null);

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className={stylish.carRightArrow} onClick={() => onClick()}>
        {Arrow()}
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button onClick={() => onClick()} className={stylish.carLeftArrow}>
        {Arrow()}
      </button>
    );
  };
  const handleIMGClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (props.currentCard?.current !== null) {
      console.log("hello from", event.currentTarget.id);
      console.log(props.currentCard?.current);
      props.currentCard!.current?.src;
      let tmp = props.currentCard;
      tmp.current.src = event.currentTarget.src;
      console.log(tmp?.current.id);
      const cardData = tmp?.current.id.split("_");
      console.log(cardData);
      if (tmpPage) {
        tmpPage[cardData[1]][cardData[0]] = String(tmp?.current.src);
      }
      console.log(tmpPage);
      props.setCurrentCard(tmp);
      props.saveChanges(tmpPage);
    }
  };

  /**
   * Renders images in groups of two
   * @param recievedIMGLocations An array of strings representing the location of images on the server
   */
  function renderSelectedImages(recievedIMGLocations: string[]): any {
    let renderedImagesArray = [];
    console.log(renderedImagesArray.length);
    if (recievedIMGLocations.length !== 0) {
      for (let i = 0; i < recievedIMGLocations.length; i++) {
        renderedImagesArray.push(
          <div className={stylish.imgContainer} key={i}>
            <img
              key={i}
              id={`img_${i}`}
              className={stylish.tmpIMG}
              src={recievedIMGLocations[i]}
              alt="Here be the image"
              onClick={handleIMGClick}
            />
            {/* Conditionlay render the second image */}
            {recievedIMGLocations[i + 1] != undefined ? (
              <img
                key={i + 1}
                id={`img_${i + 1}`}
                src={recievedIMGLocations[i + 1]}
                alt="here be the second one"
                className={stylish.tmpIMG}
                onClick={handleIMGClick}
              />
            ) : undefined}
          </div>
        );
        i++;
        console.log(renderedImagesArray[i], "Jeloo there");
      }
      console.log(renderedImagesArray);
      return renderedImagesArray.map((el) => el);
    }
    // return recievedIMGLocations.map((image, index) => (
    //   <div
    //     className={stylish.imgContainer}
    //     id={`imageDiv_${index}`}
    //     key={index}
    //   >
    //     <img
    //       key={index}
    //       className={stylish.tmpIMG}
    //       src={recievedIMGLocations[index]}
    //       alt="Oops"
    //     />
    //   </div>
    // ));
  }

  return (
    <div
      className={`${stylish.PhotosContainer} ${
        !props.displayed ? undefined : stylish.Hidden
      }`}
    >
      <span onClick={(e) => props.togglePhotoManager(true)}>❌</span>
      <div className={stylish.Contents}>
        <div className={stylish.headerIconContainer}>
          <h3>Uploaded photos</h3>
          <label htmlFor="photoUpload">
            <input type="file" name="photoUpload" />
            <img
              src={uploadIcon}
              alt="Upload"
              className={stylish.uploadIcon}
              onClick={(e) => console.log(e)}
            />
          </label>
        </div>
        <div className={stylish.IMGPreview}>
          <form onSubmit={handleFileInput}>
            <label>Upload image</label>
            <input
              name="testio"
              type="file"
              multiple
              accept="image/*"
              ref={fileInput}
            />
            <input type="submit" value="Submit" />
            <p>Placeholder for image upload</p>
            <Carousel
              // ssr={true}
              containerClass={stylish.Carousel}
              itemClass={stylish.Item}
              responsive={responsive}
              showDots
              sliderClass={stylish.Slider}
              // renderDotsOutside={true}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {recievedIMGLocations.length !== 0 ? (
                renderSelectedImages(recievedIMGLocations)
              ) : (
                <></>
              )}
            </Carousel>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotoManager;
const Arrow = () => (
  <svg
    width="15"
    height="26"
    viewBox="0 0 15 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 24L13 13L2 2"
      stroke="#2F4858"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
