import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        
    )

}

function RenderComments({ dish }) {

    if (dish.comments != null)
        return (
            <div className="list-unstyled">
                <h4>Comments</h4>
                <li>{dish.comments[0]["comment"]}</li><br></br>

                <li>-- {dish.comments[0]["author"]} , {dish.comments[0]["date"]}</li>
                <br></br><li>{dish.comments[1]["comment"]}</li>
                <br></br><li>-- {dish.comments[1]["author"]} , {dish.comments[1]["date"]}</li>
                <br></br><li>{dish.comments[2]["comment"]}</li>
                <br></br><li>-- {dish.comments[2]["author"]} , {dish.comments[2]["date"]}</li>
                <br></br><li>{dish.comments[3]["comment"]}</li>
                <br></br><li>-- {dish.comments[3]["author"]} , {dish.comments[3]["date"]}</li>
                <br></br><li>{dish.comments[4]["comment"]}</li>
                <br></br><li>-- {dish.comments[4]["author"]} , {dish.comments[4]["date"]}</li>

            </div>
        );
    else
        return (
            <div></div>
        );
}



const DishDetail = (props) => {

    if (props.dish != null)
        return (
            <div className='container'>
                <div className="row">
                       <div key={props.dish.id} className="col-12 col-sm-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-sm-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
        );
    else
        return (

            <div></div>
        );
}


export default DishDetail;