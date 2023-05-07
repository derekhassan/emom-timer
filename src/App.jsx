import { useState, useEffect } from 'react';
import Config from './components/Config';
import Timer from './components/Timer';
import EndResultToast from './components/EndResultToast';
import styled from 'styled-components';
import Controls from './components/Controls';

const halfwayThereVoice = new Audio('/halfway-there-voice.mp3');
const wellDoneVoice = new Audio('/well-done-voice.mp3');
const timerCountdownSound = new Audio('/timer-beep.mp3');
const timerCountdownFinishedSound = new Audio('/timer-beep-finished.mp3');
timerCountdownSound.volume = 0.3;
timerCountdownFinishedSound.volume = 0.3;

const ONE_MINUTE = 60;

const Layout = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SetCounter = styled.div`
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.125rem;
`;

function App() {
    const [numSets, setNumSets] = useState(0);
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [currentSet, setCurrentSet] = useState(0);
    const [isTimerPaused, setIsTimerPaused] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const sounds = [halfwayThereVoice, wellDoneVoice, timerCountdownSound];

    const toggleVolume = () => {
        setIsMuted(!isMuted);

        sounds.forEach((sound) => {
            !isMuted ? (sound.volume = 0) : (sound.volume = 0.3);
        });
    };

    const handleOnPause = () => {
        setIsTimerPaused(!isTimerPaused);
    };

    const onNumSetsChange = (e) => {
        setNumSets(parseInt(e.target.value));
    };

    const startTimer = (e) => {
        e.preventDefault();

        setShowSuccessToast(false);
        setIsTimerRunning(true);
        setTime(ONE_MINUTE);
        setCurrentSet(1);
    };

    const finishRound = () => {
        wellDoneVoice.play();
        setShowSuccessToast(true);
        setIsTimerRunning(false);
    };

    const closeToast = () => setShowSuccessToast(false);

    const resetTimer = () => {
        setTime(ONE_MINUTE);

        currentSet === numSets ? finishRound() : setCurrentSet(currentSet + 1);
    };

    const onTimeChange = () => {
        const nextTick = time - 1;
        if (nextTick <= 3 && nextTick > 0) {
            timerCountdownSound.play();
        }
        if (nextTick === 0) {
            timerCountdownFinishedSound.play();
        }
        if (nextTick === Math.floor(ONE_MINUTE / 2)) {
            halfwayThereVoice.play();
        }
        if (nextTick < 0) {
            resetTimer();
        } else {
            setTime(nextTick);
        }
    };

    useEffect(() => {
        if (!isTimerRunning) {
            return;
        }

        const interval = setInterval(onTimeChange, 1000);

        if (isTimerPaused) {
            return clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isTimerRunning, time, isTimerPaused]);

    return (
        <Layout>
            <EndResultToast show={showSuccessToast} closeToast={closeToast} />
            {!isTimerRunning && (
                <Config
                    startTimer={startTimer}
                    onNumSetsChange={onNumSetsChange}
                    numSets={numSets}
                />
            )}
            {isTimerRunning && (
                <>
                    <SetCounter>
                        {currentSet}/{numSets}
                    </SetCounter>
                    <Timer
                        startingTime={ONE_MINUTE}
                        time={time}
                        handleOnPause={handleOnPause}
                        isTimerPaused={isTimerPaused}
                    />
                </>
            )}
            <Controls isMuted={isMuted} toggleVolume={toggleVolume} />
        </Layout>
    );
}

export default App;
