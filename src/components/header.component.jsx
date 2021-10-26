import { Box } from "@mui/material";
import trailLogo from "../images/trail-logo.svg";

const Header = (props) => {
  const baseStyles = {
    display: "flex",
    justifyContent: "center",
    color: "primary.contrastText",
    fontSize: 26,
    padding: 2,
  };

  return (
    <Box sx={{ ...baseStyles }}>
      <Box sx={{ width: 350 }}>
        <img src={trailLogo} alt="trail-logo" />
      </Box>
    </Box>
  );
};

export default Header;
