


function Options({onUpdate, onReset, totalFeedback}) {
  return (
    <>
        <button onClick={() => onUpdate('good')}>
            Good
        </button>
        <button onClick={() => onUpdate('bad')}>
            Bad
        </button>
        <button onClick={() => onUpdate('neutral')}>
            Neutral
        </button>

        {totalFeedback > 0 && (
            <button onClick={onReset}>Reset</button>
        )}
    </>
  )
}

export default Options