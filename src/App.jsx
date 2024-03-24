import "./App.css";
import { useState, useRef} from 'react';
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";
import visualizerfr from "./AudioVisual";




const App = () => {
    let [recordOption, setRecordOption] = useState("video");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };
    return (
        <>
        <div className = "navbar-container">
        <button className="button-left">Home</button> 
        <button className="button-middle">About</button> 
        <button className="button-middle">Services</button> 
        <button className="button-right">Contact</button>
    </div>
    <div>
        <h1>React Media Recorder</h1>
        <div className="button-flex">
            <button onClick={toggleRecordOption("video")}>
              Record Video
            </button>
            <button onClick={toggleRecordOption("audio")}>
              Record Audio
            </button>
        </div>
        <div>
            {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
        </div>
        <div>
            <visualizerfr></visualizerfr>
        </div>
    </div></>
    );
};

    
export default App;