import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase(props) {
  const { query, setQuery, setSubmittedQuery } = props;

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        const queryBar = document.getElementById("inputQuery");
        setSubmittedQuery(queryBar.value);
        console.log("submitted " + queryBar.value);
      }}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 100 + "%" }}
    >
      <InputBase
        id="inputQuery"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Cocktail"
        inputProps={{
          "aria-label": "search cocktail",
        }}
        value={query}
        onInput={(e) => {
          e.preventDefault();
          const queryBar = document.getElementById("inputQuery");
          console.log(queryBar.value);
          setQuery(queryBar.value);
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={(e) => {
          e.preventDefault();
          const queryBar = document.getElementById("inputQuery");
          console.log(queryBar.value);
          setSubmittedQuery(queryBar.value);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
