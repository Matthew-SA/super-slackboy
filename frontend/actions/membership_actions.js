import * as MembershipAPIUtil from "../util/membership_api_util";

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";

const receiveMemberships = ({ memberships, channels }) => ({
  type: RECEIVE_MEMBERSHIPS,
  memberships,
  channels,
});

const receiveMembership = ({ membership, focus }) => ({
  type: RECEIVE_MEMBERSHIP,
  membership,
  focus,
});

export const requestMemberships = () => (dispatch) =>
  MembershipAPIUtil.fetchMemberships().then((memberships) =>
    dispatch(receiveMemberships(memberships))
  );

export const requestMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.fetchMembership(membershipId).then((membership) =>
    dispatch(receiveMembership(membership))
  );

export const updateMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.updateMembership(membershipId).then((membership) =>
    dispatch(receiveMembership(membership))
  );

export const createMembership = (channelId) => (dispatch) =>
  MembershipAPIUtil.createMembership(channelId).then((membership) => {
    App.room.startListening({room: membership.membership.channel_id});
    dispatch(receiveMembership(membership))
  });