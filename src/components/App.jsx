import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  countTotal = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return total;
  };

  countPercentage = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return Math.round((this.state.good * 100) / total);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section>
          <Section title="Pleas leave feedback">
            <FeedbackOptions
              buttons={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotal() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotal()}
                positivePercentage={this.countPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Section>
      </div>
    );
  }
}
