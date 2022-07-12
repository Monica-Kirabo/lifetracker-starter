import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="logo">
          <a href=" /">
            <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg " />
          </a>
        </div>
        <li>
          <a href=" ">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>

          <a href=" ">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href=" ">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>

          <a href="/" className="Home">
            Activity
          </a>
        </li>
        <li>
          <a href="/#about ">Exercise</a>
        </li>
        <li>
          <a href=" ">Nutrition</a>
        </li>
        <li>
          <a href=" ">Sleep</a>
        </li>
        <li>
          <a href="/login ">Login</a>
        </li>
        <li>
          <a href="/register" className="sign">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// export default function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 0 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
