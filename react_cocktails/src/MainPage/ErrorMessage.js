import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ErrorAlert(props) {
  const { letter, showErrorMsg, setShowErrorMsg } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("should be removed");
      setShowErrorMsg(false);
    }, 1000 * 5);
    return () => clearTimeout(timer);
  }, [showErrorMsg, setShowErrorMsg]);

  if (!showErrorMsg) {
    return null;
  }
  return (
    <Alert severity="error">
      <AlertTitle>
        <strong>Error</strong>
      </AlertTitle>
      No cocktails found for letter '{letter}'
    </Alert>
  );
}
