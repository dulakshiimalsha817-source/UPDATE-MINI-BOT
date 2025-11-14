module.exports = async (sock, msg) => {
  try {
    const from = msg.key.remoteJid;
    const type = Object.keys(msg.message)[0];
    const body =
      type === "conversation"
        ? msg.message.conversation
        : msg.message[type]?.text || "";
    const command = body.toLowerCase().split(" ")[0];

    switch (command) {
      case "menu":
        await sock.sendMessage(from, { text: `💠 *MENU*
• setting
• alive
• song download
• tiktok download
• yt download
• auto recat
• auto status reply
• hidetag
• tagall` });
        break;
      case "alive":
        await sock.sendMessage(from, { text: "Bot is alive 🟢" });
        break;
      case "setting":
        await sock.sendMessage(from, { text: "⚙️ Settings menu" });
        break;
      case "song":
        await sock.sendMessage(from, { text: "🎵 Song downloading…" });
        break;
      case "tiktok":
        await sock.sendMessage(from, { text: "📲 TikTok video downloading…" });
        break;
      case "yt":
        await sock.sendMessage(from, { text: "▶️ YouTube video downloading…" });
        break;
      case "hidetag":
        await sock.sendMessage(from, {
          text: "***HIDETAG MESSAGE***",
          mentions: [from],
        });
        break;
      case "tagall":
        await sock.sendMessage(from, {
          text: "Tagging everyone",
          mentions: [from],
        });
        break;
    }
  } catch (e) {
    console.log("Error in msg.js:", e);
  }
};
