import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="text-sm">
              <li>Somewhere on Earth 🌍</li>
              <li>+9199999999</li>
              <li>me0w_me0w_me0w@me0w.com</li>
            </ul>
            <ul className="text-sm">
              <li>11:00AM - 18:00PM</li>
              <li>EveryDay (Except Saturday and Sunday) </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
            <h4 className="text-xl font-semibold mb-4">Updates and News</h4>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
            <h4 className="text-xl font-semibold mb-4">Gallery</h4>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex justify-between">
          <div className="flex items-center">
            <a
              href="https://www.Instagram.com"
              title="Instagram"
              className="mr-4"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.Facebook.com"
              title="Facebook"
              className="mr-4"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://www.Twitter.com" title="Twitter">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <div>
            <p className="text-sm">© 2023 - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
