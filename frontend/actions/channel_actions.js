import * as ChannelAPIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
})

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
})

export const requestChannels = (type) => dispatch => (
  ChannelAPIUtil.fetchChannels(type)
    .then(channels => dispatch(receiveChannels(channels)))
)

// export const requestChannel = channelId => dispatch => (
//   ChannelAPIUtil.fetchChannel(channelId)
//     .then(channel => dispatch(receiveChannel(channel)))
// )

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => { 
      App.room.startListening({room: channel.channel.id});
      dispatch(receiveChannel(channel))
    })
)