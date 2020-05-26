json.membership do
  json.partial! 'api/memberships/membership', membership: @membership
end

json.current_membership @current_membership