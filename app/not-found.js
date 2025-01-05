import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <div className="flex gap-4">
        <Link href="/">
          <a className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
            Return to Home
          </a>
        </Link>
        <Link href="/contact">
          <a className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
            Contact Us
          </a>
        </Link>
      </div>
      {/* <img
        src="/images/404-illustration.svg"
        alt="Page not found illustration"
        className="mt-8 max-w-xs"
      /> */}
    </div>
  );
}
