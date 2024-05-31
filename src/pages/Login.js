function Login() {
  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
