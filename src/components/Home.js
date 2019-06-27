import React from 'react';

class Home extends React.Component{

  componentDidMount(){
    document.title = this.props.pageTitle;
  }

  render(){
    return (
      <div>
        <h2> Search For Something Beautiful Today. </h2>
      </div>
    );
  }

}

export default Home;
