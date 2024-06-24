
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import { useEffect, useState } from "react"

const App = () => {


    const [options, setOptions] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback-key');
        if(savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        } else {
            return {good: 0, bad: 0, neutral: 0}
        }
    })

    
    useEffect(() => {
        localStorage.setItem('feedback-key', JSON.stringify(options));
    }, [options])
   

    const totalFeedback = options.good + options.bad + options.neutral;
    const positive = Math.round((options.good / totalFeedback) * 100)


    const updateFeedback = feedbackType => {
            setOptions({
                ...options,
                [feedbackType]: options[feedbackType] +1
    })
        }

    
    const onReset  = () => {
        setOptions({
            good: 0,
            bad: 0,
            neutral: 0,
        })
    }




  return (
    <>
        <Description/>
        <Options 
            onUpdate={updateFeedback}
            onReset={onReset}
            totalFeedback={totalFeedback}
        />
        <Feedback
            positive={positive}
            totalFeedback={totalFeedback}
            options={options}
        />

    </>
  )
}

export default App