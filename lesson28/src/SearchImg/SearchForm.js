import { useState } from "react";
import { Alert, Button, Form, InputGroup, Stack } from "react-bootstrap";
import ImgCounter from "./ImgCounter.js";
import { IMG_DATA } from "./imgsData.js";
import SearchImg from "./SearchImg";

export default function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const [submitedText, setSubmitedText] = useState("");

  const [currImgUrl, setCurrImgUrl] = useState(null);
  const [alertShow, setAlertShow] = useState(false);

  const [totalSearched, setTotalSearched] = useState(0);
  const [totalFound, setTotalFound] = useState(0);

  const handleTextSubmit = (event) => {
    event.preventDefault();
    setTotalSearched(totalSearched + 1);

    if (searchText.toLowerCase() in IMG_DATA) {
      setSubmitedText(searchText);
      const urls = IMG_DATA[searchText];
      setCurrImgUrl(urls[0]);
      setTotalFound(totalFound + 1);
      if (alertShow) setAlertShow(false);
    } else {
      console.error({ code: 404, message: `img not found` });
      setCurrImgUrl(null);
      setAlertShow(true);
    }
  };

  function handleClear() {
    setCurrImgUrl(null);
    setSearchText("");
  }

  function getImgURL(action) {
    const images = IMG_DATA[submitedText];
    const imgIndex = images.indexOf(currImgUrl);
    return action === "right" ? images[imgIndex + 1] : images[imgIndex - 1];
  }

  function leftButtonHandler() {
    const url = getImgURL("left");
    setCurrImgUrl(url);
  }

  function rightButtonHandler() {
    const url = getImgURL("right");
    setCurrImgUrl(url);
  }

  return (
    <Stack
      gap={0}
      className="d-flex justify-content-around align-items-center flex-column h-100"
    >
      <Form className="w-100 px-5" onSubmit={handleTextSubmit}>
        <Form.Group className="mb-3 input-group">
          <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            {/* Controlled component */}
            <Form.Control
              id="searchLabel"
              type="text"
              placeholder="Insert your text here"
              value={searchText}
              onChange={(event) => {
                if (alertShow) setAlertShow(false);
                setSearchText(event.target.value);
              }}
            />
            <FormButtons
              url={currImgUrl}
              searchText={searchText}
              handleClearClicked={handleClear}
            />
          </InputGroup>
        </Form.Group>
      </Form>

      {alertShow && <ErrorAlert searchText={searchText} />}
      {currImgUrl && (
        <div className="d-flex justify-content-center align-items-center flex-column gap-3 p-3 pb-5">
          <ImgCounter totalSearches={totalSearched} totalFound={totalFound} />
          <SearchImg imgUrl={currImgUrl} />
        </div>
      )}

      {submitedText && currImgUrl && (
        <ArrowButtons
          imgIND={IMG_DATA[submitedText].indexOf(currImgUrl)}
          totalIMGs={IMG_DATA[submitedText].length}
          left={leftButtonHandler}
          right={rightButtonHandler}
        />
      )}
    </Stack>
  );
}

function ErrorAlert({ searchText }) {
  return (
    <Alert key={"danger"} variant={"danger"}>
      Could not find an image of {searchText}
    </Alert>
  );
}

function ArrowButtons({ imgIND, totalIMGs, left, right }) {
  if (totalIMGs > 1) {
    return (
      <div className="d-flex gap-3 justify-content-center align-items-center">
        <Button
          key={"outline-primary-right"}
          variant={"outline-primary"}
          disabled={imgIND === 0}
          onClick={left}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
            />
          </svg>
          Left
        </Button>
        <div>
          {imgIND + 1} / {totalIMGs}
        </div>
        <Button
          key={"outline-primary-left"}
          variant={"outline-primary"}
          disabled={imgIND === totalIMGs - 1}
          onClick={right}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
            />
          </svg>
          Right
        </Button>
      </div>
    );
  }
  return null;
}

function FormButtons({ url, searchText, handleClearClicked }) {
  return (
    <>
      <Button
        key={"outline-primary"}
        variant="outline-primary"
        type="submit"
        disabled={searchText === ""}
      >
        Show
      </Button>
      {url && (
        <Button
          type="reset"
          key={"outline-danger"}
          variant={"outline-danger"}
          onClick={handleClearClicked}
        >
          Clear
        </Button>
      )}
    </>
  );
}
