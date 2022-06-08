import styles from './styles.module.scss';

type typeInput = 'text' | 'password' | 'email';

type InputTypeProps = {
    type: typeInput;
    onChange?: (e: React.ChangeEvent<any>) => void;
    value?: string;
    id: string;
    name: string;
}

export function Input(props: InputTypeProps){
    return(
        <input {...props} className={styles.input}/>
    );
}