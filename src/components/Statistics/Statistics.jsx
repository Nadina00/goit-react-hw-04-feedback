import React from 'react';
import { Item, List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Item>
        <List> Good: {good} </List>
        <List> Neutral: {neutral}: </List>
        <List> Bad: {bad} </List>
        <List> Total: {total()} </List>
        <List> PositivePercentage: {positivePercentage()}% </List>
      </Item>
    </div>
  );
};
