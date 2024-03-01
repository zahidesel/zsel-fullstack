import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="All" value={totalFeedback} />
              <StatisticLine text="Average" value={averageScore} />
              <StatisticLine text="Positive" value={`${positiveFeedbackPercentage}%`} />
            </tbody>
          </table>
        </>)}
    </div>


  )
}
const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button onClick={() => setGood(good + 1)} text="Good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button onClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );

}
export default App
