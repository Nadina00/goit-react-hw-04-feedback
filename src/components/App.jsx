import React, {useState} from 'react';
import {FeedbackOptions} from 'components/feedback/feedback'
import {Section} from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import {Notification} from 'components/Notification/Notification'
import PropTypes from 'prop-types';
import {Box} from './App.styled'


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const option = {good, bad, neutral}

 const onLeaveFeedback = (option) => {
  switch(option){
    case "good":
    setGood((prevGood) => prevGood + 1);
    break;
    case "neutral":
    setNeutral((prevNeutral) => prevNeutral + 1);
    break;
    case "bad":
    setBad((prevBad) => prevBad + 1);
    break;
    default:
        return;
  }}  
 

      
const countTotalFeedback = () =>{
    return good + neutral + bad;  
}

const countPositiveFeedbackPercentage = () => {
      return Math.round((good / (good + neutral + bad)) * 100);
     
}
   
    const keys = Object.keys(option);
      
  return (
    <Box>     
      <Section title = "Please leave feedback"/>
       <FeedbackOptions
            options={keys}
            onLeaveFeedback={onLeaveFeedback}
          />
       {countTotalFeedback() > 0 ? (
          
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
                  ):
                   <Notification message="No feedback given" />
        }
       </Box>
  );
}


App.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}
