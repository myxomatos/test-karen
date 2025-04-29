function checkAdminAccess(user) {
  const adminRoles = ['admin', 'supervisor', 'root'];
  // Check if user's role is in adminRoles
  return !user.role ? false : adminRoles.includes(user.role.toLowerCase());
}

// Example user objects:
const user1 = checkAdminAccess({ role: 'Admin' }); // Should return true
const user2 = checkAdminAccess({ role: 'developer' }); // Should return false

console.log(user1, user2);

console.log();