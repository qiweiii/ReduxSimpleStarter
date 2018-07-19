import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} video={video} />
        )
        // key attribute is to get rid of 'keys warning in react'
        // etag is a unique key of each video you get from inspection....
    });


    return (
        // bootstrap is imported in index.html
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
