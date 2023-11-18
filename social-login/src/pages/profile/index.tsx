import { useState, useEffect } from "react";
import { CodeResponse, TokenResponse, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Button } from "primereact/button";



export default function ProfilePage() {
    const [user, setUser] = useState<TokenResponse | null>(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log(error)
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    }

    useEffect(() => {
        (async () =>{
            if (user) {
                try {
                    const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    });
                    console.log((await response.json()));     
                } catch (error) {
                    console.log(error);
                }
            }
        })()
    }, [user]);
    if (profile) {
        return (
            <div>
                <div>
                    {/* <img src={profile} /> */}
                </div>
            </div>
        )
    }
    return <div>
        <Button label="Google Login" onClick={() => login()} />
    </div>
}