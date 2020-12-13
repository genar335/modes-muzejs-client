import React, { useEffect, useRef, useState } from "react";
import styles from "../pages/styles/create_test.module.scss";
import stylish from "./styles/PhotoManager.module.scss";
import uploadIcon from "../GAssets/upload_data.svg";
import Carousel from "react-multi-carousel";
import { responsive } from "./constants";
import Axios from "axios";
import { IQnA } from "../@types/test";

const PhotoManager = (props: {
  displayed: boolean;
  togglePhotoManager: (toggle: boolean, cardID: string) => void;
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

  /**
   * Loads the file from the clients computer into the browser and saves the array into the state.
   * @param event
   */
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
    sendTheDataToTheServer(upIMGs, setRecievedIMGLocation);
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

  /**
   * Sets the image for the card that has been clicked inside of the test. preview component, as well as saves the changese to state of the current page.
   * @param event Event for a mouse click.
   */
  const handleIMGClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (props.currentCard !== null || props.currentCard !== undefined) {
      //* console.log("hello from", event.currentTarget.id);
      console.log(props.currentCard?.current, "current card");

      let tmp = props.currentCard;
      tmp!.current!.src = event.currentTarget.src;
      //* console.log(tmp?.current.id);
      const cardData = tmp?.current.id.split("_");
      //* console.log(cardData);
      if (tmpPage) {
        tmpPage[cardData[1]][cardData[0]] = String(tmp?.current.src);
      }
      //* console.log(tmpPage);
      // props.setCurrentCard(tmp);
      //! Changing ID
      if (!isClicked) {
        event.currentTarget.id = props.currentCard?.current?.id;
        setIsClicked(true);
      }
      renderedImagesArray.forEach((imgDIV: JSX.Element) => {
        console.log(imgDIV.ref);
      });
      //!
      // ***
      //! Applying a border
      event.currentTarget.classList.add(stylish.selectedIMG);
      //!
      props.saveChanges(tmpPage);
    }
  };

  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    console.log("Displayed card", props.currentCard?.current?.src);
    console.log("Img ref", carouselIMG);

    setIsClicked(false);
  }, [props.displayed]);

  const carouselIMG = useRef(null);
  const lowerIMG = useRef(null);

  /**
   * Renders images in groups of two.
   * @param recievedIMGLocations An array of strings representing the location of images on the server.
   */
  let renderedImagesArray: JSX.Element[] = [];
  function renderSelectedImages(recievedIMGLocations: string[]): any {
    console.log(renderedImagesArray.length);
    if (recievedIMGLocations.length !== 0) {
      for (let i = 0; i < recievedIMGLocations.length; i++) {
        renderedImagesArray.push(
          <div className={stylish.imgContainer} key={i}>
            <img
              key={i}
              id={`img_${i}`}
              className={`${stylish.tmpIMG} ${
                props.currentCard?.current?.src == recievedIMGLocations[i]
                  ? stylish.SelectedIMG
                  : console.log("oi")
              }`}
              src={recievedIMGLocations[i]}
              alt="Here be the image"
              onClick={handleIMGClick}
              ref={carouselIMG}
            />

            {/* {recievedIMGLocations[i + 1] != undefined && (
              <img
                key={i + 1}
                id={`img_${i + 1}`}
                src={recievedIMGLocations[i + 1]}
                alt="here be the second one"
                className={`${stylish.tmpIMG}`}
                onClick={handleIMGClick}
                ref={lowerIMG}
              />
            )} */}
          </div>
        );
        // console.log(renderedImagesArray[i], "Jeloo there");
      }
      console.log(renderedImagesArray);
      return renderedImagesArray.map((el) => el);
    }
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
              containerClass={stylish.Carousel}
              itemClass={stylish.Item}
              responsive={responsive}
              showDots
              sliderClass={stylish.Slider}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {recievedIMGLocations.length !== 0 &&
                renderSelectedImages(recievedIMGLocations)}
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

/**
 * Sends an array of files to the server to be saved there.
 * @param upIMGs Array of uploaded images to be sent to the server.
 * @param setRecievedIMGLocation Array of paths to the images on the server. saved to a state.
 */
export function sendTheDataToTheServer(
  upIMGs: any[],
  setRecievedIMGLocation: React.Dispatch<React.SetStateAction<string[]>>
) {
  Axios.post("http://localhost:4000/tests/testIMG", upIMGs)
    .then(function (response) {
      console.log(response.data);
      setRecievedIMGLocation(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
