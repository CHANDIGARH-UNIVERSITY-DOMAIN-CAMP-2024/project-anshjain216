import React from 'react';

const MatchCard = ({ match } : {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: any
}) => {
  const {
    tournament,
    season,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    status,
    startTimestamp,
  } = match;

  const matchDate = new Date(startTimestamp * 1000).toLocaleString();

  return (
    <div className="border rounded-lg p-4 shadow-md max-w-lg bg-white">
      <h2 className="text-lg font-bold text-gray-800">
        {tournament.name} - {season?.name}
      </h2>
      <p className="text-sm text-gray-500">{matchDate}</p>

      <div className="mt-4 flex items-center justify-between gap-x-4">
        {/* Home Team */}
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: homeTeam.teamColors.primary }}
          />
          <div className="ml-2">
            <p className="font-bold">{homeTeam.name}</p>
            <p className="text-xs text-gray-500">Score: {homeScore.current}</p>
          </div>
        </div>

        <p className="font-bold text-gray-700">vs</p>

        {/* Away Team */}
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: awayTeam.teamColors.primary }}
          />
          <div className="ml-2">
            <p className="font-bold">{awayTeam.name}</p>
            <p className="text-xs text-gray-500">Score: {awayScore.current}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className={`text-sm font-medium ${status.code === 6 ? 'text-green-500' : 'text-gray-500'}`}>
          {status.description}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
