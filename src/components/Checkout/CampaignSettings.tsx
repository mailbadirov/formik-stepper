import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";

import { IFormProps } from "@/utils/types";

const CampaignSettings = (props: IFormProps) => {
  const { values, handleBlur, handleChange, touched, errors } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Step 1
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoFocus
            required
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastName"
            label="Last name"
            fullWidth
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small">
            <InputLabel>Age</InputLabel>

            <Select
              name="age"
              label="Age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.age && Boolean(errors.age)}
            >
              <MenuItem value={18}>1-18</MenuItem>

              <MenuItem value={35}>19-35</MenuItem>

              <MenuItem value={50}>36-50</MenuItem>
            </Select>

            {touched.age && (
              <FormHelperText error>{errors.age}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="privacyPolicy"
                checked={values.privacyPolicy}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="I Agree to Privacy Policy"
          />

          {touched.privacyPolicy && (
            <FormHelperText error>{errors.privacyPolicy}</FormHelperText>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Rate this form</Typography>

          <Slider
            name="rate"
            color="secondary"
            value={values.rate}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.rate && (
            <FormHelperText error>{errors.rate}</FormHelperText>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CampaignSettings;
