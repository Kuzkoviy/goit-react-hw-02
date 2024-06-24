

function Feedback({options: {good, bad, neutral}, totalFeedback, positive}) {
  return (
        <>
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    Neutral: {neutral}
                </li>
                <li>
                    Total: {totalFeedback}
                </li>
                <li>
                    Positive: {positive}%
                </li>
            </ul>
        </>
  )
}

export default Feedback