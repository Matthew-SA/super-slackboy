import * as ChannelAPIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = ({ channels, focus }) => ({
  type: RECEIVE_CHANNELS,
  channels,
  focus
})

const receiveChannel = ({ channel, messages, focus }) => ({
  type: RECEIVE_CHANNEL,
  channel,
  messages,
  focus,
})

export const requestChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
)

export const requestChannel = channelId => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
)

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => { 
      App.room.startListening({room: channel.channel.id});
      dispatch(receiveChannel(channel))
    })
)