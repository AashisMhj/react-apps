import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/16/solid'


const LanguageOptions = [
    {
        country_name: "United Kingdom",
        language_name: "English",
        country_alpha_2_code: "gb",
        lang_code: 'en'
    },
    {
        country_name: "Spain",
        language_name: "Español",
        country_alpha_2_code: "es",
        lang_code: 'es'
    },
    {
        country_name: "Saudi Arabia",
        language_name: "Arabic",
        country_alpha_2_code: "sa",
        lang_code: "ar"
    },
    {
        country_name: "Japan",
        language_name: "日本語",
        country_alpha_2_code: "jp",
        lang_code: "ja"
    },
    {
        country_name: "Israel",
        language_name: "עִברִית",
        country_alpha_2_code: "il",
        lang_code: "he"
    }
];

function findCurrentLanguageOption(lang_code:string | undefined){
    if(!lang_code) return LanguageOptions[0];
    const n_lang = LanguageOptions.find(language => language.lang_code === lang_code);
    if(!n_lang) return LanguageOptions[0];
    return n_lang;
}



export default function LanguageSelect() {
    const {lang} =  useParams();
    const [selected, setSelected] = useState(findCurrentLanguageOption(lang));
    const navigate = useNavigate()
    const location = useLocation()

    console.log(lang);

    function handleSelectChange(new_lang: string) {
        const { pathname } = location;
        const new_pathname = pathname.replace(`/${lang}`, `/${new_lang}`);
        navigate(new_pathname);
        setSelected(findCurrentLanguageOption(new_lang))
    }


    return (
        <Listbox value={selected} onChange={(event) => handleSelectChange(event.lang_code)}>
            <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <span className={`fi fi-${selected.country_alpha_2_code}`}></span>
                        <span className="block truncate">{selected.language_name}</span>
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {LanguageOptions.map((language) => (
                        <ListboxOption
                            key={language.lang_code}
                            value={language}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                        >
                            <div className="flex items-center">
                                <span className={`fi fi-${language.country_alpha_2_code}`}></span>
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {language.language_name}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}