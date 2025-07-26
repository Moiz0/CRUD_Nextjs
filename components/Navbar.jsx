import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Typography variant="h6" sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
            Home
          </Typography>
        </Link>
        <Link href="/addTopic" passHref>
          <Button variant="contained" sx={{ backgroundColor: "#fff", color: "#000" }}>
            Add Post
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
