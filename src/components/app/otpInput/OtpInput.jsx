import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OtpInput() {
	return (
		<div className="px-1 pt-4">
			<h4 className="text-2xl font-semibold leading-10">
				Verfiy Your Email
			</h4>
			<h6 className="text opacity-80">
				Enter the verification code sent to
			</h6>
			<span className="mb-4 text-base font-bold text-center text-transparent bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text">
				johndoe18@gmail.com
			</span>
			<div className="flex items-center justify-center my-10">
				<InputOTP maxLength={6}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>
		</div>
	);
}
