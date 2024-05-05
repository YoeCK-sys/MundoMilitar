
import React from 'react';



export default function YoelEmpire() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#1e1e1e] text-white">
      <header className="relative flex h-[80vh] w-full items-center justify-center">
        <div className="absolute inset-0 bg-[url(/background.jpg)] bg-cover bg-center blur-[100px] brightness-50" />
        <div className="z-10 space-y-6 text-center">
          <h1 className="text-5xl font-bold tracking-wider text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            YoelEmpire
          </h1>
          <p className="text-2xl font-medium text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
            Minecraft Bedrock Server
          </p>
          <a
            className="inline-flex items-center rounded-full bg-[#00ffff] px-6 py-3 font-medium text-black transition-colors hover:bg-[#00cccc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2"
            href="#"
          >
            Join Now
          </a>
        </div>
      </header>
      <section className="bg-[#1e1e1e] py-20">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Features
            </h2>
            <p className="text-lg font-medium text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
              Discover the best Minecraft experience on YoelEmpire
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ffff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffff] text-black">
                <GamepadIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Exciting Gameplay</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                Immerse yourself in a thrilling Minecraft adventure with our custom-built features and plugins.
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#ff00ff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff00ff] text-black">
                <PuzzleIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Unique Challenges</h3>
              <p className="text-sm font-medium text-[#00ffff]">
                Explore our intricate network of custom-designed maps and challenges to test your skills.
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ff00]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff00] text-black">
                <UserIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Thriving Community</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                Join a vibrant community of Minecraft enthusiasts and make new friends on our Discord server.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1e1e1e] py-20">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
              How to Join
            </h2>
            <p className="text-lg font-medium text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Follow these simple steps to start your adventure on YoelEmpire
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-[#1e1e1e] p-6 shadow-lg shadow-[#ff00ff]/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff00ff] text-black">
                <DownloadIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Download Minecraft</h3>
              <p className="text-sm font-medium text-[#00ffff]">
                Make sure you have the latest version of Minecraft Bedrock Edition installed on your device.
              </p>
            </div>
            <div className="rounded-lg bg-[#1e1e1e] p-6 shadow-lg shadow-[#00ffff]/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffff] text-black">
                <CompassIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Join the Server</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                Connect to the YoelEmpire server by entering the IP address in your Minecraft client.
              </p>
            </div>
            <div className="rounded-lg bg-[#1e1e1e] p-6 shadow-lg shadow-[#00ff00]/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff00] text-black">
                <DiscIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Join our Discord</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                Connect with our community and stay up-to-date with the latest news and events on our Discord server.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider text-[#00ff00] drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
              Latest Updates
            </h2>
            <p className="text-lg font-medium text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
              Check out our latest updates and improvements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ff00]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff00] text-black">
                <GiftIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">New Rewards System</h3>
              <p className="text-sm font-medium text-[#00ffff]">
                Earn exciting rewards and prizes by completing challenges and participating in events.
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ffff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffff] text-black">
                <PuzzleIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expanded Map Exploration</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                Discover new and exciting areas to explore with our latest map expansions.
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#ff00ff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff00ff] text-black">
                <GamepadIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Enhanced Gameplay</h3>
              <p className="text-sm font-medium text-[#00ff00]">
                Experience improved mechanics, new features, and a more immersive gameplay experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Server Information
            </h2>
            <p className="text-lg font-medium text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
              Get to know more about our Minecraft server
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ffff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffff] text-black">
                <GlobeIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Server IP</h3>
              <p className="text-sm font-medium text-[#ff00ff]">play.yoelempire.com</p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#ff00ff]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff00ff] text-black">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Player Count</h3>
              <p className="text-sm font-medium text-[#00ffff]">Online: 120 | Max: 250</p>
            </div>
            <div className="rounded-lg bg-[#0a0a0a] p-6 shadow-lg shadow-[#00ff00]/20 transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff00] text-black">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Server Version</h3>
              <p className="text-sm font-medium text-[#ff00ff]">1.18.2</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#1e1e1e] py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg font-medium text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
            &copy; 2023 YoelEmpire. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

// Feather Icons
function GamepadIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-gamepad ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3a2 2 0 00-2 2v16a2 2 0 002 2h18a2 2 0 002-2V4a2 2 0 00-2-2zM7 4v6m0 0V4m0 6l-3 3m3-3l3 3m7-3v6m0 0V4m0 6l-3 3m3-3l3 3" />
    </svg>
  );
}

function PuzzleIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-puzzle ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function UserIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-user ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a5 5 0 110 10 5 5 0 010-10zM20 22a2 2 0 01-2-2c0-3.866-3.134-7-7-7s-7 3.134-7 7a2 2 0 01-2 2" />
    </svg>
  );
}

function DownloadIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-download ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CompassIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-compass ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 8 8 16 16 16 12 8" />
    </svg>
  );
}

function DiscIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-disc ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GiftIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-gift ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M7 12v-5a5 5 0 0110 0v5" />
    </svg>
  );
}

function UserGroupIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-users ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 7a4 4 0 00-8 0" />
      <path d="M9 12a4 4 0 011-2 4 4 0 018 0 4 4 0 011 2" />
      <path d="M3 12v3a2 2 0 002 2h1m14 0h1a2 2 0 002-2v-3m-8-5v-2a4 4 0 00-8 0v2m8 0h-2m-4 0h-2" />
    </svg>
  );
}

function ShieldCheckIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-shield-check ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 11.5l3 3 6-6" />
      <path d="M18 7.6l-6 6-3-3" />
    </svg>
  );
}

function GlobeIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`feather feather-globe ${props.className}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 00-7.6 3.6A15.3 15.3 0 0012 22a15.3 15.3 0 007.6-3.6A15.3 15.3 0 0012 2z" />
    </svg>
  );
}
