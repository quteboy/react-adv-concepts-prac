import React, {useEffect, useState} from 'react';
import axios from "axios";


const Randomfile = () => {
    const [photos, setPhotos] = useState([]);
    const [modal, setModal] = useState(false);
    const showModal = (id) => {
        setModal(!modal)
        console.log('I am CLicked',id)

    }
    const getPhotos = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
            const myPhotos = res.data;
            setPhotos(myPhotos);
        });
    };
    useEffect(() => {
        getPhotos();
    }, []);
    return (
        <div>
            {
                photos.slice(0,10).map((item) => (
                    <div key={item.id}
                         style={{flexDirection: 'row', display: 'flex', flex: 1, alignItems: 'center'}}>
                        <img onClick={(item)=>showModal(item)} src={item.thumbnailUrl}/>


                    </div>
                ))
            }

            {modal && (
                <dialog open onClick={()=>showModal()}>

                </dialog>
            )}
        </div>
    );
};

export default Randomfile;