import passwordIcon from "../../../assets/icon-password.svg";
import styles from "../Input.module.scss";
import className from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext, useState } from "react";
import classNames from "classnames";

export default function LoginPassword() {
    const { password, setPassword, setValidPassword, setError} = useContext(UserContext);
    
    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
        const number = new RegExp(/[0-9]/g);
        const upper = new RegExp(/[A-Z]/g);
        const lower = new RegExp(/[a-z]/g);
        const numCheck = document.getElementById('numero',) as HTMLInputElement | null;
        const upperCheck = document.getElementById('maiuscula',) as HTMLInputElement | null;
        const lowerCheck = document.getElementById('minuscula',) as HTMLInputElement | null;
        const lengthCheck = document.getElementById('length',) as HTMLInputElement | null;

        if (!password.value.match(passwordReg)) {
            setError(true);
            setValidPassword(false);
        } else {
            password.style.border = "";
            setError(false);
            setValidPassword(true);
        }
    }



    return (
    <>
    <div className={styles.inputContainer}>
           <input id="password" name="password" className={styles.formInput} type="password" placeholder="Senha" value={password}
            onChange={(event) => (
                setPassword(event.target.value),
                validatePassword(event.target)
            )}/>
            <img className={styles.inputIcon} src={passwordIcon} alt="Password Icon"/>
           
    </div>
    </>
    );
}