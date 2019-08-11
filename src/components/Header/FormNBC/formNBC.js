import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import ModalButton from "../ModalButton/modalButton";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));
const categories = [
  {
    value: "IOS",
    label: "Swift"
  },
  {
    value: "ANDROID",
    label: "Android"
  },
  {
    value: "WEB",
    label: "Front-End"
  },
  {
    value: "Web",
    label: "Back-End"
  },
  {
    value: "",
    label: "None"
  }
];

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    companyName: "",

    emailAddress: "",

    category: "",

    description: "",

    companyLink: "",

    quota: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Here are the values to be submitted to Firebase', values);
    console.log('Once you have successfully submitted the form data to Firebase, you can now show a success message and close the modal.')
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      {/*Company Name Section !*/}
      <TextField
        required
        id="standard-with-placeholder"
        label="Company Name"
        placeholder="Your company name here..."
        className={classes.textField}
        value={values.companyName}
        onChange={handleChange("companyName")}
        margin="normal"
      />
      {/*Email Section !*/}
      <TextField
        required
        type="email"
        id="standard-with-placeholder"
        label="E-mail"
        placeholder="xxx@xxxmail.com"
        className={classes.textField}
        value={values.emailAddress}
        onChange={handleChange("emailAddress")}
        margin="normal"
      />
      {/*Category Section !*/}
      <TextField
        required
        id="standard-select-category"
        select
        label="Category"
        className={classes.textField}
        value={values.category}
        onChange={handleChange("category")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your category"
        margin="normal"
      >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/*Description Section !*/}
      <TextField
        required
        multiline
        id="standard-with-placeholder"
        label="Description of Bootcamp"
        placeholder="Explain the course here..."
        className={classes.textField}
        value={values.description}
        onChange={handleChange("description")}
        margin="normal"
      />
      {/*Company Link Section !*/}
      <TextField
        required
        multiline
        id="standard-with-placeholder"
        label="Company Link"
        placeholder="https://www.xxx.com"
        className={classes.textField}
        value={values.companyLink}
        onChange={handleChange("companyLink")}
        margin="normal"
      />
      {/*QUOTA Section !*/}
      <TextField
        id="standard-number"
        label="Quotation"
        value={values.numberOfStudents}
        onChange={handleChange("quota")}
        type="number"
        placeholder="How many students ?"
        className={classes.textField}
        margin="normal"
      />
      <ModalButton onClick={handleSubmit}/>
      {/*Form buraya kadar !*/}
    </form>
  );
}
