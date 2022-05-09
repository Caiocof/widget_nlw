import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../LoadingButton";

interface ScreenshotButtonProps {
    screenshot: String | null;
    onScreenshotTook: (screenshot: String | null) => void;
}

export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image)

        setIsTakingScreenshot(false);
    }
    if (screenshot) {
        return (
            <button
                type="button"
                className="buttonScreenshot"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="feedbackContentCamera"
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
        </button>
    )
}