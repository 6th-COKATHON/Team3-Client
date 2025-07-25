export type EmojiCardType = {
  id: number;
  title: string;
  participants: number;
  isReady: boolean;
  emoji: string;
  gradient: {
    from: string;
    to: string;
  };
};
