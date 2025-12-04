import { useEffect, useState } from 'react';
import { LiveKitRoom, useTracks, RoomAudioRenderer, ParticipantTile } from '@livekit/components-react';
import '@livekit/components-styles';
import { streamService } from '@/services/streamService';
import { Loader2, Radio, Users } from 'lucide-react';
import { Track } from 'livekit-client';

const LIVEKIT_URL = "wss://boost-era-iye447y7.livekit.cloud";

// Custom viewer component - shows only expert video
function ViewerLayout() {
    const tracks = useTracks([
        { source: Track.Source.Camera, withPlaceholder: true },
        { source: Track.Source.ScreenShare, withPlaceholder: false },
    ]);

    // Filter to show only the host/expert (not guest viewers)
    const expertTrack = tracks.find(track =>
        track.participant.identity.includes('live-stream')
    ) || tracks[0]; // Fallback to first track if metadata not found

    if (!expertTrack) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-cyan-400" />
                    <p>Connecting to expert...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative bg-slate-900">
            <div className="w-full h-full">
                {expertTrack.publication && (
                    <video
                        ref={(el) => {
                            if (el && expertTrack.publication?.track) {
                                expertTrack.publication.track.attach(el);
                            }
                        }}
                        className="w-full h-full object-cover"
                        autoPlay
                        playsInline
                    />
                )}
            </div>
            <RoomAudioRenderer />
        </div>
    );
}

export default function LiveStreamPlayer() {
    const [liveData, setLiveData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStream = async () => {
            try {
                const data = await streamService.getLiveStream();
                setLiveData(data);
            } catch (error) {
                console.error("Failed to fetch stream", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStream();
        const interval = setInterval(fetchStream, 30000); // Poll every 30s
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-cyan-500 w-8 h-8" /></div>;

    if (liveData?.isLive && liveData?.token) {
        return (
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
                <div className="h-[500px] relative">
                    <LiveKitRoom
                        token={liveData.token}
                        serverUrl={LIVEKIT_URL}
                        connect={true}
                        data-lk-theme="default"
                        style={{ height: '100%' }}
                    >
                        <ViewerLayout />
                    </LiveKitRoom>
                </div>
                <div className="bg-slate-800 p-4 text-white flex items-center gap-4">
                    <div className="relative">
                        <img src={liveData.expert.profileImage || "https://github.com/shadcn.png"} className="w-12 h-12 rounded-full border-2 border-red-500 object-cover" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse"></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            {liveData.expert.name}
                            <span className="bg-red-600 text-xs px-2 py-0.5 rounded text-white animate-pulse font-bold">LIVE</span>
                        </h3>
                        <p className="text-sm text-slate-400">{liveData.expert.specialization?.join(", ") || "Expert"}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback to Playlist
    return (
        <div className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 bg-slate-800 text-white border-b border-slate-700 flex justify-between items-center">
                <h3 className="font-bold flex items-center gap-2 text-lg">
                    <Radio className="text-cyan-400 w-5 h-5" />
                    Expert Insights & Tips
                </h3>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">Pre-recorded</span>
            </div>
            <div className="aspect-video w-full">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bEg5ySTUGxE"
                    title="Digital Marketing Tips"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
