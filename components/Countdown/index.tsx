import { ensureTwoDigits } from "../../utils/format";

const CountdownComponent: React.FC<{ date: number }> = ({ date }) => {
    const timeLeft = date - new Date().getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft <= 0) {
        // Render a completed state
        return <span>&ldquo;Auction Ended!&ldquo;</span>;
    }
    // Render a countdown
    if (days) {
        return (
            <span>
                {days}d {ensureTwoDigits(hours)}h {ensureTwoDigits(minutes)}min
            </span>
        );
    }

    return (
        <span>
            {ensureTwoDigits(hours)}h {ensureTwoDigits(minutes)}min
            {ensureTwoDigits(seconds)}s
        </span>
    );
};

export default CountdownComponent;
