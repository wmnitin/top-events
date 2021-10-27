const StatusBadge = ({ sportsData }) => {
  return (
    <span className="badge" style={{ background: sportsData.color }}>
      {sportsData.name}
    </span>
  );
};

export default StatusBadge;
