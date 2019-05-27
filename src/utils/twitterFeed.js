import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import GetLatestTweet from'./twitterAPI'
import { css } from '@emotion/core';
import { ClipLoader, RingLoader } from 'react-spinners';

class TwitterFeed extends React.Component {
  constructor(){
    super()
    this.state = {
      tweetId: '',
      loading: true
    }
  }
  componentDidMount(){
    GetLatestTweet(this.props.twitterId, this.state.tweetId, (tweetId) => {
        this.setState({tweetId: tweetId, loading: false})
    }) 
  }

  render(){
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
      `;
    return (
      <div>
        <div className='setting-table' >
          {this.state.loading === true ? 
            <RingLoader
              css={override}
              sizeUnit={"px"}
              size={150}
              color={'#123abc'}
              loading={this.state.loading}
            /> :
            this.state.tweetId && <TwitterTweetEmbed tweetId={this.state.tweetId} />}
        </div>
        <div className='socialHomeGroup'>
          <div>
            <a href={this.props.twitterURL}>
              <img  
                id="socialHomeItem"
                src={'https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/512/twitter.png'}
                alt={''}
              />
            </a>
          </div>
          <div>
            <a href={this.props.instagramURL}>
              <img  
                id="socialHomeItem"
                src={'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'}
                alt={''}
              />
            </a>
          </div>
          <div>
            <a href={this.props.facebookURL}>
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