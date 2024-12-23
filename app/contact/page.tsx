import Navbar from "../../components/layout/Navbar";
import HubspotContact from "../../components/forms/HubspotForm";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans 
      bg-background 
      text-foreground 
      transition-colors 
      duration-300">
      <Navbar />
      <main className="space-y-16 p-8">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-center text-lg">
          Feel free to reach out to us using the form below.
        </p>
        <div className="mx-auto max-w-xl">
          <HubspotContact /> 
        </div>
      </main>
    </div>
  );
}

