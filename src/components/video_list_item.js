import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // the {video} is completely identical to this line below:
    // const video = props.video; (nice es6 syntax)
    // this is a bit confused, two layer callback?

    // console.log(video); you can always see what properties object have

    const imageURL = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="meia-object" src={imageURL} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
