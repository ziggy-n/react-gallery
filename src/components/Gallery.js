import React from 'react';
import SingleImage from './SingleImage.js';
import Home from './Home.js';
import NoResults from './NoResults.js';


class Gallery extends React.Component {

  componentDidMount(){
    document.title = this.props.pageTitle;
  }


  render(){
    let keyVal = 0;

    if(this.props.tag){
      if(this.props.imageArray.length > 0){
        return(
          <div>
            <div className="result-announcement">
              <h2> Results </h2>
            </div>

            <div className="photo-container">
              <ul>
                {
                  this.props.imageArray.map(image =>
                    <SingleImage
                      src={image}
                      key={keyVal++}
                    />
                  )
                }
              </ul>
            </div>
          </div>
        );
      } else {
          return(
            <NoResults
              pageTitle="React Gallery - No Results"
            />
          );
      }
    } else {
      return (
        <Home
          pageTitle="React Gallery - Home"
        />
      );
    }

  }


}

export default Gallery;
