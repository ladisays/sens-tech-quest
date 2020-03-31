import React from 'react';
import { Avatar, Divider, ListItem, ListItemText, ListItemAvatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
}));


const QuestionListItem = ({ icon, name, species, id, divider, description }) => {
  const Icon = icon;
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={`${name}: ${species? species : 'Other'}`}
          secondary={
            <>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.header}
                  color="textSecondary"
                >
                  Description:
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.label}
                  color="textSecondary"
                >
                  {description}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.header}
                  color="textSecondary"
                >
                  Guid:
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.label}
                  color="textSecondary"
                >
                  {id ? id : 'ERROR '}
                </Typography>
              </div>

            </>
          }
        />
      </ListItem>
      {divider && <Divider variant="middle" />}
    </>
  );
};

export default QuestionListItem;