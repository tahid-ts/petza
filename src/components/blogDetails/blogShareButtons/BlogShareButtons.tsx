"use client";

import Button from "@/components/ui/button/Button";
import { Mail } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

export function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const fullUrl =
    typeof window !== "undefined" ? window.location.origin + url : "";

  const sharePlatforms = [
    {
      platform: "facebook",
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        fullUrl
      )}`,
    },
    {
      platform: "twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(fullUrl)}`,
    },
    {
      platform: "linkedin",
      icon: LiaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        fullUrl
      )}`,
    },
    {
      platform: "email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(
        title
      )}&body=Check out this article: ${encodeURIComponent(fullUrl)}`,
    },
  ];

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2 pt-6 border-t border-gray-200">
      <span className="font-semibold text-gray-900 mr-1">Share:</span>
      {sharePlatforms.map(({ platform, icon: Icon, url }) => (
        <Button
          size="sm"
          key={platform}
          onClick={() => handleShare(url)}
          className={`w-9! h-9! flex items-center justify-center text-white transition-colors rounded! `}
          aria-label={`Share on ${platform}`}
        >
          <Icon size={18} />
        </Button>
      ))}
    </div>
  );
}
