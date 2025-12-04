import { useState } from 'react';
import { LiveKitRoom, useTracks, RoomAudioRenderer, useParticipants, ControlBar, Chat } from '@livekit/components-react';
import '@livekit/components-styles';
import { streamService } from '@/services/streamService';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Video, VideoOff, Users as UsersIcon, Eye, MessageSquare, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Track } from 'livekit-client';

const LIVEKIT_URL = "wss://boost-era-iye447y7.livekit.cloud";

// Custom Expert Layout - shows expert video + viewer list + chat
function ExpertLayout() {
    const [showChat, setShowChat] = useState(false);
    const tracks = useTracks([
        { source: Track.Source.Camera, withPlaceholder: true },
    ]);
    const participants = useParticipants();

    // Get expert's own track
    const myTrack = tracks.find(t => t.participant.isLocal);

    // Get viewers (non-local participants)
    const viewers = participants.filter(p => !p.isLocal);

    return (
        <div className="flex h-full relative">
            {/* Main Video Area */}
            <div className="flex-1 relative bg-slate-950">
                {myTrack?.publication && (
                    <video
                        ref={(el) => {
                            if (el && myTrack.publication?.track) {
                                myTrack.publication.track.attach(el);
                            }
                        }}
                        className="w-full h-full object-cover"
                        autoPlay
                        playsInline
                        muted
                    />
                )}
                <RoomAudioRenderer />

                {/* Control Bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-center gap-4">
                        <ControlBar />
                        <Button
                            onClick={() => setShowChat(!showChat)}
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Chat
                        </Button>
                    </div>
                </div>
            </div>

            {/* Viewers Sidebar */}
            <div className="w-80 bg-slate-900 border-l border-slate-800 overflow-y-auto flex flex-col">
                <div className="p-4 border-b border-slate-800 bg-slate-800/50">
                    <div className="flex items-center gap-2 text-white">
                        <Eye className="w-5 h-5 text-cyan-400" />
                        <h3 className="font-bold text-lg">Viewers ({viewers.length})</h3>
                    </div>
                </div>
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                    {viewers.length === 0 ? (
                        <div className="text-center text-slate-500 py-8">
                            <UsersIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No viewers yet</p>
                            <p className="text-xs mt-1">Waiting for viewers to join...</p>
                        </div>
                    ) : (
                        viewers.map((viewer) => (
                            <div key={viewer.identity} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                    {viewer.name?.[0]?.toUpperCase() || 'G'}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-medium text-sm truncate">
                                        {viewer.name || `Guest ${viewer.identity.slice(-4)}`}
                                    </p>
                                    <p className="text-slate-400 text-xs">Watching</p>
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Chat Sidebar (toggleable) */}
            {showChat && (
                <div className="absolute right-80 top-0 bottom-0 w-96 bg-slate-900 border-l border-slate-800 shadow-2xl animate-slide-in-right">
                    <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-800/50">
                        <div className="flex items-center gap-2 text-white">
                            <MessageSquare className="w-5 h-5 text-cyan-400" />
                            <h3 className="font-bold text-lg">Chat</h3>
                        </div>
                        <button onClick={() => setShowChat(false)} className="text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="h-[calc(100%-4rem)]">
                        <Chat />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ExpertGoLive() {
    const [token, setToken] = useState("");
    const [isLive, setIsLive] = useState(false);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleGoLive = async () => {
        setLoading(true);
        try {
            const authToken = localStorage.getItem('token');
            if (!authToken) throw new Error("Not authenticated");

            const data = await streamService.goLive(authToken);
            setToken(data.token);
            setIsLive(true);
            toast({ title: "You are live!", description: "Your stream is now visible on the homepage." });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    const handleEndLive = async () => {
        setLoading(true);
        try {
            const authToken = localStorage.getItem('token');
            if (!authToken) throw new Error("Not authenticated");

            await streamService.endLive(authToken);
            setToken("");
            setIsLive(false);
            toast({ title: "Stream ended", description: "You are no longer live." });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="container mx-auto py-20 px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Expert Live Studio</h1>
                        <p className="text-slate-500">Share your knowledge with the world.</p>
                    </div>
                    {isLive ? (
                        <Button variant="destructive" onClick={handleEndLive} disabled={loading} className="gap-2">
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <VideoOff className="h-4 w-4" />}
                            End Stream
                        </Button>
                    ) : (
                        <Button className="bg-green-600 hover:bg-green-700 gap-2" onClick={handleGoLive} disabled={loading}>
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Video className="h-4 w-4" />}
                            Go Live
                        </Button>
                    )}
                </div>

                <div className="bg-slate-900 rounded-xl overflow-hidden min-h-[600px] border border-slate-800 relative shadow-2xl">
                    {isLive && token ? (
                        <LiveKitRoom
                            token={token}
                            serverUrl={LIVEKIT_URL}
                            connect={true}
                            data-lk-theme="default"
                            style={{ height: '600px' }}
                        >
                            <ExpertLayout />
                        </LiveKitRoom>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[600px] text-slate-400">
                            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                <Video className="w-10 h-10 opacity-50" />
                            </div>
                            <p className="text-2xl font-semibold mb-2">Ready to go live?</p>
                            <p className="text-slate-500">Click "Go Live" to start streaming to the homepage.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
