import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyAgDnH-HNHaTzdgyCdrGVtli8dTQkcLFVw";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // YTSearch({ key: API_KEY, term: "sufboard" }, videos => {
    //   this.setState({ videos });
    // });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={"this.state.videos"} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector(".container"));
