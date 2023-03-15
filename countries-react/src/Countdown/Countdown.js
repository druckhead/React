import { useContext } from "react";
import { ColorContext } from "../ColorContext";

export default function Countdown({ timeLeft }) {
  const color = useContext(ColorContext);
  return <div style={{ color: color.hex }}>{timeLeft}s</div>;
}
