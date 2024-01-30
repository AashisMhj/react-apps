import { Button } from "primereact/button"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
//
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
//

export default function LoginPage() {
    const navigate = useNavigate();

    function handleGoogleLogin(response:CredentialResponse){
        console.log(response);
        navigate('/profile');
    }
    function handleGoogleLoginError(){
        console.log('error')
    }
    function handleLogin(){
        navigate('/dashboard');
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.form_input}>
                    <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleLoginError} />
                    <Button icon="pi pi-google" label="Login" onClick={handleLogin} raised />
                </div>
            </div>
        </div>
    )
}