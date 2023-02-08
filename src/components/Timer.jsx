import { getFormattedTime } from '../utils/timeUtils';

const Timer = ({ time }) => {
    const [minutes, seconds] = getFormattedTime(time);
    return (
        <>
            <input
                type="number"
                name="timerMinutes"
                id="timerMinutes"
                disabled
                value={minutes}
            />
            <input
                type="number"
                name="timerSeconds"
                id="timerSeconds"
                disabled
                value={seconds}
            />
        </>
    );
};

export default Timer;
