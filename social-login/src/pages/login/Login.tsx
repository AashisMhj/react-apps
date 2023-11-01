import { Button } from "primereact/button"
//
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
//

export default function LoginPage() {
    const navigate = useNavigate();

    function handleGoogleLogin(){
        navigate('/dashboard');
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.form_input}>
                    <Button icon="pi pi-google" label="Google Login" onClick={handleGoogleLogin} raised />
                </div>
            </div>
        </div>
    )
}