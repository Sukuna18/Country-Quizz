import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Question } from "@/App";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

interface QuizzQuestionProps {
  questions: Question[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuizzQuestion = ({
  questions,
  currentStep,
  setCurrentStep,
  setScore,
}: QuizzQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    if (questions) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
    }
  }, [currentStep, questions]);

  const handleCorrectAnswer = (answer: boolean) => {
    setCanProceed(true);
    if (answer) {
      setScore((prevScore) => prevScore + 1);
      setTimeout(() => {
        setCanProceed(false);
        setCurrentStep((prevStep) => prevStep + 1);
      }, 2000);
    } else {
      setTimeout(() => {
        setCanProceed(false);
        setCurrentStep((prevStep) => prevStep + 1);
      }, 2000);
    }
  };
  useEffect(() => {
    if (currentQuestion && questions) {
      const correctAnswer = currentQuestion.capital?.[0];

      const otherCapitals = questions
        .filter((q) => q !== currentQuestion)
        .map((q) => q.capital && q.capital[0])
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const allOptions = [correctAnswer, ...otherCapitals].sort(
        () => 0.5 - Math.random()
      );

      setOptions(allOptions);
      setSelectedOption(null);
    }
  }, [currentQuestion, questions]);

  return (
    <div>
      <h1 className="text-center text-[#E2E4F3] font-bold text-xl p-8">
        What is the capital of {currentQuestion?.name.common}?
      </h1>
      <div className="grid grid-cols-2 gap-6 px-44">
        {options.map((option, index) => (
          <Card
            key={index}
            className="bg-[#393F6F] cursor-pointer border-none hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8]"
            onClick={() => {
              if (canProceed) return;
              setSelectedOption(option);
              handleCorrectAnswer(option === currentQuestion?.capital[0]);
            }}
          >
            <CardContent className="flex items-center justify-center p-4">
              <h2 className="font-semibold text-[#E2E4F3] text-xl flex items-center gap-1">
                {option}{" "}
                {selectedOption === option &&
                  option !== currentQuestion?.capital?.[0] && (
                    <IoIosCloseCircleOutline className="text-[#F5365C] ml-2" />
                  )}
                {(selectedOption !== currentQuestion?.capital?.[0] ||
                  selectedOption === currentQuestion?.capital?.[0]) &&
                  selectedOption !== null &&
                  option === currentQuestion?.capital?.[0] && (
                    <IoIosCheckmarkCircleOutline className="text-[#4EEA8C] ml-2" />
                  )}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizzQuestion;
