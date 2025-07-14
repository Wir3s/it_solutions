'use client';

export default function GoogleContact() {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-md shadow-md">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSePl1Co-l-YtpO3WpgUCwSksYV4OMOHuuSNe6Q3BmfsY0NAAQ/viewform?embedded=true"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Contact Form"
      />
    </div>
  );
}

