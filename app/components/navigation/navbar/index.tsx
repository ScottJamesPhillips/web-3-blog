// @flow
import * as React from "react";
import { ReactNode, useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
require("@solana/wallet-adapter-react-ui/styles.css");
import "../../../globals.css";
import logo from "../../../../data/logo.jpeg";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { wallet, connect, connected } = useWallet();

  const buttonStyles = {
    backgroundColor: isHovered ? "#000000" : "",
    color: isHovered ? "#FFFFFF" : "#000000",
    border: "1px solid",
    padding: "0px 10px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
  };

  return (
    <div className="flex justify-between text-right align-center items-center px-5">
      <img className="object-cover" src={logo.src} width="100" />
      <WalletMultiButton style={{ ...buttonStyles }}>
        {connected ? null : (
          <div
            className="flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            LOGIN
          </div>
        )}
      </WalletMultiButton>
    </div>
  );
};
export default Navbar;
