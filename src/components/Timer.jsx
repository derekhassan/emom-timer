import { getFormattedTime } from '../utils/timeUtils';
import styled from 'styled-components';

const TimerLayout = styled.div`
    font-size: 5rem;
    color: white;
`;

const Timer = ({ time }) => {
    const formattedTime = getFormattedTime(time);
    return (
        <TimerLayout>
            <time dateTime={formattedTime}>{formattedTime}</time>
        </TimerLayout>
    );
};

export default Timer;
