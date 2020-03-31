import React, { Component } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  withStyles,
  Paper,
  Divider
} from "@material-ui/core";
import UUID from "uuid/v4";
import styles from "./styles";

class QuestionFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: UUID(), name: "Ladi", age: 34 },
        { id: UUID(), name: "Ladi Aden", age: 29 },
        { id: UUID(), name: "Ladi Adenusi", age: 41 }
      ]
    };
  }
  incrementAge = e => () => {
    e.preventDefault();
    this.setState(state =>
      state.list.map(i => {
        i.age = i.age + 1;
        return i;
      })
    );
  };
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <List className={classes.root}>
          {list.map((item, i) => (
            <>
              <ListItem
                key={item.id}
                alignItems="flex-start"
                className={classes.item}
              >
                <ListItemText primary={item.name} className={classes.name} />
                <ListItemText primary={item.age} />
                <ListItemSecondaryAction>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.incrementAge}
                  >
                    Increment Age
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              {i !== list.length - 1 && <Divider variant="middle" />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(QuestionFour);
