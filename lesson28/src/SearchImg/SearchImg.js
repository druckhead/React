import { Image } from "react-bootstrap";

export default function SearchImg(props) {

    const imgStyle = {
        width: 80 + '%',
        aspectRatio: 16 / 9,
        boxShadow: '.1em .1em 5em .5em'
    }

    console.log("Rendering SearchImg", props)

    return (
        <Image style={imgStyle} src={props.imgUrl} rounded fluid/>
    )

}