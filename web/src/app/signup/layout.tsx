import { SignupFormProvider } from "./context/SignupFormContext";

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <SignupFormProvider>{children}</SignupFormProvider>;
}
