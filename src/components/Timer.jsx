import { getFormattedTime } from '../utils/timeUtils';
import styled from 'styled-components';

const TimerLayout = styled.div`
    font-size: 5rem;
    color: white;
`;

const TimerSvg = styled.svg`
    position: relative;
    height: auto;
    width: 400px;
    transform: scaleX(-1);
`;

const TimerLabel = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    text-align: center;
`;

const Time = styled.time`
    line-height: 0;
`;

const Graphic = styled.g`
    fill: none;
    stroke: none;
`;

const Circle = styled.circle`
    stroke-width: 5px;
    stroke: rgba(152, 159, 163, 0.4);
`;

const CirclePath = styled.path`
    color: ${(props) => props?.strokeColor || '#61e9d2'};
    stroke-width: 5px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    stroke: currentColor;
`;

const PauseTimerButton = styled.button`
    font-size: 1.25rem;
    letter-spacing: 0.125rem;
    background: none;
    border: none;
    color: white;
`;

const CIRCLE_RADIUS = 45;
const STROKE_DASH_ARRAY_LENGTH = Math.ceil(2 * Math.PI * CIRCLE_RADIUS);

const Timer = ({
    startingTime,
    time,
    handleOnPause = () => {},
    isTimerPaused,
}) => {
    const formattedTime = getFormattedTime(time);
    const calculateTimeFraction = () => {
        const timeFraction = time / startingTime;
        return timeFraction - (1 / startingTime) * (1 - timeFraction);
    };
    const dashArray = () => {
        return `${(calculateTimeFraction() * STROKE_DASH_ARRAY_LENGTH).toFixed(
            2
        )} ${STROKE_DASH_ARRAY_LENGTH}`;
    };

    const calculateRingColor = () => {
        if (time <= 5) {
            return '#ed0400';
        }
        return '#61e9d2';
    };

    return (
        <TimerLayout>
            <TimerSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <Graphic>
                    <Circle cx="50" cy="50" r={CIRCLE_RADIUS} />
                    <CirclePath
                        strokeColor={calculateRingColor()}
                        strokeDasharray={dashArray()}
                        d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                        "
                    ></CirclePath>
                </Graphic>
            </TimerSvg>
            <TimerLabel>
                <Time dateTime={formattedTime}>{formattedTime}</Time>
                <PauseTimerButton onClick={handleOnPause}>
                    Click to {isTimerPaused ? 'Resume' : 'Pause'}
                </PauseTimerButton>
            </TimerLabel>
        </TimerLayout>
    );
};

export default Timer;
