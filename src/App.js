import { useState } from 'react';
import Statistics from "./components/Statistics";
import FeedbackOptions from './components/FeedbackOptions';

import s from './App.module.css'

export default function App() {
      const [good, setGood] = useState(0);
      const [neutral, setNeutral] = useState(0);
      const [bad, setBad] = useState(0);


 const onLeaveFeedback = option => {
        switch(option) {
            case "good":
                setGood(prevState => prevState + 1);
                break;
                case "neutral":
                setNeutral(prevState => prevState + 1);
                break;
                case "bad":
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
   }
const countTotalFeedback = () => {
    return good + neutral + bad;
}
const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback())
}
   return (
    <>
    <h2 className={s.headling}>Please leave your feedback</h2>
    <div className={s.options}>
    <FeedbackOptions 
    options = {["good", "neutral", "bad"]}
    onLeaveFeedback = {onLeaveFeedback}
    />
    </div>
    <div className={s.stats}> 
    <h2 className={s.headling}>Statistics</h2>
    { countTotalFeedback() !== 0 ? 
        (<Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {countTotalFeedback()}
        positive = {countPositiveFeedbackPercentage()}
        />) : (<h3 className={s.smallerHeadling}>No feedback given</h3>)
    }
    </div>
    </>
)
}

