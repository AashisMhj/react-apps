
import { Link, LinkProps, useParams } from "react-router-dom";

type LangLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>

export default function LangLink({to, ...props}:LangLinkProps){
    const {lang} = useParams();
    
    
    return <Link to={`/${lang}${to}`} {...props} />
}