import { useEffect, useState } from 'react';
import { Visualizer } from 'react-sound-visualizer';

function visualizerfr() {
  const [audio, setAudio] = useState<MediaStream | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then(setAudio);
  }, []);

  return (
      <Visualizer audio={audio}>
        {({ canvasRef, stop, start, reset }) => (
          <>
            <canvas ref={canvasRef} width={500} height={100} />

            <div>
              <button onClick={start}>Start</button>
              <button onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </>
        )}
      </Visualizer>
  );
}

export default App;