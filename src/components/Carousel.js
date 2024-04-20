import { Card, CardContent, CardMedia, CardHeader} from '@mui/material';
import React from 'react';
import img1 from './../assets/carousel/img1.jpg';
import img2 from './../assets/carousel/img2.jpg';
import img3 from './../assets/carousel/img3.jpg';
import img4 from './../assets/carousel/img4.jpg';
import img5 from './../assets/carousel/img5.jpg';
import img6 from './../assets/carousel/img6.jpg';

function Carousel(){
    return <div container className="carousel">
        <div item className="carousel-item">
            <Card sx={{ maxWidth: 500}}>
                <CardMedia component="img"
                    height="250"
                    image={img1}
                    alt="Confidence"
                    />
                <CardHeader title="Confidence"/>
                {/* <CardContent>

                </CardContent> */}
            </Card>
        </div>
        <div item className="carousel-item">
            <Card sx={{ maxWidth: 500}}>
                <CardMedia component="img"
                    height="250"
                    image={img2}
                    alt="Ambition"/>
                <CardHeader title="Ambition"/>
                {/* <CardContent>

                </CardContent> */}
            </Card>
        </div>
        <div item className="carousel-item">
            <Card sx={{ maxWidth: 500}}>
                <CardMedia component="img"
                    height="250"
                    image={img3}
                    alt="Kindness"/>
                <CardHeader title="Kindness"/>
                {/* <CardContent>

                </CardContent> */}
            </Card>
        </div>
        <div item className="carousel-item">
            <Card sx={{ maxWidth: 500}}>
                <CardMedia component="img"
                    height="250"
                    image={img4}
                    alt="Innovation"/>
                <CardHeader title="Innovation"/>
                {/* <CardContent>

                </CardContent> */}
            </Card>
        </div>
        <div item className="carousel-item">
            <Card sx={{ maxWidth: 500}}>
                <CardMedia component="img"
                    height="250"
                    image={img5}
                    alt="Tolerance"/>
                <CardHeader title="Tolerance"/>
                {/* <CardContent>

                </CardContent> */}
            </Card>
        </div>
            
    </div>
}

export default Carousel;
