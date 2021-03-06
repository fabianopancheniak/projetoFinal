import React from "react";
import styles from './Footer.module.scss';
import { useNavigate } from "react-router-dom";


export default function Footer(){
    const navigate = useNavigate();
    function navigateToHome() {
		navigate("/");
	}

    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0 ){
            navigateToHome();
        }
      }, [counter]);
    return(
        <div className={styles.footer}> 
            <p className={styles.text}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            <div className={styles.line}></div>
            <div className={styles.countdownTextRefresh}> Application refresh in</div>
            <div className={styles.countdown}>
                <div className={styles.countdownNumberText}>
                <div className={styles.countdownNumber}> {counter} </div>
                <div className={styles.countdownTextSeconds}> seconds </div>
                </div>
            </div>
            <div className={styles.continueLogout}>
                <div className={styles.squares}>
                    <div className={styles.continue}> 
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <div className={styles.shrink}>Continuar navegando </div>
                    </a>
                    </div>
                    <div className={styles.logout}> 
                        <div className={styles.shrink}> Logout </div>
                    </div>
                </div>
            </div>
        </div>
    )
}