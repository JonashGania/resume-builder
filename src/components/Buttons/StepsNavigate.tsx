import React from "react";

interface StepsNavigateProps {
    isFirstStep: boolean;
    isLastStep: boolean;
    onNext: () => void;
    onBack: () => void;
}

const StepsNavigate: React.FC<StepsNavigateProps> = ({ isFirstStep, isLastStep, onNext, onBack }) => {
    return (
        <div className="flex justify-end gap-4 pt-16">
            <button 
                onClick={onBack} 
                disabled={isFirstStep} 
                className={`px-6 py-2 bg-black ${isFirstStep ? 'opacity-60' : 'opacity-100'} text-white rounded-3xl`}
            >
                Back
            </button>

            <button 
                onClick={onNext} 
                disabled={isLastStep} 
                className={`px-6 py-2 bg-black ${isLastStep ? 'opacity-60' : 'opacity-100'} text-white rounded-3xl`}
            >
                Next
            </button>
        </div>
    )
}

export default StepsNavigate