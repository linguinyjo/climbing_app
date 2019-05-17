import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class TwitterFeed extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <div className='setting-table' >
          <TwitterTweetEmbed tweetId="1083592734038929408" />
        </div>
        <div className='socialHomeGroup'>
          <div>
            <a href={'https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/512/twitter.png'}>
              <img  
                id="socialHomeItem"
                src={'https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/512/twitter.png'}
                alt={''}
              />
            </a>
          </div>
          <div>
            <a href={'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'}>
              <img  
                id="socialHomeItem"
                src={'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'}
                alt={''}
              />
            </a>
          </div>
          <div>
            <a href={'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'}>
              <img  
                id="socialHomeItem"
                src={'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'}
                alt={''}
              />
            </a>
          </div>
        </div>   
      </div>  
    )
  }
}

export default TwitterFeed