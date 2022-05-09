import { useState } from "react";


import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";



export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Image for a insect'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Image for a lamp'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Image for a thought bubble'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback(){
    setFeedbackType(null)
  }

  return (
    <div className="bodyForm">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType} 
        onFeedBackRestart={handleRestartFeedback}
        />
      )}


      <footer>
        Feito com ♥ no <a href="">NLW</a>
      </footer>
    </div>
  );
}