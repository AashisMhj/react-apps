import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import i18n from '../config/i18n'

export default function LanguageWrapper() {
    const {lang} = useParams();
    useEffect(()=>{
        i18n.changeLanguage(lang)
    }, [lang]);

    return <Outlet />
}