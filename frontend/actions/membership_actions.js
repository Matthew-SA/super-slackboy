import * as MembershipAPIUtil from '../util/membership_api_util'

export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS';
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';

const receiveMemberships = memberships => ({
  type: RECEIVE_MEMBERSHIPS,
  memberships
})

const receiveMembership = membership => ({
  type: RECEIVE_MEMBERSHIP,
  membership
})

export const requestMemberships = () => dispatch => (
  MembershipAPIUtil.fetchMemberships()
    .then(memberships => dispatch(receiveMemberships(memberships)))
)

export const requestMembership = membershipId => dispatch => (
  MembershipAPIUtil.fetchMembership(membershipId)
    .then(membership => dispatch(receiveMembership(membership)))
)

export const updateMembership = membershipId => dispatch => (
  MembershipAPIUtil.updateMembership(membershipId)
    .then(membership => dispatch(receiveMembership(membership)))
)