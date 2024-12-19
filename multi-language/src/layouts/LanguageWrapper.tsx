import { PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import i18n from '../config/i18n'

export default function LanguageWrapper({children}:PropsWithChildren) {
    const {lang} = useParams();
    useEffect(()=>{
        i18n.changeLanguage(lang)
    }, [lang]);

    return <>{children}</>
}