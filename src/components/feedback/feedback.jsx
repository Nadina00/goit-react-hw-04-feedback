import React from 'react';
import { Item, List, Btn } from './feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (options.length === 0) return null;

  return (
    <Item>
      {options.map(option => {
        return (
          <List key={option}>
            <Btn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Btn>
          </List>
        );
      })}
    </Item>
  );
};
