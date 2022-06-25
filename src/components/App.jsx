import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { countPositiveFeedbackPercentage } from 'utils/countPositiveFeedbackPercentage';
import { countTotalFeedback } from 'utils/countTotalFeedback';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerButtonClick = event => {
    this.setState(prevState => {
      let name = event.target.name.toLowerCase();
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onClick={this.handlerButtonClick}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(this.state)}
              positivePercentage={countPositiveFeedbackPercentage(this.state)}
            />
          }
        />
      </div>
    );
  }
}
