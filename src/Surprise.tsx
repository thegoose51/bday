    
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './fireworks.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
      padding: theme.spacing(3, 2),
      textAlign: "center",
    },
  }),
);

export default function Surprise() {
  const classes = useStyles();
  return (
    <Box color="text.primary" component="div" m={1}>
      <Paper className={classes.root}>
        <Typography color="textPrimary" variant="h2" component="h2" gutterBottom>
          Happy Birthday!
        </Typography>
        <Typography color="textSecondary" component="p">
          I hope you have a wonderful Birthday!
        </Typography>
        <Box className="pyro">
          <Box className="before">
            <Box className="after">
            </Box>
          </Box>
        </Box>
        <img src="/BirthdayGopher.png" alt="Birthday Gopher" style={{ width:'100%', height:'100%' }}></img>
      </Paper>
    </Box>
  );
}