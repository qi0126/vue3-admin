const gerters = {
  isCollapse: ({ sidebar }) => sidebar.isCollapse,
  user: ({ user }) => user.user,
  token: ({ user }) => user.token,
  username: ({ user }) => user.username
}

export default gerters
