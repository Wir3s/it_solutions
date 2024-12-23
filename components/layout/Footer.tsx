import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Bessette IT Solutions. All rights reserved.
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="hover:text-white">
                        Terms of Service
                    </Link>
                    <Link href="/contact" className="hover:text-white">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
