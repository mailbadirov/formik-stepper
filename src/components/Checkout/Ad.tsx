import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

import { IFormProps } from "@/utils/types";

const Ad = ({ values }: IFormProps) => (
  <>
    <Typography variant="h6" gutterBottom>
      Step 3
    </Typography>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {Object.keys(values).map((key, index) => (
          <Typography
            key={index}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >{`${key}: ${values[key as keyof typeof values]}`}</Typography>
        ))}
      </CardContent>
    </Card>
  </>
);

export default Ad;
