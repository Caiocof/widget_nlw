import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span>Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="typeFeedback">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="buttonTypeFeedback"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}