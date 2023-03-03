import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ErrorAlert(props) {
  const { errorMsg, showErrorMsg, setErrorMsg } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("should be removed");
      setErrorMsg({
        errorMsg: "",
        showErrorMsg: false,
      });
    }, 1000 * 5);
    return () => clearTimeout(timer);
  }, [showErrorMsg, setErrorMsg]);

  if (!showErrorMsg) {
    return null;
  }
  return (
    <Alert severity="error">
      <AlertTitle>
        <strong>Error</strong>
      </AlertTitle>
      {errorMsg}
    </Alert>
  );
}
