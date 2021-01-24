import { useState } from 'react';
import Statictics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target }) => {
    const name = target.dataset.name;
    if (name === 'good') {
      setGood(good => good + 1);
    } else if (name === 'neutral') {
      setNeutral(neutral => neutral + 1);
    } else if (name === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const isShowStatistics = total > 0;
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {isShowStatistics ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
