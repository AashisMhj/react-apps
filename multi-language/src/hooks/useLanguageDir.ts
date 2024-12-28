import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"

export const RTLLanguages = [
    'ar',  // Arabic
    'iw' // Hebrew
]

function isRTLorLTR(language:string){
    if(RTLLanguages.includes(language)) return 'rtl'
    else return 'ltr'
}

const useLanguageDir = () =>{
    const {i18n} = useTranslation();
    const [language_dir, setLanguageDir] = useState(isRTLorLTR(i18n.language));

    useEffect(()=>{
        setLanguageDir(isRTLorLTR(i18n.language))
    }, [i18n.language]);

    return {
        language_dir
    }

}

export default useLanguageDir