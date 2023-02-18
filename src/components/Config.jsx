import styled from 'styled-components';

const StyledButton = styled.input`
    background: linear-gradient(
        90deg,
        rgba(255, 186, 37, 1) 35%,
        rgba(254, 215, 29, 1) 100%
    );
    border: none;
    border-radius: 50px;
    padding: 1.25em 5.5em;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
`;

const StyledInput = styled.input`
    color: white;
    background-color: transparent;
    border: 1px solid #c4c4c4;
    padding: 1rem 0;
    font-size: 2rem;
    max-width: 10ch;
    text-align: center;
`;

const MinutesSetup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Config = ({
    startTimer = () => {},
    onNumSetsChange = () => {},
    numSets = 0,
}) => {
    return (
        <div>
            <form onSubmit={startTimer}>
                {/* <input type="number" name="" id="" /> */}
                <MinutesSetup>
                    <StyledInput
                        type="number"
                        name="numSets"
                        id="numSets"
                        min="1"
                        value={numSets}
                        onChange={onNumSetsChange}
                    />
                    <label htmlFor="numSets">Sets</label>
                </MinutesSetup>
                <StyledButton type="submit" value="Start Timer" />
            </form>
        </div>
    );
};

export default Config;
