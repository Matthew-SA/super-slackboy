json.membership do
  json.partial! 'api/memberships/membership', membership: @membership
end