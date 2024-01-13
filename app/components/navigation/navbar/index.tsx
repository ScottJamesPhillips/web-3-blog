// @flow
"use client";
import * as React from "react";
import { ReactNode, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
require("@solana/wallet-adapter-react-ui/styles.css");
import "../../../globals.css";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const wallet = useWallet();

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
    <div className="text-right p-5">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <WalletMultiButton style={{ ...buttonStyles }}>
          {wallet.connected ? null : (
            <div className="flex items-center">LOGIN</div>
          )}
        </WalletMultiButton>
      </div>
    </div>
  );
};
export default Navbar;
