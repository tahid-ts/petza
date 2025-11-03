"use client";

import React from "react";
import Container from "../container/Container";
import Title from "@/components/ui/title/Title";

const FooterCopyright = () => {
  return (
    <div className="w-full bg-bg-color-two border-t border-primary mt-10">
      <Container>
        <Title
          size="sm"
          className="text-center text-gray-700 text-sm py-4 font-medium"
        >
          © {new Date().getFullYear()} by{" "}
          <span className="text-primary">Trilogysoft</span>. All rights
          reserved.
        </Title>
      </Container>
    </div>
  );
};

export default FooterCopyright;
