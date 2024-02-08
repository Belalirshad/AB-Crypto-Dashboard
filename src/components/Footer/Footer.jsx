import React from "react";

export const Footer = () => {
  return (
    <footer class="relative text-center text-black-400 lg:text-center md:text-center sm:text-center pt-8">
      <div>
        <h3 className="footer-content font-semibold text-gray-300">
          Made By{" "}
          <a
            class="link"
            href="https://github.com/Belalirshad"
            target="_blank"
            className="hover:underline hover:text-blue-400"
          >
            ZAINAB FAIQUA{" "}
          </a>
          <a
            class="link"
            href="https://github.com/Belalirshad"
            target="_blank"
            className="hover:underline hover:text-blue-400"
          >
            BELAL IRSHAD{" "}
          </a>
        </h3>
      </div>
      <div className="flex absolute -mt-3 items-center">
        <h3 className="text-[8px] text-gray-300">
          Data Provided By CoinGeckoAPI
        </h3>
      </div>
    </footer>
  );
};
