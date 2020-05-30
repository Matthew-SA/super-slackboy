import * as MembershipAPIUtil from "../util/membership_api_util";
import history from '../components/history'
export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"

const receiveMemberships = ({ memberships, channels }) => ({
  type: RECEIVE_MEMBERSHIPS,
  memberships,
  channels,
});

const receiveMembership = ({ membership, channel}) => ({
  type: RECEIVE_MEMBERSHIP,
  membership,
  channel,
});

const removeMembership = ({ membership, channel }) => ({
  type: REMOVE_MEMBERSHIP,
  membership,
  channel,
});


export const requestMemberships = () => (dispatch) =>
  MembershipAPIUtil.fetchMemberships().then((payload) =>
    dispatch(receiveMemberships(payload))
  );

export const requestMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.fetchMembership(membershipId).then((membership) => 
    dispatch(receiveMembership(membership))
  );

export const createMembership = (membership) => (dispatch) =>
  MembershipAPIUtil.createMembership(membership).then((payload) => {
    dispatch(receiveMembership(payload))
    history.push(`/app/channels/${payload.channel.id}`)
  });

export const updateMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.updateMembership(membershipId).then((membership) =>
    dispatch(receiveMembership(membership))
  );

export const destroyMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.destroyMembership(membershipId).then((membership) => {
    dispatch(removeMembership(membership))
  });