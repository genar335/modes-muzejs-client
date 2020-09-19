function LoginMenu() {
  return (
    <div>
      <form action="">
        <div id="user_name">
          <label htmlFor="u_name">User:</label>
          <input type="text" name="u_name" />
        </div>
        <div id="password">
          <label htmlFor="u_pass">Password:</label>
          <input type="password" name="u_pass" />
        </div>
      </form>
    </div>
  );
}

export default LoginMenu;
