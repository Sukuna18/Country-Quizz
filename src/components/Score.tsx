import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import congratsIcon from "@/assets/pngwing.com.png";

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Score = ({ score, setCurrentStep, setScore }: ScoreProps) => {
  return (
    <Card className="bg-[#343963] border-none shadow-md px-12 pb-4">
      <CardHeader></CardHeader>
      <CardContent>
        <div>
          <img
            src={congratsIcon}
            alt="congrats"
            className="w-full h-40 mx-auto mb-5"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#E2E4F3] flex items-center justify-center text-center mb-5">
          Congrats! You completed <br /> the quiz.
        </h2>
        <span className="text-[#E2E4F3] flex items-center justify-center mb-5">
          You answer {score}/10 correctly
        </span>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-center w-full">
          <Button
            variant={"gradient"}
            className="px-28 py-7 text-md"
            onClick={() => {
              setCurrentStep(0);
              setScore(0);
            }}
          >
            Play Again
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Score;
