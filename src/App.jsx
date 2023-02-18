import { useState, useEffect } from 'react';
import Config from './components/Config';
import Timer from './components/Timer';
import EndResultToast from './components/EndResultToast';
import styled from 'styled-components';

const ONE_MINUTE = 5;

const Layout = styled.div``;

function App() {
    const [numSets, setNumSets] = useState(0);
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [currentSet, setCurrentSet] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);

    const onNumSetsChange = (e) => {
        setNumSets(parseInt(e.target.value));
    };

    const startTimer = (e) => {
        e.preventDefault();

        setIsTimerRunning(true);
        setTime(ONE_MINUTE);
        setCurrentSet(1);
    };

    const finishRound = () => {
        setIsRoundFinished(true);
        setIsTimerRunning(false);
    };

    const resetTimer = () => {
        setTime(ONE_MINUTE);

        currentSet === numSets ? finishRound() : setCurrentSet(currentSet + 1);
    };

    const onTimeChange = () => {
        const nextTick = time - 1;
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

        return () => clearInterval(interval);
    }, [isTimerRunning, time]);

    return (
        <Layout>
            <div>
                <EndResultToast show={isRoundFinished} />
                <div>
                    {currentSet}/{numSets}
                </div>
                <Config
                    startTimer={startTimer}
                    onNumSetsChange={onNumSetsChange}
                    numSets={numSets}
                />
                <Timer time={time} />
            </div>
        </Layout>
    );
}

export default App;
