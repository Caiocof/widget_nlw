import { ArrowLeft } from "phosphor-react"
import { CloseButton } from "../../CloseButton/CloseButton"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedBackRestart: () => void;
}




export function FeedbackContentStep({ feedbackType, onFeedBackRestart }: FeedbackContentStepProps) {
    const feedbackTypesInfo = feedbackTypes[feedbackType]
    return (
        <>
            <header>
                <button 
                type="button" 
                className="top-5 left-5 absolute text-zinc-400 hover:text-slate-100"
                onClick={onFeedBackRestart}
                >
                    <ArrowLeft width="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypesInfo.image.source} alt={feedbackTypesInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypesInfo.title}
                </span>
                <CloseButton />
            </header>

            <div className="typeFeedback">

            </div>
        </>
    )
}