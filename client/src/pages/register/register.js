import "./register.css"

function Input({placeholder, type, name}){
    return(
        <input type={type} placeholder={placeholder} id={name} name={name}></input>
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
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
}