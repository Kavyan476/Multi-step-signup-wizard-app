"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSignupForm } from "../context/SignupFormContext";
import { useState } from "react";

export default function Step2Page() {
    const router = useRouter();
    const { data, update } = useSignupForm();
    const [error, setError] = useState<string>("");

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.address) {
            setError("Address is required");
            return;
        }
        setError("");
        router.push("/signup/step3");
    };

    const handleBack = () => {
        router.push("/signup/step1");
    };

    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
            <div className="flex items-center justify-between mb-6">
                <span className="font-bold">Step 2 of 3</span>
                <div className="w-2/3 h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-cyan-500 rounded" style={{ width: "66%" }} />
                </div>
            </div>
                        <form onSubmit={handleNext}>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block font-medium mb-1">Address</label>
                                    <Input
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        onChange={e => update({ address: e.target.value })}
                                        required
                                        aria-invalid={!!error}
                                    />
                                    {error && <span className="text-red-500 text-sm">{error}</span>}
                                </div>
                                <div className="flex justify-between mt-6">
                                    <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
                                    <Button type="submit" disabled={!data.address}>Next</Button>
                                </div>
                        </form>
        </div>
    );
}