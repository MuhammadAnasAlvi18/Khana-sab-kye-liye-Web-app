import { useEffect, useState  } from 'react';
import { useHistory } from 'react-router';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import auth from '../../Config/firebase';
import { signInWithEmailAndPassword  , onAuthStateChanged} from '@firebase/auth';
const Signin = () => {

  const [ email , setemail] = useState('')
  const [ password , setpassword] = useState('')
  const [ error , seterror ] = useState(null)
  const history = useHistory()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid , user.email)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })

  const login = () => {
  console.log(email , password)
  if(email === 'head@saylani.com'){
    setemail("head@saylani.com")
  }
  else if(email !== "head@saylani.com"){
    setemail("error@error.com")
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email , user.uid)
    history.push('/dboard')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorMessage === 'Firebase: Error (auth/wrong-password).'){
    seterror("Incorrect Password")
    }
    else if(errorMessage === "Firebase: Error (auth/user-not-found)."){
      seterror("User not found")
    }
    else if(errorMessage === "Firebase: Error (auth/invalid-email)."){
      seterror("Invalid Email Adress")
    }
    else{
      seterror(errorMessage)
    }
    // ..
  });

  }

    
      return (
      
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(evt)=>{setemail(evt.target.value)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(evt)=>{setpassword(evt.target.value)}}
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <h5 style={{color:'red'}}>{error}</h5>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={login}
                >
                  Sign In
                </Button>
                {/* <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
            
          </Container>
      
      );
    }

export default Signin



