export const IMAGES = {
  PROFILE_PHOTO: '/images/pataisyta tinklapiui copy copy copy copy.jpg',
  PROFILE_PORTRAIT: '/images/apie mane copy.jpg',
  THERAPY_JOURNEY: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80'
} as const;

export const imageLoader = (src: string) => {
  return src;
};