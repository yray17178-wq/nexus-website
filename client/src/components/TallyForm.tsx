// NEXUS ROBOTECHPRO — Tally Inquiry Form Component
// Dynamic tracking with currentPageUrl, currentUserIp, and currentUserReferer
// Fixed height issue with min-height:600px
// ============================================================

import { useEffect, useState } from "react";

export default function TallyForm() {
  const [tallyUrl, setTallyUrl] = useState<string>("");

  useEffect(() => {
    // Get the current page URL
    const currentPageUrl = window.location.href;
    
    // Get the referrer (source link)
    const currentUserReferer = document.referrer || "direct";
    
    // Fetch the user's IP address from a public API
    const fetchUserIp = async () => {
      try {
        // Using a reliable public IP API
        const response = await fetch("https://api.ipify.org?format=json", {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        });
        const data = await response.json();
        return data.ip || "unknown";
      } catch (error) {
        console.error("Failed to fetch IP:", error);
        return "unknown";
      }
    };

    // Build the Tally URL with all parameters
    const buildTallyUrl = async () => {
      const userIp = await fetchUserIp();
      
      const encodedPageUrl = encodeURIComponent(currentPageUrl);
      const encodedUserIp = encodeURIComponent(userIp);
      const encodedUserReferer = encodeURIComponent(currentUserReferer);
      
      const url = `https://tally.so/embed/dWlAjK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source_page=${encodedPageUrl}&user_ip=${encodedUserIp}&user_referer=${encodedUserReferer}`;
      
      setTallyUrl(url);
      
      // Update all Tally iframes with the new URL
      const iframes = document.querySelectorAll('iframe[data-tally-src]');
      iframes.forEach((iframe: any) => {
        if (!iframe.src) {
          iframe.dataset.tallySrc = url;
          iframe.src = url;
        }
      });

      // Initialize Tally form
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      const v = function () {
        try {
          if (typeof (window as any).Tally !== "undefined") {
            (window as any).Tally.setFieldValue("source_page", currentPageUrl);
            (window as any).Tally.setFieldValue("user_ip", userIp);
            (window as any).Tally.setFieldValue("user_referer", currentUserReferer);
            (window as any).Tally.loadEmbeds();
          }
        } catch (e) {
          // Silently handle errors
        }
      };

      if (typeof (window as any).Tally !== "undefined") {
        v();
      } else if (!d.querySelector('script[src="' + w + '"]')) {
        const s = d.createElement("script");
        s.src = w;
        s.onload = v;
        d.body.appendChild(s);
      }
    };

    buildTallyUrl();
  }, []);

  return (
    <div className="w-full" style={{ minHeight: "600px" }}>
      {tallyUrl && (
        <iframe
          data-tally-src={tallyUrl}
          src={tallyUrl}
          loading="lazy"
          width="100%"
          height="100%"
          frameBorder="0"
          title="nexus 询盘表单"
          style={{ 
            border: "none", 
            display: "block",
            minHeight: "600px"
          }}
        />
      )}
      {!tallyUrl && (
        <div style={{ minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#888" }}>Loading form...</p>
        </div>
      )}
    </div>
  );
}
