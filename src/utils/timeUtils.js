const getFormattedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart('2', '0')}:${seconds
        .toString()
        .padStart('2', '0')}`;
};

const getRemainingPathDashArray = (time, startingTime) => {
    return `${((time / startingTime) * 283).toFixed(2)} 283`;
};

export { getFormattedTime, getRemainingPathDashArray };
