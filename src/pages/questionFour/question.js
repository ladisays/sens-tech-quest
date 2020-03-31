import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import solution from "./images/solution-4.png";

const question = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Question Four
      </Typography>
      <Typography variant="h5" gutterBottom>
        Kobayashi Maru
      </Typography>
      <Typography variant="body1" gutterBottom>
        This task revolves around a bug in the button handler.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your task if you choose to accept it, is to resolve this bug (displayed
        on the right and in the console)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Below is what the final solution should look like. Ensure that each
        button works for the intended list item.
      </Typography>
      <CardMedia
        image={solution}
        style={{
          width: "100%",
          height: 500,
          backgroundSize: "contain"
        }}
        title="The Solution"
      />
    </div>
  );
};

export default question;
