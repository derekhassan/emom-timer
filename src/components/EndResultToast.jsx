import styled from 'styled-components';
import { ReactComponent as CheckCircle } from '../assets/icons/check-circle.svg';
import { ReactComponent as Close } from '../assets/icons/x.svg';

const Toast = styled.div`
    position: absolute;
    width: 100%;
    bottom: calc(100% + 2rem);
    left: 50%;
    transform: translateX(-50%);
    background-color: #a2ebb1;
    color: #3b5741;
    padding: 24px;
    border-radius: 4px;
    border: 1px solid #3b5741;
    min-width: 300px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Message = styled.span`
    flex-grow: 1;
`;

const CloseButton = styled.button`
    color: #3b5741;
    background-color: transparent;
    border: 0;
`;

const EndResultToast = ({ show, closeToast = () => {} }) => {
    return show ? (
        <Toast>
            <CheckCircle />
            <Message>Well Done!</Message>
            <CloseButton onClick={closeToast}>
                <Close />
            </CloseButton>
        </Toast>
    ) : null;
};

export default EndResultToast;
