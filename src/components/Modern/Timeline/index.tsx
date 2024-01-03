interface TrackTimelineProps {
  durationMs: number;
  progressMs: number;
  isPlaying: boolean;
}

const TrackTimeline: React.FC<TrackTimelineProps> = ({ durationMs, progressMs, isPlaying }) => {
  const progressPercentage = isPlaying ? (progressMs / durationMs) * 100 : 0;

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--gray-700)', height: '4px', position: 'relative' }}>
      <div
        style={{
          width: `${progressPercentage}%`,
          backgroundColor: 'var(--primary-color)',
          height: '100%',
        }}
      ></div>
      <div style={{ fontSize: '1rem', position: 'absolute', left: '2rem', top: '100%', marginTop: '1rem', color: 'white' }}>
        <span>{formatTime(progressMs)}</span>
      </div>
      <div style={{ fontSize: '1rem', position: 'absolute', right: '2rem', top: '100%', marginTop: '1rem', color: 'white' }}>
        <span>{formatTime(durationMs)}</span>
      </div>
    </div>
  );
};

export default TrackTimeline;
