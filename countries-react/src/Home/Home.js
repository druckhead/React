import { useContext } from "react";
import { ColorContext } from "../ColorContext";
import InputColor from "react-input-color";

export default function Home({ setColor }) {
  const color = useContext(ColorContext);

  return (
    <div>
      <InputColor initialValue="#000" onChange={setColor} placement="right" />
      <div
        style={{
          width: 50,
          height: 50,
          marginTop: 20,
          backgroundColor: color.rgba,
        }}
      />
    </div>
  );
}
