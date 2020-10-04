import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardActions, CardActionArea, Card, CardMedia } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
          display:'inline-block',
          margin:15,
          height:275
    },
    homeInfoImg: {
        position:'relative',
        height: 200
    },
    HomeInfoBtn:{
        height:100,
        backgroundColor:'blue'
    },

});

const HomeInfo = (props) => {
    const classes = useStyles();
    const { id, title, img } = props.data;
    const history = useHistory()
    const handleRegister = id => {
      history.push(`/registerId/${id}`)
    }
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.homeInfoImg}
                    component="img"
                    image={img}
                />
            </CardActionArea>
            <CardActions className={classes.HomeInfoBtn}>
                <Button onClick={() => handleRegister(id)} className={classes.titleBtn}style={{outline:'none'}} size="small">
                     {title}
                </Button>
            </CardActions>
        </Card>
         </>
    );
};

export default HomeInfo;