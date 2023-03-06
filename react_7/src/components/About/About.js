import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mb: "2em",
        height: 80 + "%",
      }}
    >
      <Typography component="h1" variant="h5">
        About Me
      </Typography>
      <Container
        sx={{
          bgcolor: "#acd",
          width: "100%",
          height: "100%",
          padding: "1em",
          mb: "2em",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos
          saepe debitis a eveniet blanditiis quasi facilis sit dolor enim ad ea
          itaque quisquam! Explicabo facilis vel illum aliquam ab. Non ipsa
          perferendis aliquid deleniti cupiditate! Repudiandae minima esse odio
          libero nesciunt optio quaerat quibusdam totam unde nulla incidunt,
          explicabo delectus nihil ipsa reiciendis facere nobis cum atque, est
          modi. Minus odio soluta iure optio corrupti tempora, fuga eveniet
          deleniti veritatis sapiente veniam nobis vero a quasi debitis esse
          corporis earum enim eum dolorum rerum voluptas voluptate! Sequi, eaque
          dignissimos! Corrupti aspernatur tenetur doloribus aliquam ratione
          sint distinctio incidunt, in voluptate explicabo officia ad, alias
          accusamus aperiam quia ipsam perferendis tempore iste, minus libero
          eligendi dolores ipsa? Excepturi, asperiores magni. Minus cupiditate,
          modi ipsum ab ea voluptatum! Quis voluptates repudiandae nam quisquam
          optio iure incidunt, ducimus harum vel, magni minima corporis eos
          doloremque distinctio nobis? Dolor qui assumenda culpa nam.
        </Typography>
      </Container>
    </Container>
  );
}
