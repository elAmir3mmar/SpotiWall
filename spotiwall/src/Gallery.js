import React from 'react'
// import ReactDOM from 'react-dom'
import {getImages} from './GetImages'

export class Gallery extends React.Component {
    
    constructor(props){
        super(props);

        var g = []
        this.state = {gallery: g }
        this.addImages = this.addImages.bind(this)
        
        getImages(this.props.pList)
        .then(
            images => this.addImages(g, images)
        );
    }

    addImages(gallery, images) {
        for (let index = 0; index < images.length; index++) {
            const img = <div>
                <img className="imgItem" src={images[index]}/>
                </div>
            // g = addImage(g, i)
            gallery.push(img)
            this.setState({gallery: gallery})
        }
    }

    render(){
        return <div class="galleryClass">{ this.state.gallery }</div>;
    }
}

