"use client";
import React, { Suspense } from "react";
import CreateNewPassword from "./_components/CreateNewPassword";

const CreateNewPasswordPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CreateNewPassword />
		</Suspense>
	);
};

export default CreateNewPasswordPage;
