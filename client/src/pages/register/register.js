import "./register.css";

function Input({ placeholder, type, name }) {
  return (
    <input type={type} placeholder={placeholder} id={name} name={name}></input>
  );
}


export default function Register() {
  return (
    <body>
      <div className="container">
        <form action="#" method="post">
          <h2>Registration</h2>
          <div className="content">
            <div className="input-box">
              <Input
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="input-box">
              <Input
                placeholder="Full Name"
                type="text"
                name="fullName"
                required
              />
            </div>
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
          <div className="alert">
            <p>
              People who use our service may have uploaded your contact
              information to PhotoSphere. <a href="#">Learn more</a>
            </p>
            <p>
              By signing up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a> and <a href="#"> Cookies Policy</a>
            </p>
          </div>
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
          <div className="login">
            <p>
              Already Have an account? <a href="#">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
}

export default function Register(){
    return(
        <div>
            <form action="#">
                <Input placeholder="Email address" type="email" name="email"/>
                <Input placeholder="Full Name" type="text" name="fullName"/>
                <Input placeholder="Username" type="text" name="userName"/>
                <Input placeholder="Password" type="password" name="password"/>
                <input class="submit-button" type="submit" value="Sign Up"/>
            </form>
        </div>
    );
}

