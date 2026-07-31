import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
          ApplyTrack
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Application
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
