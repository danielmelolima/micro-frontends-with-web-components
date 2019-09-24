import React, { useState, useEffect} from 'react';
import { render } from 'react-dom';
import { imageContainerStyle, imageStyle, imageHeaderContainer, imageTitleStyle, imageDescStyle } from './App.style'

const CHANGE_PHOTO_EVENT_NAME = 'CHANGE_PHOTO'
const INITIAL_PHOTO = { id: 1, category: 1, title: 'Cat', desc: 'yellow cat, animal, nature, cute, fur, feline, kitten, pet', src: 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg', views: '20K' }

const App = () => {
  const [image, setImage] = useState(INITIAL_PHOTO)
  
  const changePage = image => {
    setImage(image)
  }
  const changePageListener = ({ detail }) => changePage(detail)

  useEffect(() => {
    window.addEventListener(CHANGE_PHOTO_EVENT_NAME, changePageListener)
    return () => {
      window.removeEventListener(CHANGE_PHOTO_EVENT_NAME, changePageListener)
    }
  }, [])
  
  return (
    <div>
      {image &&
        <section style={imageContainerStyle}>
          <img src={image.src} style={imageStyle} />
          <div style={imageHeaderContainer}>
            <h1 style={imageTitleStyle}>{image.title}</h1>
            <p style={imageDescStyle}>
              <span>{image.desc}</span>
              <span>{image.views} views</span>
            </p>
          </div>
        </section>
      }
    </div>
  );
};

class ReactApp extends HTMLElement {

  constructor(props) {
    super(props)
  }

  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    render(<App />, mountPoint);
  }
}
customElements.define('wc-react', ReactApp);

export default App