import { useEffect, useState } from "react";
import QuizzQuestion from "./components/QuizzQuestion";
import Step from "./components/Step";
import Title from "./components/Title";
import { Card, CardContent } from "./components/ui/card";
import { getCountries } from "./services/countries";
import Score from "./components/Score";

export interface Question {
  name: {
    common: string;
  };
  capital: string[];
}

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getCountries().then((data) => {
      setQuestions(data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {currentStep <= 9 ? (
        <Card className="bg-[#343963] h-[27rem] w-[60rem] border-none shadow-md">
          <CardContent>
            <Title />
            <Step currentStep={currentStep} />
            <QuizzQuestion
              setScore={setScore}
              questions={questions}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </CardContent>
        </Card>
      ) : (
        <Score
          score={score}
          setScore={setScore}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
}

export default App;
