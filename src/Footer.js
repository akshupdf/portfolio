import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10" name="footer">
    <p className="text-sm">&copy; {new Date().getFullYear()} Akshay Pednekar | All rights reserved.</p>
    <div className="flex justify-center gap-6 mt-2">
      <a href="https://in.linkedin.com/in/akshay-pednekar-017734147" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
      Linkedin
      </a>
      <a href="mailto:pednekar.akshay9@gmail.com" className="hover:text-gray-400">
        Email
      </a>
    </div>
  </footer>
  )
}
