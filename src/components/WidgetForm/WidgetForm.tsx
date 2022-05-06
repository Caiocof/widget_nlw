import { CloseButton } from "../CloseButton/CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'


const feedbackTypes = {
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


export function WidgetForm() {
  return (
    <div className="bodyForm">
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
              // onClick={}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>


      <footer>
        Feito com ♥ no <a href="">NLW</a>
      </footer>
    </div>
  );
}