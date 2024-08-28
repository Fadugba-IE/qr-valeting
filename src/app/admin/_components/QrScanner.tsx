"use client";
import { useContext, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

interface QrScannerProps {
	handleScanSuccess: () => void;
}

const QrScanner = ({ handleScanSuccess }: QrScannerProps) => {
	const { userData } = useContext(AuthContext);

	useEffect(() => {
		const onScanSuccess = (decodedText: string, decodedResult: any) => {
			console.log(`Scan result: ${decodedText}`);
			handleScanSuccess();
			if (decodedResult) {
				validateQRCode(decodedResult.decodedText);
			}
			// html5QrCodeScanner.clear();
		};

		const onScanFailure = (error: any) => {
			console.warn(`QR Code scan failed: ${error}`);
		};
		const html5QrCodeScanner = new Html5QrcodeScanner(
			"reader",
			{ fps: 10, qrbox: 250 },
			false
		);

		if (document.getElementById("reader")) {
			html5QrCodeScanner.render(onScanSuccess, onScanFailure);
		} else {
			console.error("Element with ID 'reader' not found");
		}

		return () => {
			html5QrCodeScanner.clear().catch((err) => console.error(err));
		};
	});

	const validateQRCode = async (decodedText: string) => {
		try {
			const response = await fetch(
				`https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/admin/verify/${decodedText}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${userData?.access_token}`,
					},
				}
			);
			const data = await response.json();
			console.log(data);

			if (data.status === "SUCCESS") {
				toast({
					variant: "success",
					description: "QR Code Validated Successfully",
				});
			} else if (data.status === 400) {
				toast({
					variant: "destructive",
					description: data.message,
				});
			}
		} catch (error) {
			console.error("Error validating QR code:", error);
		}
	};

	return (
		<div>
			<div id="reader" style={{ width: "auto" }}></div>
		</div>
	);
};

export default QrScanner;
