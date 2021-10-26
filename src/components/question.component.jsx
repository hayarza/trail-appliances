import { Box, IconButton, Paper, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RedoIcon from "@mui/icons-material/Redo";
import { useState } from "react";

const Question = ({ question, removeQuestion }) => {
  const [isComplete, setComplete] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const paperStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    margin: 1,
    padding: 1,
    backgroundColor: "#DCDFE5",
    opacity: isComplete ? 0.3 : 1,
    textDecoration: isComplete ? "line-through" : "",
  };

  return (
    <Paper
      sx={{ ...paperStyle }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      elevation={3}
    >
      <Typography
        sx={{
          display: "block",
          width: 100,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          alignItems: "center",
          flexGrow: 1,
          padding: 1,
        }}
      >
        {question}
      </Typography>
      {showControls && (
        <Box>
          <IconButton
            sx={{ color: "#5cb456" }}
            onClick={() => setComplete(!isComplete)}
          >
            {isComplete ? <RedoIcon /> : <CheckCircleOutlineOutlinedIcon />}
          </IconButton>
          <IconButton
            sx={{ color: "#b43438" }}
            onClick={() => removeQuestion(question)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      )}
    </Paper>
  );
};

export default Question;
