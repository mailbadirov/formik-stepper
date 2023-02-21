import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";

import { IFormProps } from "@/utils/types";

const AdGroup = (props: IFormProps) => {
  const { values, handleBlur, handleChange, touched, errors } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Step 2
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel>Select your gender</FormLabel>

            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />

              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>

            {touched.gender && (
              <FormHelperText error>{errors.gender}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="description"
            label="Describe Yourself"
            multiline
            rows={6}
            fullWidth
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.description && errors.description}
            error={touched.description && Boolean(errors.description)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  name="like"
                  checked={values.like}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Did you like this form?"
            />

            {touched.like && (
              <FormHelperText error>{errors.like}</FormHelperText>
            )}
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default AdGroup;
