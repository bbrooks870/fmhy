export const MARKDOWN_RESOURCES = [
  {
    title: "Home",
    urlEnding: "",
    emoji: "👋",
    dlForSearch: false,
  },
  {
    title: "Adblock, Privacy",
    urlEnding: "AdblockVPNGuide",
    emoji: "📛",
    dlForSearch: true,
  },
  {
    title: "AI Tools",
    urlEnding: "AI",
    emoji: "🤖",
    dlForSearch: true,
  },
  {
    title: "Android, iOS",
    urlEnding: "Android-iOSGuide",
    emoji: "📱",
    dlForSearch: true,
  },
  {
    title: "Base64",
    urlEnding: "base64",
    emoji: "🔗",
    dlForSearch: false,
  },
  {
    title: "Beginners Guide",
    urlEnding: "Beginners-Guide",
    emoji: "🏴‍☠️",
    dlForSearch: false,
  },
  {
    title: "Books, Comics, Manga",
    urlEnding: "ReadingPiracyGuide",
    emoji: "📗",
    dlForSearch: true,
  },

  {
    title: "Developer Tools",
    urlEnding: "DEVTools",
    emoji: "👨‍💻",
    dlForSearch: true,
  },
  {
    title: "Downloading",
    urlEnding: "DownloadPiracyGuide",
    emoji: "💾",
    dlForSearch: true,
  },
  {
    title: "Educational",
    urlEnding: "EDUPiracyGuide",
    emoji: "🧠",
    dlForSearch: true,
  },

  {
    title: "Gaming, Emulation",
    urlEnding: "GamingPiracyGuide",
    emoji: "🎮",
    dlForSearch: true,
  },
  {
    title: "Image Tools",
    urlEnding: "img-tools",
    emoji: "🖼️",
    dlForSearch: true,
  },
  {
    title: "Linux, MacOS",
    urlEnding: "LinuxGuide",
    emoji: "🐧",
    dlForSearch: true,
  },
  {
    title: "Miscellaneous",
    urlEnding: "MISCGuide",
    emoji: "📂",
    dlForSearch: true,
  },
  {
    title: "Movies, TV, Anime, Sports",
    urlEnding: "VideoPiracyGuide",
    emoji: "📺",
    dlForSearch: true,
  },
  {
    title: "Music, Podcasts, Radio",
    urlEnding: "AudioPiracyGuide",
    emoji: "🎵",
    dlForSearch: true,
  },

  {
    title: "Non-English",
    urlEnding: "Non-English",
    emoji: "🌍",
    dlForSearch: true,
  },

  {
    title: "Storage",
    urlEnding: "STORAGE",
    emoji: "📦",
    dlForSearch: true,
  },
  {
    title: "Tools",
    urlEnding: "TOOLSGuide",
    emoji: "🔧",
    dlForSearch: true,
  },
  {
    title: "Torrenting",
    urlEnding: "TorrentPiracyGuide",
    emoji: "🌀",
    dlForSearch: true,
  },
  {
    title: "Unsafe Sites",
    urlEnding: "UnsafeSites",
    emoji: "🚫",
    dlForSearch: false,
  },
  {
    title: "NSFW",
    urlEnding: "NSFWPiracy",
    emoji: "🔞",
    dlForSearch: true,
  },
];

const MARKDOWN_URL_ENDING_TO_EMOJI_MAPPING: { [key: string]: string } = {};

MARKDOWN_RESOURCES.forEach((resource) => {
  MARKDOWN_URL_ENDING_TO_EMOJI_MAPPING[resource.urlEnding.toLowerCase()] =
    resource.emoji;
});

export { MARKDOWN_URL_ENDING_TO_EMOJI_MAPPING };

// CATEGORY NAMES DONT MATCH. NEED TO FIX
const CATEGORY_SUBCATEGORY_MAPPING = [
  {
    category: "adblock",
    subcategory: {
      Adblocking: [
        "Adblocking Extensions",
        "DNS Adblocking",
        "Linux Adblocking",
        "Mac Adblocking",
        "Android Adblocking",
        "iOS Adblocking",
      ],
      Antivirus: [],
      Privacy: [
        "Privacy Tools",
        "Privacy Extensions",
        "Browser Tools",
        "Search Engines",
        "Email Services",
        "Linux Privacy",
        "Mac Privacy",
        "Android Privacy",
        "iOS Privacy",
      ],
      VPN: [],
      Proxy: ["Proxy Apps", "Proxy Sites"],
    },
  },
  {
    category: "ai tools",
    subcategory: {
      "AI Chatbots": ["ChatGPT Tools", "ChatGPT Prompts"],
      "AI Indexes": [],
      "Text Generators": [
        "Text Rephrashing",
        "Summary Generators",
        "Grammar Check",
        "Text to Speech",
        "Plagiarism Detection",
        "AI Text Detection",
      ],
      "Image Generators": [
        "Image Restoration",
        "Image Colorization",
        "Image Upscaling",
        "Background Removal",
        "Generator Guides",
      ],
      "Audio Generators": ["Voice Change / Clone"],
      "Machine Learning": [],
    },
  },
  {
    category: "androud ios",
    subcategory: {
      "Android Adblocking": [],
      "Android Privacy": [],
      "Android APKs": [],
      "Android Emulators": [],
      "Android Tools": [],
      "Android Gaming": [],
      "Android Torrenting": [],
      "Android Reading": [],
      "Android Audio": ["Android Podcasts / Radio", "Android Relaxation"],
      "Android Streaming": ["Android Anime", "Android Live TV"],
      "iOS Jailbreaking": [],
      "iOS Adblocking": [],
      "iOS Privacy": [],
      "iOS Apps": [],
      "iOS Tools": [],
      "iOS Audio": ["iOS Podcasts / Radio", "iOS Relaxation"],
      "iOS Streaming": ["iOS Anime", "iOS Live TV"],
      "iOS Torrenting": [],
      "iOS Reading": [],
    },
  },

  {
    category: "books comics",
    subcategory: {
      "Audiobook Sites": [],
      "Reading Sites": [
        "PDF Search",
        "Classic Sites",
        "Religion / Esoterica",
        "Special Interest",
      ],
      "Educational Sites": [
        "History Sites",
        "Programming Sites",
        "Documents / Articles",
        "Manual Sites",
        "Reference Sites",
      ],
      "Visual Media Sites": [
        "Comic Sites",
        "Manga Sites",
        "Manhua / Manhwa",
        "Light Novel Sites",
        "Magazine Sites",
        "Newspaper Sites",
      ],
      "Tracking / Discovery": [],
      "Ebook Readers": [],
      "Helpful Sites / Apps": [],
    },
  },

  {
    category: "devtools",
    subcategory: {
      "Learning / Cheat Sheets": [
        "Web Development",
        "Game Development",
        "App Development",
        "Data Structures",
        "Data Science",
        "Python",
        "C / C++",
        "Cybersecurity",
        "Linux / CLI",
        "Git",
        "UI / UX",
      ],
      "Developer Tools": [
        "Web Dev Tools",
        "Software Dev Tools",
        "App Dev Tools",
        "Game Dev Tools",
        "Git Tools",
        "CLI Tools",
        "Color Schemes",
        "Machine Learning",
      ],
      "Programming / Coding": [
        "IDEs / Code Editors",
        "Cloud IDEs / Collab",
        "Markup Tools",
        "API Tools",
      ],
    },
  },

  {
    category: "dowload",
    subcategory: {
      "Download Directories": [],
      "Download Sites": [
        "Search Sites",
        "Video Sites",
        "Anime Sites",
        "Educational Sites",
        "Game Sites",
        "Audio Sites",
      ],
      "Software Sites": ["Freeware Sites", "Linux Software", "Mac Software"],
      "File Sharing Apps": [],
      Usenet: ["Indexers", "Providers", "Downloaders"],
      "File Leeches": [],
      "File Tools": [],
    },
  },
  {
    category: "educational",
    subcategory: {
      Streaming: ["Courses", "Documentaries"],
      Downloading: ["Courses", "Documentaries"],
      Torrenting: ["Courses", "Documentaries"],
      Reading: [
        "History Books",
        "Programming Books",
        "Documents / Articles",
        "Manual Sites",
        "Reference Sites",
      ],
      Games: [],
      Math: [],
      Physics: [],
      Biology: [],
      Chemistry: [],
      "World Data": [],
      History: [],
      Space: [],
      Art: [],
      "Virtual Tours": [],
      Development: [],
      "Language Learning": [
        "Multi-Language",
        "English",
        "Japanese",
        "Korean",
        "Chinese",
        "European",
        "South Asian",
        "Other Languages",
      ],
      "Music Learning": [],
      "Educational Tools": [],
    },
  },
  {
    category: "gaming",
    subcategory: {
      "Download Games": [
        "Game Repacks",
        "DLC Unlockers",
        "Single Games",
        " Linux Games",
        " Mac Games",
        " Android Games",
      ],
      "Emulation / ROMs": [
        "Emulators",
        "ROM Sites",
        "Browser Emulators",
        "Arcade / Retro",
      ],
      "Browser Games": [
        "Multiplayer",
        "Board / Card / Dice",
        "Puzzle Games",
        "Incremental / Idle",
        "Guessing Games",
        "Flash Games",
      ],
      Homebrew: [],
      "Game Mods": [],
      "Tracking / Discovery": [],
      "Gaming Tools": [
        "Optimization Tools",
        "Multiplayer Tools",
        "Steam / Epic",
        "GTA Tools",
        "Minecraft Tools",
        "Terraria Tools",
        "Tabletop Tools",
        "Git Gud",
      ],
    },
  },
  {
    category: "image tools",
    subcategory: {
      "Image Editing": ["Resize / Compress", "Restoration"],
      "Image Generation": [
        "GIF Tools",
        " Meme Makers",
        "Painting / Drawing",
        "Pixel Art",
      ],
      "Download Images": ["Wallpapers", "3D Models"],
      "Image Tools": [
        " Hosting / Viewing",
        "Screenshot Tools",
        " Image Converters",
        "Instagram Tools",
        "Photo Forensics",
      ],
      "Art Education": [],
    },
  },
  {
    category: "linux macos",
    subcategory: {
      "Linux Tools / Apps": [],
      "Linux Adblock / Privacy": [],
      "Linux Software": [],
      "Linux Gaming": [],
      "Mac Tools / Apps": [],
      "Mac Adblock / Privacy": [],
      "Mac Software": [],
      "Mac Gaming": [],
    },
  },
  {
    category: "misc",
    subcategory: {
      Indexes: [],
      "Piracy Discussion": [],
      "Free Stuff": [],
      "Fun Sites": [],
      News: [],
      Food: [],
      Gardening: [],
      " Health": [],
      Maps: [],
      " Fonts": [],
      Extensions: [
        "Multi Browser",
        "Firefox",
        "Chrome",
        "Safari",
        "Userscripts",
      ],
      Shopping: ["Electronics", "Games", "Price Tracking"],
    },
  },
  {
    category: "streaming",
    subcategory: {
      "Streaming Sites": [
        "Dedicated Hosts",
        "Multi Hosts",
        "Video Hosts",
        "Specialty Streaming",
        "Educational Streaming",
      ],
      "TV Streaming": [
        "Anime Streaming",
        "Cartoon Streaming",
        "Drama Streaming",
        "Sports Streaming",
        "Live TV / Sports",
        "Smart TV / Firestick",
      ],
      "Android Streaming": [],
      "iOS Streaming": [],
      "Download Sites": [
        "Drives / Directories",
        "Anime Downloading",
        "Educational Downloading",
      ],
      "Torrent Apps": [],
      "Torrent Sites": ["Anime Torrenting", "Educational Torrenting"],
      "Tracking / Discovery": [],
      Subtitles: [],
      "Helpful Sites / Tools": [],
    },
  },
  {
    category: "music podcast",
    subcategory: {
      "Audio Streaming": [
        "Streaming Apps",
        "Streaming Sites",
        "Podcasts / Radio",
        "Ambient / Relaxation",
      ],
      "Audio Downloading": ["Download Apps", "Download Sites"],
      "Audio Torrenting": [],
      "Android Audio": [],
      "iOS Audio": [],
      "Tracking / Discovery": [],
      "Audio Tools": [],
    },
  },
  {
    category: "tools",
    subcategory: {
      "General Tools": [
        "Text Tools",
        "Image Tools",
        "Video Tools",
        "Audio Tools",
        "Gaming Tools",
        "Educational Tools",
        "Career Tools",
        "AI Tools",
        "Developer Tools",
      ],
      "Internet Tools": [
        "Browsers",
        "Search Tools",
        "URL Tools",
        "Reddit Tools",
        "Discord Tools",
        "Telegram Tools",
        "YouTube Tools",
        "Twitch Tools",
        "Twitter Tools",
        "4chan Tools",
        "Facebook Tools",
        "Instagram Tools",
      ],
      "System Tools": [
        "Optimization",
        "Customization",
        "Tweaking",
        "File Tools",
        "Virtual Machines",
        "Terminal / CLI",
        "Linux Tools",
        "Mac Tools",
        "Android Tools",
        "iOS Tools",
      ],
    },
  },
  {
    category: "torrenting",
    subcategory: {
      "VPN Guide": [],
      "Torrent Clients": [
        "Remote Torrenting",
        "Android Clients",
        "iOS Clients",
      ],
      "Torrent Sites": [
        "Aggregators",
        "Video Sites",
        "Anime Sites",
        "Educational Sites",
        "Game Sites",
        "Audio Sites",
      ],
      "Tracker Invites": [],
      "Helpful Sites / Apps": [],
    },
  },
  {
    category: "storage",
    subcategory: {
      "3D Modeling Apps": [],
      "3D Models": [],
      "3DS ROMs": [],
      "4chan Archives": [],
      "Adblock Defenders": [],
      "Alternative Search Engines": [],
      "Alternative Software / App Sites": [],
      "Ambient Rain Sounds": [],
      "Android Audio Players": [],
      "Android Browsers": [],
      "Android File Explorers": [],
      "Android Note Apps": [],
      "Android Operating Systems": [],
      "Android TV IPTV Players": [],
      "Anime Download Apps": [],
      "Anonymous Image Boards": [],
      Antivirus: [],
      "App Launchers": [],
      "Audio Converters": [],
      "Audio Editors": [],
      "Audio Plugins": [],
      "Audio Servers": [],
      "Audio Synthesizers": [],
      "Automation Tools": [],
      "ASCII Art Creators": [],
      "Background Removers": [],
      "BetterDiscord Tools": [],
      "Blogging Platforms": [],
      "Browser eBook Readers": [],
      "Browser Games": [],
      "Browser Startpages": [],
      "Bookmark Managers": [],
      "Bulk File Renamers": [],
      "Calculator Sites": [],
      Calendars: [],
      "Calibre Libraries": [],
      "Calibre Tools": [],
      "Character / Word Counters": [],
      "Clipboard Managers": [],
      "Code Editors": [],
      "Coding Tutorials": [],
      "Color Palette Generators": [],
      "Color Pickers": [],
      "Collaboration Platforms": [],
      "Cooking YouTube Channels": [],
      "Copy Google Drives": [],
      "Command Line Shells": [],
      "Compression Programs": [],
      "Covers / Posters": [],
      "Customizable New Tab Page": [],
      "Custom Rich Discord Presence": [],
      "Data Visualization Tools": [],
      "Decentralized Social Networks": [],
      "Design Resources": [],
      "Developer Tools": [],
      "Dev YouTube Channels": [],
      "Discord Embed Generators": [],
      "Discord Server / Bot Lists": [],
      "Disk Usage Analyzers": [],
      "DNS Filters": [],
      "Domain Info Tools": [],
      "Docker Tools": [],
      "DOS Games": [],
      "Down Site Checkers": [],
      "Drive Formatting / File Deletion": [],
      "Email Clients": [],
      "Email Forwarding": [],
      "Email Sites": [],
      "Encode / Decode URLs": [],
      "Encrypted Android Messengers": [],
      "Encrypted Email Services": [],
      "Encrypted Messengers": [],
      "Encrypted XMPP Servers": [],
      "External Subs Player": [],
      "FFmpeg Tools": [],
      "Flash Player Tools": [],
      "F2P Games": [],
      "Fun Indexes": [],
      "Free DNS Servers": [],
      "Free VPN Configs": [],
      "Free Webhosting Sites": [],
      "File Backup Tools": [],
      "File Conversion Tools": [],
      "File Download Managers": [],
      "File Encryption Tools": [],
      "File Recovery Tools": [],
      "File Sharing Tools": [],
      "Nutrition / Ingredients": [],
      "FMovies Clones": [],
      "Game Download CSE": [],
      "Game Engines": [],
      "Game Guides": [],
      "Game Libraries / Launcher": [],
      "Game Mods": [],
      "GDrive File Sharing": [],
      "Git Projects": [],
      "Google Drive Search": [],
      "Google Piracy Discussion Groups": [],
      "Grammar Check": [],
      "Graph / Diagram Creators": [],
      "Graphic Design Tools": [],
      "Health News": [],
      "Hide YouTube Shorts": [],
      "Icon Download Sites": [],
      "Image Colorization": [],
      "Image Design Resources": [],
      "Image Download Extensions": [],
      "Image Editing": [],
      "Image Hosts": [],
      "Image Upscalers": [],
      "Image to Text": [],
      "Image Viewers": [],
      "Interactive Math Sites": [],
      "Internet Speed Test": [],
      "IP Checkers": [],
      "IP / DNS Leak Tests": [],
      "IP / Network Tools": [],
      "IPTV Playlists": [],
      "IPTV Tools": [],
      "IRC Book Sites": [],
      "Jigsaw Puzzles": [],
      "Keyboard Testers": [],
      "Kodi Tools": [],
      "LibGen  Mirrors": [],
      "LibGen Tools": [],
      "Link Protectors": [],
      "Linux Distros": [],
      "Linux Themes": [],
      "Live Webcams": [],
      "M3U Players": [],
      "M4UFree Clones": [],
      "Magic / Esoteric Telegram Ebooks": [],
      "Manga Downloaders": [],
      "Manga Readers": [],
      "Manually Scrape Sites": [],
      "Media File Data Automation": [],
      "Media Servers": [],
      "Mind Mapping": [],
      "Minecraft Mods": [],
      "Minecraft Optimization Mods": [],
      "Minecraft Servers": [],
      "Mouse Gestures": [],
      "Modded APKs": [],
      "Modded Minecraft Launchers": [],
      "Multi Image Tool Sites": [],
      "Multiplayer Fixes": [],
      Multireddits: [],
      "Multi Site Cloud Storage Managers": [],
      "Multi Site Video Downloaders": [],
      "Multi Text Tool Sites": [],
      "Multi Tool Sites": [],
      "Music Libraries / Players": [],
      "Name & Identity Generators": [],
      "News Feed Aggregators": [],
      "Note Taking / To Do Apps": [],
      "Office Suites": [],
      "Open Directory Search String Builder": [],
      "Open Source APKs": [],
      "Open Source Intelligence Indexes": [],
      Origami: [],
      "OS Emulators": [],
      "Password Managers": [],
      "Password Data Breach Check": [],
      Pastebins: [],
      "PDF Editors / Toolkits": [],
      "Periodic Tables": [],
      "Persian Video Download": [],
      "Personal Link Homepages": [],
      "Plagiarism Detection": [],
      "Piracy Site Proxies": [],
      "Poll Sites": [],
      "Popup Blocker Links": [],
      "Portable Apps": [],
      "Portuguese Browser Games": [],
      "Portuguese Bibles": [],
      "Portuguese Dictionaries / Thesaurus": [],
      "Portuguese Grammar Tips & Lessons": [],
      "Portuguese Recipes": [],
      "Presentation Tools": [],
      "Proxy Lists": [],
      "Privacy Based Browsers": [],
      "Privacy Guides": [],
      "Privacy Hardened Firefox": [],
      "Privacy Tools": [],
      "qBitorrent Tools": [],
      "QR Code Generators": [],
      "Radio Streaming Sites": [],
      "Random Image Sites": [],
      "Random Sites": [],
      "RARBG Mirrors": [],
      "Read Paywalled Articles": [],
      "Reddit Alternatives": [],
      "Reddit Desktop Apps": [],
      "Reddit Frontends": [],
      "Reddit Streams": [],
      "Remote Desktop Clients": [],
      "Remove Vocals": [],
      "Resume Makers": [],
      "Reverse Image Search": [],
      "Royalty Free Music": [],
      "RSS Feed Readers": [],
      "Satellite & Street View Maps": [],
      "Scan Files": [],
      "Screen Recorders": [],
      "Scene Release Trackers": [],
      "Searx Instances": [],
      "Send Anonymous Emails": [],
      "SEO Tools": [],
      "SFlix Clones": [],
      "SFX / Loops": [],
      "Sheet Music Sites": [],
      "Similar Site Indexes": [],
      "Site Analytics": [],
      "Site Legitimacy Check": [],
      "SockShare Clones": [],
      "Song Identification": [],
      "Skip Redirect": [],
      "SMS Verification Sites": [],
      "Soundcloud Downloaders": [],
      "Spanish Anime Telegram": [],
      "Sports Streaming": [],
      "Sports Streaming Subs": [],
      "Spotify Downloaders": [],
      "Spotify Tools": [],
      "Steam Workshop Downloaders": [],
      "Streaming Site CSE": [],
      "Stock Photo Sites": [],
      "Stock Video Sites": [],
      "Subreddit Discovery": [],
      "Summary Generator": [],
      "Sun / Moon Position": [],
      "Switch Homebrew Discord Servers": [],
      "Switch Roms": [],
      "System Monitors": [],
      "Tab Managers": [],
      "TeamDrive Generators": [],
      "Tech News": [],
      "Temp Email Sites": [],
      "Telegram Anime Downloads": [],
      "Telegram Audiobook Downloads": [],
      "Telegram Audio Download": [],
      "Telegram Audio Download Bots": [],
      "Telegram Bots": [],
      "Telegram Deezer Bots": [],
      "Telegram File Tools": [],
      "Telegram eBook Download": [],
      "Telegram Video Download": [],
      "Text Adventures": [],
      "Text / Code Collaboration": [],
      "Text Editors": [],
      "Text Rephrashing": [],
      "Text to Speech": [],
      "TikTok Video Downloaders": [],
      "Tor Search Engines": [],
      "Tor Tools": [],
      "Torrent to GDrive": [],
      "Tracker Lists": [],
      "Translation Sites": [],
      "Typing Lessons": [],
      "Twitch Adblockers": [],
      "uBlock Filters": [],
      "Udemy Coupons": [],
      "Unicode Font Generators": [],
      "Untouched APKs": [],
      "URL Unshorteners": [],
      "Userscript Managers": [],
      "VFX Sites": [],
      "Video Chat": [],
      "Video Converters": [],
      "Video Editors": [],
      "Video Hosting Sites": [],
      "Video Players": [],
      "Video Stream Sync": [],
      "Vim Tools": [],
      "VSCode Tools": [],
      Wallpapers: [],
      "WebFont Changer": [],
      "Website Creators": [],
      "Web Scraping / Archiving Tools": [],
      "Windows 10 Antispy Tools": [],
      "Windows 10 Debloater": [],
      "Windows Activation": [],
      "Windows File Explorers": [],
      "Windows ISO": [],
      "Window Tiling Programs": [],
      "Wordpress Themes": [],
      "Worldwide News Sites Index": [],
      "Youtube Android Apps": [],
      "YouTube Frontends": [],
      "YouTube Movies": [],
      "YouTube Music Players": [],
      "YouTube to MP3": [],
      "YouTube Video Downloaders": [],
      "YT-DL Tools": [],
    },
  },
  {
    category: "non-english",
    subcategory: {
      Arabic: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Bangla: ["Reading", "Streaming"],
      Bulgarian: ["Downloading", "Torrenting"],
      Burmese: ["Streaming", "Downloading"],
      Chinese: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Czech: ["Downloading", "Torrenting", "Streaming"],
      Danish: ["Streaming"],
      Filipino: ["Streaming"],
      Finnish: ["Streaming", "Reading"],
      French: ["Downloading", "Torrenting", "Streaming", "Reading"],
      German: ["Downloading", "Streaming", "Reading"],
      Georgian: ["Downloading", "Streaming"],
      Greek: ["Streaming"],
      Hebrew: ["Streaming"],
      Hindi: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Hungarian: ["Streaming"],
      Icelandic: ["Torrenting"],
      Indonesian: ["Downloading", "Streaming", "Reading"],
      Italian: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Japanese: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Korean: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Malay: ["Downloading", "Reading"],
      Norwegian: ["Streaming", "Reading"],
      Persian: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Polish: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Portuguese: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Romanian: ["Streaming", "Download"],
      Russian: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Slovak: ["Streaming"],
      Spanish: ["Downloading", "Torrenting", "Streaming", "Reading"],
      Swedish: ["Streaming"],
      Tamil: ["Streaming", "Downloading"],
      Telugu: ["Downloading"],
      Thai: ["Streaming", "Reading"],
      Turkish: ["Downloading", "Streaming", "Reading"],
      Ukrainian: ["Torrenting", "Reading"],
      "►Uzbek": ["Downloading", "Streaming", "Reading"],
      Vietnamese: ["Downloading", "Torrenting", "Streaming", "Reading"],
      "Multi Indian Languages": [],
      "Other Languages": [],
    },
  },
];

// make next image do this instead of hardcoding
export const blurDataUrlForLogo =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB3AHkDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAGBABAQEBAQAAAAAAAAAAAAAAAAECETH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4xWPUqx6D0ZdMuWXXKquNZGqrKjS6ig5acdO2nHQIAZZI6Zc46ZBcCAOCs+pVn0HfLrlxy6xVXGpjRSoqqiqI046ddOWgQAyyLyhcBcayAOLc+sbPQdsusccukqq6St6mU6DaiqtRaKjTlp0050EgIyKiWwHSCY0HNsYA65dJXLLpKKuVvU9OqNtTaWptBOnOr0igwBEGxgCmpAYAC8rlc4uAvreplOqrbU2tqaCamtqQAEQABowAABsXERUBTUxoFZWpqqmsaxEAAAAAAAAFRKoChjQE1SaqsY1iIAAAAAAAAKgA1oAxlBVYwEQAAAAAB//Z";

// these are actual data for development purposes
export const testData = `

# Android Adblocking

- ⭐ **[System Wide Adblocking](https://champagne.pages.dev/before-you-begin/important-tools/)** / [2](https://redd.it/oyfmr1) - System Wide Adblocking Guides
- ⭐ **[AdGuard Premium](https://github.com/nbats/FMHYedit/blob/main/base64.md#adguard-premium)** - Adblocking App
- ⭐ **[Bromite](https://github.com/uazo/bromite-buildtools/releases)** / [2](https://www.bromite.org/), [jQuarks](https://f-droid.org/packages/com.oF2pks.jquarks/) or [Monument](https://play.google.com/store/apps/details?id=br.marcelo.monumentbrowser) - Adblocking Browser / [Filter](https://github.com/xarantolus/filtrite)
- ⭐ **uBlock Origin** - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Yandex](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) & [Kiwi](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- ⭐ **[Hermit](https://play.google.com/store/apps/details?id=com.chimbori.hermitcrab)**, [NativeAlphaForAndroid](https://github.com/cylonid/NativeAlphaForAndroid), [MultiApp](https://github.com/WaxMoon/MultiApp) or [WebApps](https://github.com/tobykurien/WebApps/) - App Containers
- ⭐ **[Infinity](https://github.com/Docile-Alligator/Infinity-For-Reddit)** / [2](https://f-droid.org/en/packages/ml.docilealligator.infinityforreddit/), [Slide](https://github.com/Haptic-Apps/Slide) / [2](https://f-droid.org/en/packages/me.ccrama.redditslide/), [Redditoria](https://play.google.com/store/apps/details?id=com.kirkbushman.redditoria), [RIF](https://github.com/nbats/FMHYedit/blob/main/base64.md#rif), [RedReader](https://github.com/QuantumBadger/RedReader), [Redited](https://github.com/Blatzar/Redited), [Boost](https://boostforreddit.com/) or [Stealth](https://f-droid.org/packages/com.cosmos.unreddit/) / [2](https://gitlab.com/cosmosapps/stealth) - Ad Free Reddit Clients
- [Blokada](https://blokada.org/) / [v4](https://go.blokada.org/apk4) - Adblocking App
- [AdAway](https://adaway.org/) - Adblocking App / [GitHub](https://github.com/AdAway/AdAway)
- [ad-free](https://abertschi.github.io/ad-free/landing/) - Adblocking App
- [personalDNSfilter](https://www.zenz-solutions.de/personaldnsfilter-wp/) / [F-Droid](https://f-droid.org/packages/dnsfilter.android), [Rethink](https://rethinkdns.com/app) / [Blocklists](https://rethinkdns.com/app#blocklists), [BhanUpratpys](https://github.com/bhanupratapys/dnswarden), [DNS66](https://f-droid.org/en/packages/org.jak_linux.dns66/), [2](https://jak-linux.org/projects/dns66/) / [GitHub](https://github.com/julian-klode/dns66), [TrustDNS](https://surfshark.com/trust-dns) or [Pi-Droid](https://f-droid.org/en/packages/friimaind.piholedroid/) - DNS Adblocker
- [Daedalus](https://github.com/iTXTech/Daedalus) or [Smokescreen](https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen)- DNS Modifier
- [DNS Speed Test & Changer](https://github.com/nbats/FMHYedit/blob/main/base64.md#dns-speed-test--changer) - DNS Speed Test
- [DNS Changer](https://play.google.com/store/apps/details?id=com.technoapps.dnschanger) - DNS Changer
- [YouTubeAdAway](https://github.com/wanam/YouTubeAdAway) - YouTube Adblocker
- [Twidere](https://github.com/TwidereProject/Twidere-Android), [TwiFucker](https://github.com/Dr-TSNG/TwiFucker), [Aerowitter](https://aerowitter.com/) or [Twidere-X](https://github.com/TwidereProject/TwidereX-Android) - Ad-Free Twitter Apps
- [GoodbyeAds](https://github.com/jerryn70/GoodbyeAds) - Adblock Filters
- [Should I Answer?](http://www.shouldianswer.net/), [Yet Another Call Blocker](https://f-droid.org/en/packages/dummydomain.yetanothercallblocker/) / [GitLab](https://gitlab.com/xynngh/YetAnotherCallBlocker) or [Hiya](https://www.hiya.com/) - Block Spam Calls
- [The National Do Not Call Registry](https://www.donotcall.gov/) - Opt Out of Telemarketing Calls
- [Should I Call Back?](https://should-i-call-back.binary-person.dev/), [PhoneInfoga](https://github.com/sundowndev/PhoneInfoga) or [Scammer.Info](https://scammer.info/) / [Discord](https://discord.com/invite/nUThJjK) - Scam Numbers Database
- [Xtra](https://github.com/crackededed/Xtra), [PurpleTV](https://discord.gg/wrU7Ea6wvr), [TwitchMod](https://t.me/pubTw) or [Twire](https://f-droid.org/packages/com.perflyst.twire/) - Ad Free Twitch App
- [Killergram](https://github.com/Xposed-Modules-Repo/com.shatyuka.killergram) - Remove Sponsored Telegram Messages

---

# Android Privacy

- ⭐ **[Awesome Android Security](https://github.com/ashishb/android-security-awesome)** - Android Security Resources
- ⭐ **[Privacy Based Browsers](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_privacy_based_browsers)** - Browsers with a focus on Privacy
- ⭐ **[DPITunnel](https://github.com/nomoresat/DPITunnel-android)**, [PowerTunnel](https://github.com/krlvm/PowerTunnel-Android) or [Xandroid](https://github.com/XndroidDev/Xndroid) - Proxies
- ⭐ **[Aegis](https://getaegis.app/)**, [Authy](https://play.google.com/store/apps/details?id=com.authy.authy), [AuthenticatorPro](https://github.com/jamie-mh/AuthenticatorPro), [Mauth](https://github.com/X1nto/Mauth) or [andOTP](https://github.com/andOTP/andOTP) - Two-Factor Authentication
- [Gear VPN](https://github.com/KaustubhPatange/Gear-VPN), [Adguard VPN](https://adguard.com/en/blog/introducing-adguard-vpn-for-android.html), [GoatVPN](https://play.google.com/store/apps/details?id=com.secure.proxy.freevpn), [Vpnify](https://vpnifyapp.com/), [YourFreedomVPN](https://apkcombo.com/your-freedom-vpn-client/de.resolution.yf_android/), [GoFLy](https://play.google.com/store/apps/details?id=com.ambrose.overwall), [TempoVPN](https://play.google.com/store/apps/details?id=com.waves.tempovpn&gl=US), [VPN Door](https://play.google.com/store/apps/details?id=com.securesoft.vpndoor&hl=en_US&gl=US), [VPNhub](https://www.vpnhub.com/) or [Clash](https://github.com/Kr328/ClashForAndroid/) / [Profiles](https://rentry.co/2q3rn) - Free VPNs
- [Guardian Project](https://guardianproject.info/) / [2](https://guardianproject.info/fdroid/repo), [Divestos Apps](https://divestos.org/pages/recommended_apps) or [InviZible](https://github.com/Gedsh/InviZible) - Privacy Based Apps / Tools
- [Encrypted Messengers](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_encrypted_android_messengers) - Encrypted Android Messengers
- [Silence](https://silence.im/) or [Partisan SMS](https://github.com/wrwrabbit/Partisan-SMS) - Encrypt SMS/MMS Messages
- [Wickr](https://play.google.com/store/apps/details?id=com.wickr.pro&hl=en), [MySudo](https://mysudo.com/), [Jami](https://jami.net/), [Syphon](https://syphon.org/), [Mesibo](https://play.google.com/store/apps/details?id=com.mesibo.mesiboapplication) or [Element](https://schildi.chat/android/) / [2](https://play.google.com/store/apps/details?id=im.vector.app) - Encrypted Messaging / Video Calls
- [SmallTalk](https://github.com/ouchadam/small-talk) - Matrix Client
- [OVERSEC](https://www.oversec.io/) - Add Text / Image Encryption to any App
- [adb-clear-packages](https://gist.github.com/noseratio/e3b136401965289c4aab40fa60f3be41) - Clear Android Packages Data
- [SpoofCard](https://www.spoofcard.com/) - Disguise Caller ID
- [PilferShushJammer](https://github.com/kaputnikGo/PilferShushJammer) - Microphone Jamming Techniques
- [Catch the Man-in-the-Middle](https://play.google.com/store/apps/details?id=me.brax.certchecker) - Check if HTTPS Traffic is being Monitored
- [apk-mitm](https://github.com/shroudedcode/apk-mitm) - HTTPS Inspector
- [JustUseApp](https://justuseapp.com/) - Hide App Payments
- [Gadget Bridge](https://gadgetbridge.org/) - Connect to Smartwatches without Vendor Apps / Accounts
- [Amarok Hider](https://github.com/deltazefiro/Amarok-Hider/blob/main/README.md) - Hide Files / Apps
- [Extirpater](https://gitlab.com/divested-mobile/extirpater) - Make Deleted Files Irrecoverable
- [PrivacyBlur](https://privacyblur.app/) - Blur Sensitive Parts of Photos / [GitHub](https://github.com/MATHEMA-GmbH/privacyblur)
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif/tree/HEAD) or [exif-eraser](https://github.com/Tommy-Geenexus/exif-eraser) 
---

`;

export const isDevEnv = process.env.NODE_ENV === "development";

export const SEARCH_RESULTS_PER_PAGE = 30;

export const beginnersGuideFaqs = [
  {
    question: "How do I tell if a site or download is safe? Any tips?",
    answer: `Check out [Booty Guard](https://rentry.org/bootyguard) our basic safety guide. 
    Still feel unsure? Reach out to us via [Discord](https://redd.it/17f8msf) & make sure you've looked at sites/software we've listed as unsafe: [here](https://www.reddit.com/r/FREEMEDIAHECKYEAH/comments/10bh0h9/unsafe_sites_software_thread)`,
  },
  {
    question: "I don't know what seeding means or *insert other term*...",
    answer: `You will find almost all terms related to piracy & more on [The Piracy Glossary](https://rentry.org/the-piracy-glossary)
      Didn't find it and still confused? Reach out to us via [Divolt](https://redd.it/uto5vw).`,
  },

  {
    question: "How do I download Photoshop/Adobe Products for free?",
    answer: `You can download pre-cracked Adobe products from [M0nkrus](http://w14.monkrus.ws/) | [How to download from M0nkrus](https://rentry.co/adobesoftware) or Patch it yourself following these guides [here](https://www.reddit.com/r/GenP/wiki/index/) & for MacOS go [here](#macos)

!!!info M0nkrus is a well trusted and reputable source for adobe software in the piracy community.`,
  },
  {
    question: "How do I download windows / activate windows & Office?",
    answer: `For Windows check out this [section](#pirate-windows)
    For Office check these [guides](https://fmhy.pages.dev/storage/#office-suites)`,
  },
  {
    question: "Where do I find *insert game title / movie title*?",
    answer: `For movies check out [this](https://whereyouwatch.com) and for new movies it's a good idea to keep an eye on [r/movieleaks](https://reddit.com/r/movieleaks). 
      For sites to stream from check out this [section](#streaming).

!!!info Pirated releases generally happen after a movie is digitally released or released via Blu-Ray / DVD, which can take 3 months+ after initially playing in theaters.
      
For games use [Rezi](https://rezi.one) or any site listed [here](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/games/#wiki_.25BA_download_games) and for newly released games check [r/crackwatch](https://reddit.com/r/crackwatch).

!!!warning Please avoid downloading games from The Pirate Bay or any site listed: [here](https://www.reddit.com/r/FREEMEDIAHECKYEAH/comments/10bh0h9/unsafe_sites_software_thread)`,
  },
  {
    question: "How do I unlock *insert random game title* DLCs?",
    answer:
      "Use the tools listed [here](https://fmhy.pages.dev/gamingpiracyguide/#steam--epic) to unlock DLCs.",
  },
  {
    question:
      "Should I install & use *insert random anti-virus software* instead of using Windows Defender?",
    answer: `No don't do that, windows defender is more than good enough, you don't need another anti-virus, but if you're set on installing a secondary AV the one worth installing is Malwarebytes. Please read the note [here](#anti-virus). 

!!!warning Stay away from Avast, Norton and McAfee, these are "bloatware" and generally not safe software.`,
  },
  {
    question: "How do I bypass this paywalled article?",
    answer:
      "Use [this](https://bitbucket.org/magnolia1234/bypass-paywalls-firefox-clean/src/master/) / [2](https://gitlab.com/magnolia1234/bypass-paywalls-chrome-clean) to read the article easily.",
  },
  {
    question: "How do I download image from *insert stock site*?",
    answer: `You can use [this](https://downloader.la/) if this doesn't work you can find similar stock image downloaders [here](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_stock_photo_sites).`,
  },
];
