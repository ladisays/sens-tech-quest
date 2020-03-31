import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, withStyles, CircularProgress } from '@material-ui/core';

import { getCardDetails } from './api'
import styles from './styles'

class QuestionTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: null,
			imgSrc: null,
			body: '',
      loading: true,
      hasError: false
    };
  }

  async componentDidMount() {
    try {
      const result = await getCardDetails();
      this.setState({
        ...result,
        loading: false
      });
    } catch (e) {
      this.setState({ loading: false, hasError: true });
    }
  }

	render() {
		const { classes } = this.props;
		const { title, imgSrc, body, loading }  = this.state;

    if (loading) {
			return (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			)
    }

		return (
			<div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgSrc}
            title={title}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <div
              className={classes.body}
              dangerouslySetInnerHTML={{__html:body}}
            />
          </CardContent>
        </Card>
			</div>
		);
	}
}

export default withStyles(styles)(QuestionTwo);
