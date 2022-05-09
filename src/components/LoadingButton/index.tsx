import { CircleNotch } from "phosphor-react";

import './LoadingButton.css'

export function Loading() {
    return (
        <div className="divLoading">
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
        </div>
    );
}