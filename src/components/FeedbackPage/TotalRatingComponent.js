import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  text: {
    color: "#616161",
    fontSize: 19
  }
};

// function TotalRatingComponent(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography className={classes.text}>
//           Total Rating with Reviews
//         </Typography>
//       </CardContent>
//       <CardContent>
//         <Typography variant="h1" component="h2">
//           512
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

export default class TotalRatingComponent extends Component {
  states = {
    numRatings: 512
  }

  props = {
    styles: styles
  }

  componentDidMount(){
    // axios.get('https:').then(res=>{
    //   const n_ratings = res.data
    //   this.setState({numRatings:n_ratings});
    // })
  }
  
  render(){
    return (
      <Card style={{height: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
        <CardContent>
          <Typography style={{color: "#616161", fontSize: 19}}>
            Total Rating with Reviews
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h1" component="h2">
            {this.states.numRatings}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

//export default withStyles(styles)(TotalRatingComponent);
