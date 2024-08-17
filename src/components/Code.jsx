import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 65vh;
`;

function Code() {
  const { html, setHtml, css, setcss, js, setjs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="Css"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setcss}
      />
      <Editor
        heading="Javascript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setjs}
      />
    </Container>
  );
}
export default Code;
