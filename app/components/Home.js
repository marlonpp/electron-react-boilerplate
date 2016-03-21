import React, { Component } from 'react';
import { Button } from 'grommet';
import { Link } from 'react-router';

import styles from './Home.css';

export default class Home extends Component {
  _onSubmit() {
    console.log('test!!');
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <div>
            <Button label="OK" primary={true}
              onClick={this._onSubmit} type="submit"
            />
          </div>
        </div>
      </div>
    );
  }
}
