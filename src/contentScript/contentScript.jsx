// TODO: content script
import React from 'react';
import { render } from 'react-dom';
import './contentScript.css';
import Frame, {FrameContextConsumer} from 'react-frame-component'


const App = () => {
    const clickedFresh = () => {
        chrome.runtime.sendMessage(null, {message: "open_amazon_fresh"})

    }
    return (
        <Frame id="side-panel">
            <FrameContextConsumer>
                {
                    ({document, window}) => {
                        return (
                            <div>
                                <button onClick={() => clickedFresh()}>Shop with fresh</button>

                            </div>
                        )
                    }
                } 
            </FrameContextConsumer>
        </Frame>
    );
};

const root = document.createElement('div');
document.body.appendChild(root);
render(<App/>, root)

const toggle = () => {
    if (root.style.display === 'none') {
        root.style.display = 'block';
    } else {
        root.style.display = 'none'
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'toggle_content_script') {
        toggle()
    }
})