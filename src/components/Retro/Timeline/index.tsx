interface TrackTimelineProps {
  durationMs: number;
  progressMs: number;
}

const TrackTimeline: React.FC<TrackTimelineProps> = ({ durationMs, progressMs}) => {
  let progressPercentage = 0;
  progressPercentage = (progressMs / durationMs) * 100;

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--gray-950)', height: '2.25rem', position: 'relative', marginBottom: '2rem', padding: '0.3125rem', background: 'var(--gray-950)', boxShadow: '-5px -5px 0px 0px var(--gray-50) inset' }}>
      <div
        style={{
          width: `${progressPercentage}%`,
          backgroundColor: 'var(--primary-color)',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default TrackTimeline;
