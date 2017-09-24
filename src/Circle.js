/**
 * Created by mac on 24/09/17.
 */
import React, { Component } from 'react';

class Circle extends Component{
    constructor() {
        super();
        this.createCanvas = this.createCanvas.bind(this);
        this.creatCircle = this.creatCircle.bind(this);

    }

    componentWillReceiveProps(){
        this.createCanvas();
    }

    creatCircle (ctx, xCoordinate, yCoordinate, radiusOuterCircle, start, finish, color , width) {
        ctx.lineWidth=width;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(xCoordinate, yCoordinate, radiusOuterCircle, start, finish);
        ctx.stroke();
    }

    createCanvas () {
        let circumference = 2*Math.PI;
        let canvas = this.refs[this.props.id];
        let ctx = canvas.getContext('2d');
        let radiusOuterCircle = 40;
        let radiusInnerCircle = 30;
        let start = 0;

        //clear the canvas --- for writing the number everytime
        ctx.clearRect(0, 0, 200, 200);

        // draw the outer circle
        this.creatCircle(ctx, 95, 50, radiusOuterCircle, start, circumference, this.props.color,2);

        // draw the inner circle
        this.creatCircle(ctx, 95, 50, radiusInnerCircle, start, this.props.arcValue, this.props.color,6);

        //Fill the percentage text
        ctx.fillText(this.props.arcPercentage+"%", 90, 55);

        //Fill the Text
        ctx.fillText(this.props.arcName, 55, 130);

    }
    
    render() {
        return (
            <div className="App">
                <canvas ref={this.props.id} width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default Circle;
