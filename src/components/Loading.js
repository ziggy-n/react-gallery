import React from 'react';


class Loading extends React.Component {

  componentDidMount(){
    document.title = this.props.pageTitle;
  }


  render(){
    return (
      <div>
        <h2> LOADING ... </h2>
      </div>
    );
  }

}

export default Loading;
