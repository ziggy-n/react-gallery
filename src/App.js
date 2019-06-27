import React from 'react';
import './App.css';
import apiKey from './config.js';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './components/NotFound.js';
import Home from './components/Home.js';
import Loading from './components/Loading.js';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageArray: null,
      tag: null
    };
    this.getImages = this.getImages.bind(this);
  }

  async getImages(term){
   let arr;
   await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => response.json())
     .then(data => {
       arr = data.photos.photo.map((p) => `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`)
     });
   this.setState({
     imageArray: arr,
     tag: term
   });
  }


  render(){
    return (
      <Router>
        <div className="App">
          <title>React Gallery</title>
          <Route render={ (props) =>
            <Header
              getImages={this.getImages}
              {...props}
            />
          }/>
          <Switch>
            <Route exact path="/" render={ (props) =>
              <Home
                pageTitle="React Gallery - Home"
              />
            }/>
            <Route path="/search_:input" render={ (props) =>
              <Gallery
                pageTitle="React Gallery - Search"
                tag={this.state.tag}
                imageArray={this.state.imageArray}
                {...props}
              />
            }/>
            <Route exact path="/loading" render={ (props) =>
              <Loading
                pageTitle="Loading ..."
                {...props}
              />
            }/>
            <Route render={ () => <NotFound pageTitle="Page Not Found" /> } />
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;
