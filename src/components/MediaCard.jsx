import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
//import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    typography: {
      fontFamily: [
        'K2D',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

export default function MediaCard({ imgUrl, text, actionsArr}) {
      
  return (
    <Card sx={{ maxWidth: 170, maxHeight: 152 }}>
      <CardMedia
        component="img"
        height="100"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" theme={theme}>
          Lizard
        </Typography>
      </CardContent>
    </Card>
  );
}
