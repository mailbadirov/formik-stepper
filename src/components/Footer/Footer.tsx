import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {"Copyright ©"}
          <Link color="inherit" href="https://github.com/mailbadirov/">
            mailbadirov
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
