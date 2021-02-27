import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(challengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/48026280?s=460&u=9f468e9d5f6fabd7c896417392a94fc79dfbcd55&v=4" alt="Paulo Braga" />
            <div>
                <strong>Paulo Braga</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        
        </div>
        
    );
}