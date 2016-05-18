
      var Counter = React.createClass({
          getInitialState: function() {
              return {presscount: 0};
          },
          handleClick: function() {
            this.setState({presscount: this.state.presscount + 1});
          },
          render: function() {
              return <div>Pressed {this.state.presscount} times
                  <div><button className="btn btn-small btn-primary" onClick={this.handleClick}>Press me</button></div>
              </div>
          }
      });
       
      ReactDOM.render(<Counter />, document.getElementById('react-first'));