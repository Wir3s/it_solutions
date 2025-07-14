import GoogleContact from "../../components/forms/GoogleForm";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans 
      bg-background 
      text-foreground 
      transition-colors 
      duration-300">
      <main className="space-y-16 p-8">
        <div className="mx-auto max-w-xl">
          <GoogleContact /> 
        </div>
      </main>
    </div>
  );
}

