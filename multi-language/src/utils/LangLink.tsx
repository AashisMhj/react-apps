import useLanguageDir from "@/hooks/useLanguageDir";
import { Link, LinkProps, useParams } from "react-router-dom";

type LangLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>

export default function LangLink({to, ...props}:LangLinkProps){
    const {lang} = useParams();
    const {language_dir} = useLanguageDir();
    
    return <Link to={`/${lang}${to}`} {...props} dir={language_dir}/>
}