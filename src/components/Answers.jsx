import { useEffect, useState } from "react"
import { checkHeading, replaceHeadingStars } from "../helper"
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from "react-syntax-highlighter";

const Answers = ({ans, totalResult, index, type})=>{
    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans);
    
    useEffect(()=>{
        if(checkHeading(ans)){
            setHeading(true);
            setAnswer(replaceHeadingStars(ans))
        }
    },[])

    const renderer = {
        code({node, inline, className, children, ...props}){
            const match = /language-(\w+)/.exec(className || '');
            return !inline &&match?(
                <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/,'')}
                language={match[1]}
                style={dark}
                preTag="div"
                />
            ):(
                <code {...props} className={className}>
                    {children}
                </code>
            )
        }
    }

    return(
        <>
        {
            index==0 && totalResult>1?<span className="pt-2 dark:text-white text-black text-xl block">{answer}</span>:heading?<span className="pt-2 dark:text-white text-black text-lg block">{answer}</span>:<span className={type=='q'?'pl-1':'pl-5'}>
                <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
            </span>
        }
        </>
    )
}

export default Answers