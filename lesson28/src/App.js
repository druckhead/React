import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchForm from "./SearchImg/SearchForm";
// import FunnyImg from "./FunnyImg/FunnyImg";
// import MoviesGallery from "./MoviesGallery/MoviesGallery";
// import Counter from "./ThreeTimesRender/ThreeTimesCounter";

export default function App() {
  const flexBox = `d-flex
  justify-content-center align-items-center
  container vh-100
  py-3`;

  const classes = `border border-1 border-dark
  rounded-4
  py-4
  `;

  return (
    <div className={flexBox}>
      <div className={classes}>
        <SearchForm />
      </div>
    </div>
  );
}

// export default App;
