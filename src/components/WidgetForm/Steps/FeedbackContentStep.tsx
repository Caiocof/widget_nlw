import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType, feedbackTypes } from ".."


interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbackSend: () => void;
}




export function FeedbackContentStep({ feedbackType, onFeedbackRestart, onFeedbackSend }: FeedbackContentStepProps) {

    const feedbackTypesInfo = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<String | null>(null)
    const [comment, setComment] = useState('')

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        console.log(
            screenshot,
            comment
        );

        onFeedbackSend()

    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-slate-100"
                    onClick={onFeedbackRestart}
                >
                    <ArrowLeft width="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypesInfo.image.source} alt={feedbackTypesInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypesInfo.title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="feedbackContentArea"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="feedbackContentButtonSubmit">
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}