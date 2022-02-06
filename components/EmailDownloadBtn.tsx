import Axios from "axios";
import React from "react";
import emailIcon from "../GAssets/download-email.png";
import {productionURL} from "./constants";

import style from "./styles/EmailDownloadBtn.module.scss";

type EmailObj = {
    createdAt: string;
    email: string;
    updatedAt: string;
    __v: number;
    _id: string;
};

export const EmailDownloadBtn = () => {
    const handleClick = async () => {
        try {
            const emails: EmailObj[] = await (
                await Axios.get(`${productionURL}tests/allEmails`)
            ).data;

            const csvContent = "data:text/csv;charset=utf-8,";
            const headers = "Email,Created at,Updated at\n";
            const emailStr = emails
                .map((email) =>
                    [
                        email.email,
                        new Date(email.createdAt).toLocaleDateString(),
                        new Date(email.updatedAt).toLocaleDateString(),
                    ].join(",")
                )
                .join(",\n\r");
            console.log(emailStr);
            const encodedUri = encodeURI(`${csvContent}${headers}${emailStr}`);
            // window.open(encodedUri);
            const a = document.createElement("a")
            a.href = encodedUri
            a.style.display = 'none'
            a.download = 'Emails'
            document.body.appendChild(a)
            a.click()
            a.parentNode!.removeChild(a)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <button className={style.dButton} onClick={handleClick}>
            <img src={emailIcon} alt="Icon showing a mail with an arrow"/>
        </button>
    );
};
