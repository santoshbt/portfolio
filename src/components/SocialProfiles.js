import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const SocialProfile = props => {
  const { image, link } = props.social_profile;

  return (
    <span>   
      <a href={link}>
        <img src={image} alt='profile' style={{width: 50, height: 50, margin:10}} />
      </a>                         
    </span>     
  )
}

const SocialProfiles = () => (
  <div>
    <h2>Social Profiles</h2>        
      <div>
      {
        SOCIAL_PROFILES.map(sp => {
          return(
            <SocialProfile key={sp.id} social_profile={sp} />
          )
        })
      }
    </div>
  </div>
)

export default SocialProfiles;