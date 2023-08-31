/* eslint-disable jsx-a11y/alt-text */
/* fragment  it is used without parent component */

import './video.css'
function Video({ title, channel, views, time }) {
    return (
        <>
            <div>
                <div className='pic'>
                    <img src="https://picsum.photos/id/180/180/180" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel}</div>
                <div className="views">
                    {views} views <span></span>{time}
                </div>
            </div>
        </>
    );
}

export default Video;