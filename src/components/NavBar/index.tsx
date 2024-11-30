
import ILink from '@/pages/trang-chu/components/1.Header/components/Danh_sach_link/interfaces/ILink';
import { useState } from 'react';

export default function Navbar({navLinks}: {navLinks: ILink[]}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[24px]">
          {/* Nút hamburger ở bên trái */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z-30"
            >
              {/* Nút hamburger với 3 vạch ngang trắng */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>

          {/* Navbar liên kết cho desktop
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Render lại các liên kết nav cho mobile */}
            {navLinks.map((link) => (
              <a
                key={link.ten}
                href={link.link}
                target='_blank'
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.ten}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
