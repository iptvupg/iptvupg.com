"use client";

import { useState } from "react";

type Mode = "m3u-to-xtream" | "xtream-to-m3u";

type XtreamCreds = {
  server: string;
  username: string;
  password: string;
};

const M3U_PLACEHOLDER =
  "http://domain.com:8080/get.php?username=USER&password=PASS&type=m3u_plus";

/**
 * Parse a generic IPTV M3U URL into Xtream-style credentials.
 *
 * Supported shapes:
 *  - http(s)://host[:port]/get.php?username=U&password=P[&type=m3u_plus][&output=ts]
 *  - http(s)://host[:port]/playlist/U/P/m3u_plus
 *  - http(s)://host[:port]/playlist/U/P
 */
function parseM3U(input: string): XtreamCreds {
  const cleaned = input.trim();
  if (!cleaned) throw new Error("Paste a playlist URL first.");

  let url: URL;
  try {
    url = new URL(cleaned);
  } catch {
    throw new Error("That doesn't look like a valid URL. Include http:// or https://");
  }

  const protocol = url.protocol.replace(":", "");
  if (protocol !== "http" && protocol !== "https") {
    throw new Error("URL must start with http:// or https://");
  }

  const host = url.hostname;
  if (!host) throw new Error("Could not read a hostname from that URL.");

  // Preserve any non-default port; otherwise drop ":80" / ":443".
  const portFragment = url.port ? `:${url.port}` : "";
  const server = `${url.protocol}//${host}${portFragment}`;

  // get.php?username=...&password=...
  const path = url.pathname.toLowerCase();
  if (path.endsWith("/get.php")) {
    const username = url.searchParams.get("username") || "";
    const password = url.searchParams.get("password") || "";
    if (!username || !password) {
      throw new Error("Couldn't find both username and password in the query string.");
    }
    return { server, username, password };
  }

  // /playlist/USER/PASS[/m3u_plus]
  const playlistMatch = url.pathname.match(
    /^\/playlist\/([^/]+)\/([^/]+)(?:\/[^/]+)?\/?$/i,
  );
  if (playlistMatch) {
    return {
      server,
      username: decodeURIComponent(playlistMatch[1]),
      password: decodeURIComponent(playlistMatch[2]),
    };
  }

  // Some panels expose /live/USER/PASS/ID.ts — extract creds the same way.
  const liveMatch = url.pathname.match(/^\/(?:live|movie|series)\/([^/]+)\/([^/]+)\/.+/i);
  if (liveMatch) {
    return {
      server,
      username: decodeURIComponent(liveMatch[1]),
      password: decodeURIComponent(liveMatch[2]),
    };
  }

  throw new Error(
    "Unrecognised playlist URL. Expected /get.php?username=…&password=… or /playlist/USER/PASS/m3u_plus.",
  );
}

/**
 * Build a standard get.php m3u_plus URL from Xtream credentials.
 */
function buildM3U(creds: XtreamCreds): string {
  const server = creds.server.trim().replace(/\/+$/, "");
  if (!server) throw new Error("Enter your Xtream server URL (with port if any).");
  if (!/^https?:\/\//i.test(server)) {
    throw new Error("Server URL must start with http:// or https://");
  }
  try {
    new URL(server);
  } catch {
    throw new Error("Server URL is not valid.");
  }
  const username = creds.username.trim();
  const password = creds.password.trim();
  if (!username || !password) {
    throw new Error("Username and password are both required.");
  }
  const u = encodeURIComponent(username);
  const p = encodeURIComponent(password);
  return `${server}/get.php?username=${u}&password=${p}&type=m3u_plus`;
}

export default function M3UXtreamConverter() {
  const [mode, setMode] = useState<Mode>("m3u-to-xtream");

  // M3U → Xtream state
  const [m3uInput, setM3uInput] = useState("");
  const [xtreamOut, setXtreamOut] = useState<XtreamCreds | null>(null);

  // Xtream → M3U state
  const [server, setServer] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [m3uOut, setM3uOut] = useState("");

  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string>("");

  function reset() {
    setError("");
    setCopied("");
  }

  function handleConvert() {
    reset();
    try {
      if (mode === "m3u-to-xtream") {
        setXtreamOut(parseM3U(m3uInput));
      } else {
        setM3uOut(buildM3U({ server, username, password }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed.");
      if (mode === "m3u-to-xtream") setXtreamOut(null);
      else setM3uOut("");
    }
  }

  function handleClear() {
    reset();
    setM3uInput("");
    setXtreamOut(null);
    setServer("");
    setUsername("");
    setPassword("");
    setM3uOut("");
  }

  async function copyText(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setError("Couldn't access the clipboard. Copy the text manually.");
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-8">
      {/* Mode selector */}
      <fieldset className="mb-6">
        <legend className="mb-3 text-[11px] font-semibold tracking-[2px] uppercase text-text-muted">
          Conversion mode
        </legend>
        <div className="inline-flex flex-wrap gap-2 rounded-xl border border-border bg-bg-primary p-1">
          {(
            [
              { id: "m3u-to-xtream", label: "M3U → Xtream" },
              { id: "xtream-to-m3u", label: "Xtream → M3U" },
            ] as { id: Mode; label: string }[]
          ).map((opt) => {
            const active = mode === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setMode(opt.id);
                  reset();
                }}
                aria-pressed={active}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-accent text-black"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Inputs */}
      {mode === "m3u-to-xtream" ? (
        <div>
          <label htmlFor="m3u-input" className="mb-2 block text-sm font-semibold text-text-primary">
            Paste your M3U URL
          </label>
          <div className="mb-3 space-y-1.5 text-xs text-text-muted">
            <p className="font-semibold uppercase tracking-wider text-text-secondary">
              Accepted formats
            </p>
            <code className="block break-all rounded bg-bg-primary px-2 py-1.5 font-mono text-text-secondary">
              {M3U_PLACEHOLDER}
            </code>
            <code className="block break-all rounded bg-bg-primary px-2 py-1.5 font-mono text-text-secondary">
              http://domain.com:8080/playlist/USER/PASS/m3u_plus
            </code>
          </div>
          <input
            id="m3u-input"
            type="url"
            inputMode="url"
            autoComplete="off"
            spellCheck={false}
            value={m3uInput}
            onChange={(e) => setM3uInput(e.target.value)}
            placeholder={M3U_PLACEHOLDER}
            className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
          />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label htmlFor="server" className="mb-2 block text-sm font-semibold text-text-primary">
              Server URL (with port)
            </label>
            <input
              id="server"
              type="url"
              inputMode="url"
              autoComplete="off"
              spellCheck={false}
              value={server}
              onChange={(e) => setServer(e.target.value)}
              placeholder="http://domain.com:8080"
              className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-semibold text-text-primary">
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your_username"
              className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-text-primary">
              Password
            </label>
            <input
              id="password"
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your_password"
              className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleConvert}
          className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Convert
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition hover:border-accent/40 hover:text-accent"
        >
          Clear
        </button>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {error}
        </div>
      )}

      {/* Output */}
      {mode === "m3u-to-xtream" && xtreamOut && (
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
          <h3 className="mb-3 text-[11px] font-semibold tracking-[2px] uppercase text-accent">
            Xtream Codes credentials
          </h3>
          <dl className="space-y-3 text-sm">
            {(
              [
                { k: "Server URL", v: xtreamOut.server, label: "server" },
                { k: "Username", v: xtreamOut.username, label: "username" },
                { k: "Password", v: xtreamOut.password, label: "password" },
              ] as const
            ).map(({ k, v, label }) => (
              <div key={label} className="flex flex-wrap items-center gap-3">
                <dt className="min-w-[110px] text-text-muted">{k}</dt>
                <dd className="flex-1 break-all rounded-lg bg-bg-primary px-3 py-2 font-mono text-text-primary">
                  {v}
                </dd>
                <button
                  type="button"
                  onClick={() => copyText(v, label)}
                  className="rounded-lg border border-border-light bg-bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-primary transition hover:border-accent hover:bg-accent hover:text-black"
                >
                  {copied === label ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </dl>
        </div>
      )}

      {mode === "xtream-to-m3u" && m3uOut && (
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
          <h3 className="mb-3 text-[11px] font-semibold tracking-[2px] uppercase text-accent">
            M3U playlist URL
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 break-all rounded-lg bg-bg-primary px-3 py-2 font-mono text-sm text-text-primary">
              {m3uOut}
            </div>
            <button
              type="button"
              onClick={() => copyText(m3uOut, "m3u")}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary transition hover:border-accent/40 hover:text-accent"
            >
              {copied === "m3u" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}

      <p className="mt-6 text-xs text-text-muted">
        Conversion runs entirely in your browser — no playlist URLs or credentials are sent to a server.
      </p>
    </div>
  );
}
