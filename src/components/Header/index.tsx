import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar
    elevation={5}
    sx={{
      position: "relative",
    }}
  >
    <Toolbar>
      <Typography variant="h6" noWrap>
        Formik + Yup + MUI
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
