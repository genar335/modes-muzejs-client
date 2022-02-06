import React from "react";
import store from "store";

import styles from './styles/ExitModal.module.scss';
import {NextRouter, useRouter} from "next/router";
import {productionHost} from "./constants";

type ExitModalProps = {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const ExitModal = ({isOpen, setIsOpen}: ExitModalProps) => {
    const router: NextRouter = useRouter();

    return isOpen ? (
        <div className={styles.modalBG}>
            <div className={styles.Modal}>
                <h1>
                    Выйти?
                </h1>
                <p>Вы собираетесь выйти из создания теста.</p>
                <p>Все не сохраненные изменения будут потеряны.</p>

                <p>Вы точно хотите выйти?</p>
                <div className={styles.buttons}>
                    <button className={styles.confirm} onClick={() => {
                        store.remove("testInProgress");
                        router.replace(`${productionHost}/tms/main`);
                    }}>Да
                    </button>
                    <button className={styles.decline} onClick={() => setIsOpen()}>Нет</button>
                </div>
            </div>
        </div>
    ) : null;
}