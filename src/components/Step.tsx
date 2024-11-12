interface StepProps {
  currentStep: number;
}

const Step = ({ currentStep }: StepProps) => {
  const steps = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((s) => (
        <div
          key={s}
          className={`flex items-center justify-center w-14 h-14 ${
            currentStep >= s
              ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
              : "bg-[#373D6D]"
          } text-white rounded-full font-bold`}
        >
          {s + 1}
        </div>
      ))}
    </div>
  );
};

export default Step;
