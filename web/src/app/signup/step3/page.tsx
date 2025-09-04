"use client";
import { useRouter } from "next/navigation";
import { useSignupForm } from "../context/SignupFormContext";
import { Button } from "@/components/ui/button";

export default function Step3Page() {
    const router = useRouter();
    const { data, reset } = useSignupForm();
    const handleBack = () => {
        router.push("/signup/step2");
    };
    const handleSubmit = () => {
        alert(`Details Submitted!\nName: ${data.name}\nEmail: ${data.email}\nAddress: ${data.address}`);
        reset();
        router.push("/signup/step1");
    };
    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
            <div className="flex items-center justify-between mb-6">
                <span className="font-bold">Step 3 of 3</span>
                <div className="w-2/3 h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-cyan-500 rounded" style={{ width: "100%" }} />
                </div>
            </div>
            <h2 className="text-lg font-semibold mb-4">Confirm your details</h2>
            <div className="mb-4">
                <div className="mb-2"><span className="font-medium">Name:</span> {data.name}</div>
                <div className="mb-2"><span className="font-medium">Email:</span> {data.email}</div>
                <div className="mb-2"><span className="font-medium">Address:</span> {data.address}</div>
            </div>
            <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={handleBack} className="bg-gray-600 hover:bg-gray-700">Back</Button>
                <Button type="button" variant="default" onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">Submit</Button>
            </div>
        </div>
    );
}