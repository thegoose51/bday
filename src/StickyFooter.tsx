import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    display: 'flex',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Copyright 2019 Cody James May
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              <Link color="inherit" href="/LICENSE">
                MIT License
            </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Link color="inherit" href="/humans.txt">
              <img src="humanstxt-transparent-1ink.png" alt="Humans.txt"></img>
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="https://github.com/thegoose51/bday">
              <img src="GitHub-Mark-Light-32px.png" alt="Github Repository"></img>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}