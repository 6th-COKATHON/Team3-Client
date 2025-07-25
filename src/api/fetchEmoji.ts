import axios from 'axios';

const API_KEY = 'f5dc25367060f4125fadccd9beaedfff9ea8fce9';
const API_URL = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

export const fetchRandomEmoji = async (): Promise<string> => {
  try {
    const response = await axios.get(API_URL);
    const emojis = response.data;
    const randomEmoji =
      emojis[Math.floor(Math.random() * emojis.length)].character;
    return randomEmoji;
  } catch (error) {
    console.error('Error fetching emoji:', error);
    return '❓';
  }
};
