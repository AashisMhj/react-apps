import { Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const LanguageOptions = [
    {
        country_name: "English",
        language_name: "English",
        country_alpha_2_code: "gb",
        lang_code: 'en'
    },
    {
        country_name: "France",
        language_name: "French",
        country_alpha_2_code: "fr",
        lang_code: 'fr'
    },
    {
        country_name: "Spain",
        language_name: "Spanish",
        country_alpha_2_code: "es",
        lang_code: 'es'
    }
];

export default function LanguageSelect() {
    const { lang } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [selected_lang, setSelectedLang] = useState('en');
    useEffect(() => {
        if (lang) setSelectedLang(lang);
    }, [lang]);

    function handleSelectChange(new_lang:string){
        const {pathname} = location;
        const new_pathname = pathname.replace(`/${lang}`, `/${new_lang}`);
        navigate(new_pathname);
    }

    return (
        <>
            <Select name="Lanauge Select" aria-label="Select Langauge" className="relative inline-block"
                onChange={(event) => handleSelectChange(event.target.value)}
                value={selected_lang}
            >
                {
                    LanguageOptions.map(item => <option key={item.country_alpha_2_code} value={item.lang_code}>{item.country_name}</option>)
                }
            </Select>
            <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
            />
        </>
    )
}