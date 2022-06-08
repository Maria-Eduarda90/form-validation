import { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonTypeProps = {
    type: string;
    children: ReactNode;
}

export function Button(props: ButtonTypeProps){
    return(
        <button className={styles.button}>
            {props.children}
        </button>
    );
}