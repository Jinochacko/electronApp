import { LoginProps } from "../../Containers/Login/type";

const LoginForm: React.FC<LoginProps> = ({login}: LoginProps) => {
    return (
        <form className="col-md-4">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="button" onClick={()=>{login();}} className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;