export const brown: string = "236 221 210";
export const white: string = "255 255 255";
//* Host adressess
export const APIURL: string = "http://192.168.8.100:4000/";
export const devURL: string = "http://192.168.8.100:3000/";
//* Carousel settings for responsivnes
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
//* Regex checks
export const URLCheck: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
export const URLCheckForLocalHost: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}/;

//* Drag n Drop related
export const ItemTypes = {
  QCARD: "qcard",
};

//* Max input length numbers
export const testNameMaxLength: number = 50;
export const textEntryCountLimit: number = 180;
export const finalPageHeaderLimit: number = 60;
export const finalPageBodyLimit: number = 80;
