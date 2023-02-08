const Config = ({
    startTimer = () => {},
    onNumSetsChange = () => {},
    numSets = 0,
}) => {
    return (
        <div>
            <form onSubmit={startTimer}>
                {/* <input type="number" name="" id="" /> */}
                <label htmlFor="numSets">Sets: </label>
                <input
                    type="number"
                    name="numSets"
                    id="numSets"
                    min="1"
                    value={numSets}
                    onChange={onNumSetsChange}
                />
                <input type="submit" value="Start Timer" />
            </form>
        </div>
    );
};

export default Config;
