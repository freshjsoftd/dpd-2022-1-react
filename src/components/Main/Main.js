import {Component} from 'react';
import './Main.css';

class Main extends Component {
  render() {
    const {main} = this.props;
    console.log(main);
    return (
      <>
        <h1>It is main {this.props.main} component</h1>
      </>
    );
  }
}

export default Main;
