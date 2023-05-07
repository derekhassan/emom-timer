import styled from 'styled-components';
import { ReactComponent as VolumeMuted } from '../assets/icons/volume-x.svg';
import { ReactComponent as Volume } from '../assets/icons/volume-2.svg';

const ControlsContainer = styled.div`
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
`;

const IconButton = styled.button`
    color: white;
    background-color: transparent;
    border: 0;
`;

const Controls = ({ isMuted, toggleVolume = () => {} }) => {
    return (
        <ControlsContainer>
            <IconButton onClick={toggleVolume}>
                {isMuted ? <VolumeMuted /> : <Volume />}
            </IconButton>
        </ControlsContainer>
    );
};

export default Controls;
