import _ from 'lodash';
import React, { Component } from 'react';
// need to import react in all JSX files
// JSX is just a easier way to write js in react
// JSX is not a requirement for using React.
// Using React without JSX is especially convenient when
// you don’t want to set up compilation in your build environment.
// Each JSX element is just syntactic sugar for calling
// React.createElement(component, props, ...children).
// So, anything you can do with JSX can also be done with just plain JavaScript.
import SearchBar from './components/search_bar'; // import from files need file reference
import ReactDOM from "react-dom"; // or import from node packages
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search'; // you can see API documentationson their websites
const API_KEY = 'AIzaSyBiGC4WxfRTydxCeDb_SmtVft6xPPfBYck'; // this is from
// your console.developer.google.com
// then 'npm install --save youtube-api-search'
// '--save' means auto put this package in your dependencies in .json file




// const App = function() {
//     return <div>Hi!</div>;
// }
// create a new component, which is a function that produce some html
// a component is like a class, to create a instance of it: <App></App>
// <App /> is the same as <App></App>
//    |
//    |
//    |
//    V
// arrow function: using es6 syntax, the difference is with usage of 'this' keyword
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }
//      |
//      |
//      |
//      V
// change it to class-based component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('blackhole');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos }); // update videos to an array of videos
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // when you set state, it is going to render again
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // now, when you call this videoSearch function, it is only going to run every 300ms!

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take component App and generate HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
// second argument of render() is the target html tag that you want to render


// usually 1 component per file (angular and backcone and similar things).
// we usually have many componets, and create instances of them in
// this overall App component and then send it to the index.html page.
// Also, react should use downstream data flow, most parent component(which is this one)
// should be responsible for datafetching
