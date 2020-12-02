import { Button, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


const LoginButton = withStyles((theme) => ({
  root: {
    backgroundColor: grey[700],
    '&:hover': {
      backgroundColor: grey[900],
    },
  },
}))(Button);

export default LoginButton;