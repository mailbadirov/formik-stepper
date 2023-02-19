import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import { IFormProps } from "../../utils/types";

const Ad = (props: IFormProps) => {
  const { values } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Step 3
      </Typography>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Firstname: {values.firstName}
          </Typography>

          <Typography variant="h5" component="div">
            Lastname: {values.lastName}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Age: {values.age}
          </Typography>

          <Typography variant="body2">
            Description: {values.description}
          </Typography>

          <Typography variant="body2">Gender: {values.gender}</Typography>

          <Typography variant="body2">Rate: {values.rate}</Typography>

          <Typography variant="body2">
            Privacy policy accepted: {String(values.privacyPolicy)}
          </Typography>

          <Typography variant="body2">
            Liked us: {String(values.like)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Ad;
