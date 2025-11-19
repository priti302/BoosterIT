const { AccessToken } = require('livekit-server-sdk'); // :contentReference[oaicite:1]{index=1}

async function createLivekitToken({ roomName, identity, name, isHost }) {
  if (!roomName || !identity) {
    throw new Error('roomName and identity required');
  }

  const at = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity,        // unique per user
      name,            // optional display name (client can use)
      ttl: '2h',       // token validity duration
    }
  );

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
    roomAdmin: !!isHost,
  });

  const token = await at.toJwt();
  return token;
}

module.exports = { createLivekitToken };
