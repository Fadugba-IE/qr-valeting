"use client";
import React, { Suspense } from "react";
import VerifyOtp from "./_components/VerifyOtp";

const VerifyOtpPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<VerifyOtp />
		</Suspense>
	);
};

export default VerifyOtpPage;
