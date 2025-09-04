"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSignupForm } from "../context/SignupFormContext";
import { useState } from "react";

export default function Step1Page() {
  // email validation regex
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const router = useRouter();
  const { data, update } = useSignupForm();
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      router.push("/signup/step2");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <div className="flex items-center justify-between mb-6">
        <span className="font-bold">Step 1 of 3</span>
        <div className="w-2/3 h-2 bg-gray-200 rounded">
          <div className="h-2 bg-cyan-500 rounded w-1/3" />
        </div>
      </div>
      <form onSubmit={handleNext}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <Input
            id="name"
            name="name"
            value={data.name}
            onChange={e => update({ name: e.target.value })}
            required
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={e => update({ email: e.target.value })}
            required
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex justify-end mt-6">
          <Button type="submit" disabled={!data.email || !isValidEmail(data.email)}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
