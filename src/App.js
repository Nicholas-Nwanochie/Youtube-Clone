import "./App.css";
import Searchbar from "./components/Searchbar";
import React, { Component } from "react";
import Youtube from "./Api/youtube";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videodetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

componentDidMount(){
  this.onTermSubmit('Elon musk')
}


  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ 
      videos: response.data.items ,
      selectedVideo:response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <div className="ui container">
          <Searchbar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                {" "}
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
              '
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
