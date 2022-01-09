import React from "react";
import { Box, Card, IconButton, Link, Typography } from "@mui/material";
import { Close, Facebook, Instagram } from "@mui/icons-material/";

const contactTextStyle = { pt: 3 },
  socialIconStyle = { p: 0, color: "#000000" };

export function Contact(props) {
  return (
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "600px",
        padding: 4,
      }}
    >
      <Typography variant="h2" id="modal-title" color="secondary">
        Contact
      </Typography>
      <IconButton
        color="secondary"
        onClick={props.onClose}
        size="large"
        sx={{
          position: "absolute",
          top: 1,
          right: 1,
        }}
      >
        <Close />
      </IconButton>
      <div id="modal-description">
        <Box
          fontStyle="italic"
          borderTop={2}
          borderColor="secondary.main"
          pt={2}
          mt={1}
          mb={1}
        >
          <Typography variant="body1">
            Drop a line any time to chat theatre, storytelling and vegetarian
            food. Also keen to swap cute cat pics.
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ ...contactTextStyle }}>
          Email:{" "}
          <Link href="mailto:tabitha@thirtyfivesquare.com" underline="hover">
            tabitha@thirtyfivesquare.com
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ ...contactTextStyle }}>
          <Link
            href="https://www.facebook.com/thirtyfivesquare/"
            underline="hover"
          >
            <IconButton sx={{ ...socialIconStyle }} size="large">
              <Facebook />
            </IconButton>{" "}
            @thirtyfivesquare on Facebook
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ ...contactTextStyle }}>
          <Link
            href="https://www.instagram.com/thirtyfivesquare/"
            underline="hover"
          >
            <IconButton sx={{ ...socialIconStyle }} size="large">
              <Instagram />
            </IconButton>{" "}
            @thirtyfivesquare on Instagram
          </Link>
        </Typography>
      </div>
    </Card>
  );
}
