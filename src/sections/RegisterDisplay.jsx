import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import {
	Info,
	MailCheck,
	PartyPopper,
	KeyRound,
	Undo2,
	Redo2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Register from "@/components/app/register/Register";
import OtpInput from "@/components/app/otpInput/OtpInput";
import RegisterSuccess from "@/components/app/registerSuccess/RegisterSuccess";

const stepStyles = {
	complete:
		"from-green-400 dark:from-green-600 via-emerald-500 dark:via-emerald-700 to-teal-400 dark:to-teal-600 text-slate-50",
	pending:
		"from-orange-500 dark:from-orange-600 via-amber-600 dark:via-amber-700 to-yellow-500 dark:to-yellow-500 text-slate-50",
	progressBar:
		"transition-colors bg-gradient-to-tr from-green-400 dark:from-green-600 via-emerald-500 dark:via-emerald-700 to-teal-400 dark:to-teal-600",
};

const StepIcon = ({ isActive, isComplete, IconPending, position }) => (
	<div
		className={`absolute transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr ${position} ${
			isActive ? stepStyles.complete : stepStyles.pending
		}`}
	>
		{isComplete ? (
			<PartyPopper className="size-5" strokeWidth={2} />
		) : (
			<IconPending className="size-5" strokeWidth={2} />
		)}
	</div>
);

export default function RegisterDisplay() {
	const [step, setStep] = useState(1);
	const [isFillingForm, setIsFillingForm] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
	const prevStep = () => {
		setStep((prev) => Math.max(prev - 1, 1));
		setIsComplete(false);
	};

	return (
		<Card className="p-3 overflow-hidden">
			<CardHeader className="relative flex flex-row items-center w-full h-10 p-0 mb-4">
				<Progress
					value={(step - 1) * 50}
					valueClassName={stepStyles.progressBar}
				/>
				{/* First Step */}
				<StepIcon
					isActive={step > 1}
					isComplete={step > 1}
					IconPending={Info}
					position="left-0"
				/>
				{/* Second Step */}
				<StepIcon
					isActive={step > 2}
					isComplete={step > 2}
					IconPending={MailCheck}
					position="left-[50%] translate-x-[-50%]"
				/>
				{/* Final Step */}
				<StepIcon
					isActive={isComplete}
					isComplete={isComplete}
					IconPending={KeyRound}
					position="right-0"
				/>
			</CardHeader>
			<CardContent className="p-0 my-5">
				{step === 1 ? (
					<Register
						isFillingForm={isFillingForm}
						setIsFillingForm={setIsFillingForm}
					/>
				) : step === 2 ? (
					<OtpInput
						isFillingForm={isFillingForm}
						setIsFillingForm={setIsFillingForm}
					/>
				) : (
					<RegisterSuccess />
				)}
			</CardContent>
			<CardFooter className="flex items-center justify-between w-full p-0">
				<Button
					variant="outline"
					className="flex items-center gap-2"
					onClick={prevStep}
				>
					<Undo2 className="size-4" /> Go Back
				</Button>
				{step === 3 ? (
					<Button
						className="flex items-center gap-2"
						onClick={() => setIsComplete(true)}
					>
						Complete
					</Button>
				) : (
					<Button
						variant="outline"
						disabled={isFillingForm}
						className="flex items-center gap-2"
						onClick={nextStep}
					>
						Next <Redo2 className="size-4" />
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
