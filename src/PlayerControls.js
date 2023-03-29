import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullScreenIcon from "@mui/icons-material/Fullscreen";
import Popover from "@mui/material/Popover";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const PrettoSlider = styled(Slider)({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
});

const ControlsWrapper = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: 1,
});

const ControlIcons = styled(IconButton)({
  color: "#777",
  fontSize: 50,
  transform: "scale(0.9)",
  "&:hover": {
    color: "#fff",
    transform: "scale(1)",
  },
});

const VolumeSlider = styled(Slider)({
  width: 100,
});

const BottomIcons = styled(IconButton)({
  color: "#999",
  "&:hover": {
    color: "#fff",
  },
});
const PlayerControls = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackrate-popover" : undefined;
  return (
    <ControlsWrapper>
      {/* Top controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "#fff" }}>
            Video Title
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BookmarkIcon />}
          >
            Bookmark
          </Button>
        </Grid>
      </Grid>

      {/* middle controls */}

      <Grid container direaction="row" alignItems="center" justify="center">
        <ControlIcons aria-label="reqind">
          <FastRewindIcon fontSize="inherit" />
        </ControlIcons>

        <ControlIcons aria-label="reqind">
          <PlayArrowIcon fontSize="inherit" />
        </ControlIcons>

        <ControlIcons aria-label="reqind">
          <FastForwardIcon fontSize="inherit" />
        </ControlIcons>
      </Grid>

      {/* bottom controls */}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            defaultValue={20}
            ValueLabelComponent={ValueLabelComponent}
          />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" direction="row">
            <BottomIcons>
              <PlayArrowIcon fontSize="large" />
            </BottomIcons>

            <BottomIcons>
              <VolumeUpIcon fontSize="large" />
            </BottomIcons>

            <VolumeSlider min={0} max={100} defaultValue={100} />

            <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <BottomIcons onClick={handlePopover} variant="text">
            <Typography>1X</Typography>
          </BottomIcons>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button variant="text">
                  <Typography color="secondary">{rate}</Typography>
                </Button>
              ))}
            </Grid>
          </Popover>
          <BottomIcons>
            <FullScreenIcon fontSize="large" />
          </BottomIcons>
        </Grid>
      </Grid>
    </ControlsWrapper>
  );
};
export default PlayerControls;
