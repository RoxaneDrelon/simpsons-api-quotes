import React from "react";
import DisplayQuoteBox from "./components/DisplayQuoteBox";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";

const sampleQuote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteBox: sampleQuote,
      loading: false, // will be true when ajax request is running
    };
    this.getQuoteBox = this.getQuoteBox.bind(this);
  }

  getQuoteBox() {
    // Send the request
    this.setState({ loading: true }, () => {
      axios
        .get("https://simpsons-quotes-api.herokuapp.com/quotes")
        // Extract the DATA from the received response
        .then((response) => response.data)
        // Use this data to update the state
        .then((data) => {
          console.log(data);
          this.setState({
            loading: false,
            quoteBox: data[0],
          });
        });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <DisplayQuoteBox quoteBox={this.state.quoteBox} />
        )}
        <button type="button" onClick={this.getQuoteBox}>
          Get a new quote
        </button>
      </div>
    );
  }
}

export default App;
