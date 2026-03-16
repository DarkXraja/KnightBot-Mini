/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917684990894'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot', 'darkxraja'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGEGuEtERy0UE8Y4IurEPNBRQyKW6KFR6wn/fQKen52F3tvetKE7kyZOZp76DqkYNdGAHlO8AE3QJKeyPtMMQKEBrkwQSMARxSEOggG5RCiNzWh14NOc9TTAxlgdnXjsmsyi8ubq0saJ3dXkVve0LuA8Bbl8LFP0G8KLCNXTmZyn2DlSykNcYUY5b63bR9vScG/K75piaLZQ58wLuPWKICKrSKc5gCUlYOLDbhIh8jb5tMJvBJupStopf51EcTDa1wS6Wi3JqSXTvjOmocDtflbn0a/T99YHhxGnuyjW/p2UpdBWeSBxnCJ20mHPINrOKvXljQ5Of9BuUVjC2Y1hRRLsv635c874w8w2trd7L92quYhNfmvL4fh0h3TQCfcwfA8sxgqD5InHixOpAH70NJCyZo4uUwag6TIPMj8LlSY6zbs25hje7mN6vxDfkIyvn/6O7uMm2R2/DssuTwcn6nrG5hXzZNq9cXJtup1m1uBCLRZKxy6/RLxIm20qjXBKxc5ClrBXkeVpb68tba838W9z4MzgvJzfXv37SD2lLfsdSUNuzKr5KrGDweLreNrlhpKQsuGNOSNBaU9vbRYcsC8R2UtpiEac59rvjDXumZsv2ktQuAzljJWZ6JppIbAyr064vj4nOsLNjoLD3ISAwRQ0lIUV11d+NGW4IwvjiwohA+pAXjJoVh8ozTu29sQ2Op2vhbaq38wQz+xPLXV9fN/5hG5l4yh5fwBBgUkewaWBsoYbWpFvCpglT2ADlz7+GoII3+jSub8exQ5Ag0lCvanFRh/GHqx8/wyiq24q6XRXp/QESoDCf15BSVKVNr2NbhSTK0AXqWUgboCRh0cCfE0ICY6BQ0sKfW6vXcS+8yy98V3Z1MATlwxAUAwVM2Ak75hlG4rmJwgp/NN+uPWyI8bcKUjAExbOMZxiGnbAsJ8gS2xf29/efBHu8GNIQFQ1QgO5000ZMZ9P5fsvJzGymTlNVT1XwOdBHMp7Kx6JXSU450PUtczzy4nnHkXx31Q5RNm3HHLUO85JOTufZjHn5BxCggF0XXNvsFrlXWGE/4ys7PVVn1X6rjy3xT07Z7eAyv6Sr02Qw8KmTMEd0czKxZIVluLJRCuPA1KxVCq8L4eCbc2N3eMRoCGJ4QRH8tVlQj69Vro38fUzqY955TnrqEknXTqtpRm2XSQeySARzVa6S14HajbnJrOb08iBdN8tLqzaFh/3ZMid+Od/nOYR6mGvqM7OPnSl+vFXokabeqv4zQfCx+lXYG/jf1j2J9wlj7sNfMH48Jv+ykFoAi/mgw5c0Pa9ms/UaT2ORZyL1ENi7BaXSjnVPJPFPWkbB/f7XEOAipElNSqCAsIpJjWIwBKRu+8jaVVL/ppmueraxTd1+8iJsqPq5BntUwoaGJQYKK0mcKDKszD2rNqTGVthkPQCfzFfg/jemTTGsUwcAAA==
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: false,
    autoReact: true,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
