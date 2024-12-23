'use client';

import { useEffect, useState } from "react";

export default function HubspotForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            portalId: "47540509",
            formId: "944f4c22-8093-438f-b272-3a553a7b93f7",
            target: ".hubspot-form",
            onFormReady: () => {
              setIsLoading(false);
            },
            onFormSubmit: () => {
              console.log('Form submitted');
            },
            onFormSubmitted: () => {
              console.log('Form submission completed');
            }
          });
        } catch (err) {
          setError('Error creating form. Please try again later.');
          setIsLoading(false);
        }
      }
    };

    script.onerror = () => {
      setError('Failed to load form. Please try again later.');
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const formContainer = document.querySelector('.hubspot-form');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative min-h-[400px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600 dark:text-gray-300">Loading form...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="text-red-600 dark:text-red-400 text-center p-4 bg-red-50 dark:bg-red-900/10 rounded-md">
          {error}
        </div>
      )}
      
      <div className="hubspot-form" />
    </div>
  );
}