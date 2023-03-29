// import React, { useState } from "react";
// import video from "./video1.mp4";
// import "./App.css";
// import ReactPlayer from "react-player";

// const Video = () => {
//   const [captions_arr, setCaptions] = useState([]);
//   var mySubtitle_arr = captions_arr.map((v) => ({
//     kind: "subtitles",
//     src: "subs/subtitles.en.vtt",
//     srcLang: "en",
//     default: true,
//   }));

//   return (
//     <div className="container">
//       <ReactPlayer
//         url={video}
//         controls={true}
//         controlsList={"nodownload"}
//         muted
//         config={{
//           file: {
//             attributes: {
//               crossOrigin: "true",
//             },
//             tracks: mySubtitle_arr,
//           },
//         }}
//       />
//       {/* <video
//         autoPlay
//         playsInline
//         muted
//         src={video}
//         height={"350px"}
//         width={"350px"}
//         controls
//         controlsList="nodownload"
//       /> */}
//     </div>
//   );
// };
// function App() {
//   return (
//     <div className="App">
//       <div className="app-container">
//         <Video />
//       </div>
//     </div>
//   );
// }
// export default App;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player";
// import "./App.css";
import PlayerControls from "./PlayerControls";
import video from "./video1.mp4";
import { styled } from "@mui/system";

const PlayerWrapper = styled("div")({
  width: "100%",
  position: "relative",
});

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <PlayerWrapper>
          <ReactPlayer
            width={"100%"}
            height="100%"
            url={video}
            muted={true}
            playing={true}
          />

          <PlayerControls />
        </PlayerWrapper>
      </Container>
    </>
  );
}

export default App;
