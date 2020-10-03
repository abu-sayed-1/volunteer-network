import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardActions, CardActionArea, Card, CardMedia } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'

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
                <Button className={classes.titleBtn}style={{outline:'none'}} size="small">
                     {title}
                </Button>
            </CardActions>
        </Card>
         </>
    );
};

export default HomeInfo;