export default interface Game {
  id: string;
  basesOccupied: Array<number>;
  baseRunners: Array<string>;
  baseRunnerNames: Array<string>;
  outcomes: Array<string>;
  terminology: string;
  lastUpdate: string;
  rules: string;
  statsheet: string;
  awayPitcher: string;
  awayPitcherName: string;
  awayBatter: string | null;
  awayBatterName: string | null;
  awayTeam: string;
  awayTeamName: string;
  awayTeamNickname: string;
  awayTeamColor: string;
  awayTeamEmoji: string;
  awayOdds: number;
  awayStrikes: number;
  awayScore: number;
  awayTeamBatterCount: number;
  homePitcher: string;
  homePitcherName: string;
  homeBatter: string | null;
  homeBatterName: string | null;
  homeTeam: string;
  homeTeamName: string;
  homeTeamNickname: string;
  homeTeamColor: string;
  homeTeamEmoji: string;
  homeOdds: number;
  homeStrikes: number;
  homeScore: number;
  homeTeamBatterCount: number;
  season: number;
  isPostseason: boolean;
  day: number;
  phase: number;
  gameComplete: boolean;
  finalized: boolean;
  gameStart: boolean;
  halfInningOuts: number;
  halfInningScore: number;
  inning: number;
  topOfInning: boolean;
  atBatBalls: number;
  atBatStrikes: number;
  seriesIndex: number;
  seriesLength: number;
  shame: boolean;
  weather: number;
  baserunnerCount: number;
  homeBases: number;
  awayBases: number;
  repeatCount: number;
  awayTeamSecondaryColor: string;
  homeTeamSecondaryColor: string;
}