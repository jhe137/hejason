import clsx from "clsx";
import {PrismicNextLink, PrismicNextLinkProps,} from "@prismicio/next";
export default function Button({
    className,
    ...restProps
}:PrismicNextLinkProps){
    
    return(
        <PrismicNextLink className= {clsx("block w-fit bg-slate-800 hover:bg-slate-700 transition-color duration-200  ease-in-out py-3 px-12 rounded-lg font-display text-white font-bold text-base tracking-wider", className)} {...restProps}/>
    )
}