import * as MembershipAPIUtil from "../util/membership_api_util";

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"

const receiveMemberships = ({ memberships, channels }) => ({
  type: RECEIVE_MEMBERSHIPS,
  memberships,
  channels,
});

const receiveMembership = (membership) => ({
  type: RECEIVE_MEMBERSHIP,
  membership,
});

const removeMembership = (membership) => ({
  type: REMOVE_MEMBERSHIP,
  membership,
});


export const requestMemberships = () => (dispatch) =>
  MembershipAPIUtil.fetchMemberships().then((payload) =>
    dispatch(receiveMemberships(payload))
  );

export const requestMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.fetchMembership(membershipId).then((membership) =>
    dispatch(receiveMembership(membership))
  );

export const createMembership = (channelId) => (dispatch) =>
  MembershipAPIUtil.createMembership(channelId).then((membership) => {
    dispatch(receiveMembership(membership))
  });

export const updateMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.updateMembership(membershipId).then((membership) =>
    dispatch(receiveMembership(membership))
  );

export const destroyMembership = (membershipId) => (dispatch) =>
  MembershipAPIUtil.destroyMembership(membershipId).then((membership) => {
    dispatch(removeMembership(membership))
  });