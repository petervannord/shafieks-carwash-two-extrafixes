"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OAuthSuccess() {
  const params = useSearchParams();
  const code = params.get("code");
  const [msg, setMsg] = useState("Exchanging code…");

  useEffect(() => {
    if (!code) return setMsg("No code provided");
    fetch("/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setMsg("Error: " + data.error);
        else
          setMsg(
            "Refresh token: " +
              data.refresh_token +
              "\nCopy this into your .env.local"
          );
      });
  }, [code]);

  return <pre>{msg}</pre>;
}
