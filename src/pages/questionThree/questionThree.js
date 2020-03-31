import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Paper } from '@material-ui/core';
import { Android, Pets, BugReport } from '@material-ui/icons';

import QuestionListItem from './questionListItem'
import { createRowData } from './mocks'

const createMockData = () => {
	/* Please do not refactor this function */
	return [
		createRowData({species: 'Robot', name: 'T-100', Icon: Android, description: "Likes long walks, walking over the bones of it's enemies"}),
		createRowData({species: 'Bug', name:'Barry', Icon: BugReport, description: "Likes long walks, and creating problems in all your code"}),
		createRowData({species: 'Rabbit', name:'Roger', Icon: Pets, description: "Likes long walks and getting to know the inner you"}),
		createRowData({species: null, name: null, Icon: null, description: null}),
	]
};

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
}));

const QuestionThree = () => {
  const classes = useStyles();
  const mockData = createMockData();

  return (
    <div className={classes.container}>
      <Paper>
        <List className={classes.root}>
          {mockData.map((item, i) => (
            <QuestionListItem
              key={item.id}
              {...item}
              divider={i !== mockData.length - 1}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default QuestionThree;
