import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Grid} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import '../../App.css'

const ImageComponent = () => {
    const [photos, setPhotos] = useState([]);
    const [modal, setModal] = useState(false);
    const [tempingImgSrc, setTempingImgSrc] = useState('')
    const getPhotos = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
            const myPhotos = res.data;
            setPhotos(myPhotos);
        });
    };
    useEffect(() => {
        getPhotos();
    }, []);
    const getImg = (url) => {
        setTempingImgSrc(url)
        setModal(true)
    }
    return (
        <div>
            <div className={modal ? 'modal open' : 'modal'}>
                <img src={tempingImgSrc} alt=""/>
                <CloseIcon onClick={() => {
                    setModal(false)
                }}/>
            </div>
            <Grid container direction='row' alignItems='center' justify='space-between' spacing={2}>
                {
                    photos.slice(0, 12).map((item) => (
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <img key={item.id} onClick={() => getImg(item.url)}
                                 src={item.url}
                                 alt={item.title}/>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
};

export default ImageComponent;