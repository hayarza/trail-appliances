import { Box, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

const SuperSpecialInput = ({ onAdd }) => {
  const baseStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleAdd = () => {
    onAdd(textFieldValue);
    setTextFieldValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <Box sx={{ ...baseStyles }}>
      <TextField
        onKeyPress={handleKeyPress}
        onChange={(e) => setTextFieldValue(e.target.value)}
        value={textFieldValue}
        sx={{
          width: 300,
          "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              color: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
        }}
        label="Add Question..."
        variant="outlined"
      />
      <IconButton onClick={() => handleAdd()} aria-label="delete">
        <AddCircleOutlineIcon sx={{ color: "white", fontSize: 40 }} />
      </IconButton>
    </Box>
  );
};

export default SuperSpecialInput;
