import React, { Component } from "react";
import ReactGA from 'react-ga';

class Photos extends Component {
    render() {
        ReactGA.set({ "page": "Contact us"});
        ReactGA.pageview("/Photos");
        return (
            <div>
                <h2>Share your convention photos</h2>
                <p>And we will project during meals</p><br/>
                Email to <a target="_top"  rel="noopener noreferrer" href="mailto:starts34busy94hay@photos.flickr.com?subject=CBTS">starts34busy94hay@photos.flickr.com</a>
                <p>Be sure to <i>attach</i>, not insert the image. (And please keep them clean)</p>
                <br/>
                <h2>View photos here</h2>
                <p><a target="_blank"  rel="noopener noreferrer" href="https://www.flickr.com/photos/162840194@N07/">https://www.flickr.com/photos/162840194@N07/</a></p>
            </div>
        );
    }
}
export default Photos;
