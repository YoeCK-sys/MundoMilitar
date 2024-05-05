
export default function YoelEmpire() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#1e1e1e] text-white">
      <header className="relative flex h-[80vh] w-full items-center justify-center">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center blur-[100px] brightness-50" />
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
      <section className="bg-[#0a0a0a] py-20">
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
      <section className="bg-[#1e1e1e] py-20">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-[#1e1e1e] p-6 shadow-lg shadow-[#00ffff]/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffff] text-black">
                <ServerIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Server Details</h3>
              <p className="text-sm font-medium text-[#ff00ff]">
                YoelEmpire is a Minecraft Bedrock Edition server with a focus on custom features, challenging gameplay,
                and a thriving community.
              </p>
            </div>
            <div className="rounded-lg bg-[#1e1e1e] p-6 shadow-lg shadow-[#ff00ff]/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff00ff] text-black">
                <DiscIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Join our Discord</h3>
              <p className="text-sm font-medium text-[#00ffff]">
                Connect with our community, stay up-to-date with the latest news, and participate in exciting events on
                our Discord server.
              </p>
              <a
                className="mt-4 inline-flex items-center rounded-full bg-[#ff00ff] px-6 py-3 font-medium text-black transition-colors hover:bg-[#cc00cc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2"
                href="#"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0a0a0a] py-8 text-center text-sm font-medium text-[#00ffff]">
        © 2024 YoelEmpire. All rights reserved.
      </footer>
    </main>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
