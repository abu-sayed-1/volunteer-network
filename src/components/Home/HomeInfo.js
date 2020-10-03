import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Container,CardActions,CardActionArea,Card,CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
    homeInfoImg:{
        height:260
    }
  });

const HomeInfo = (props) => {
    const classes = useStyles();
    const{id,title,img} = props.data;
    return (
        <div className="container">
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.homeInfoImg}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More{id}
        </Button>
      </CardActions>
    </Card>  
        </div>
    );
};

export default HomeInfo;