import Answers from './Answers';


function QuestionAnswer({index, item}) {
    return (
        <>
            <div key={index + Math.random()} className={item.type == 'q' ? 'flex justify-end' : '' }>
                {item.type == 'q' ?
                    <li key={index + Math.random()} className='text-right list-none pt-2 border-8 dark:bg-zinc-700 bg-zinc-300 dark:border-zinc-700 border-zinc-300 w-fit rounded-tl-3xl rounded-bl-3xl rounded-br-3xl'><Answers ans={item.text} totalResult={1} index={index} type={item.type} /></li> : item.text.map((ansItem, ansIndex) => (
                        <li key={ansIndex + Math.random()} className='text-left pt-2'><Answers ans={ansItem} totalResult={item.length} index={index} type={item.type} /></li>
                    ))}
            </div>
        </>
    )
}

export default QuestionAnswer