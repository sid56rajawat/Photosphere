import "./login.css";

function Input({ placeholder, type, name }) {
  return (
    <input type={type} placeholder={placeholder} id={name} name={name}></input>
  );
}

export default function login() {
  return (
    <body>
      <div className="container">
        <form action="#" method="post">
          <h2>Login</h2>
          <div className="content">
            <div className="input-box">
              <Input
                placeholder="Username"
                type="text"
                name="userName"
                required
              />
            </div>
            <div className="input-box">
              <Input
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
          <div className="register">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
}
