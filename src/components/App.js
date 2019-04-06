import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { displayBio: false};
  // }

  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return(
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Santosh.</p>
        <Title />
        <p>I'm always looking forward to working in meaningful projects</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in San Fransisco, and code every day.</p>
              <p>My fav language is Javascript and I use React JS</p>
              <p>Besides coding, I love browsing</p>
              <div>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>        
          )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}


export default App;
