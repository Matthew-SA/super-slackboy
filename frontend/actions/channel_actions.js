import * as ChannelAPIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = ({ channels }) => ({
  type: RECEIVE_CHANNELS,
  channels
})

const receiveChannel = ({ channel, messages }) => ({
  type: RECEIVE_CHANNEL,
  channel,
  messages,
})

export const requestChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(payload => dispatch(receiveChannels(payload)))
)

export const requestChannel = channelId => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId)
    .then(payload => dispatch(receiveChannel(payload)))
)

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(payload => { 
      dispatch(receiveChannel(payload))
    })
)