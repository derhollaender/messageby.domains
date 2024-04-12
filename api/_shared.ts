

export interface Message {
  hash: string;
  words: Array<string>;
  gif: string;
  selfDestruct: boolean;
  currentWord: number;
  addressBarPositon: 'top' | 'bottom' | null;
  name: string;
}

export const gifs = {
  top: [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3huenF6dm4zMHF2M2JoZXEzdG00MTFydDU4YzY5OXI0Z2w4aXJwcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AwttwIryJLZodu6UyS/giphy.gif",
    "https://media.giphy.com/media/wQ2wDLXSOtIMUPIKxf/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5ua2x1ZWM4bjhud3h2MG9mejNzYW01Z2luZnUzZ3pza3pxYWc5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dEGTzoV82QIycEgmXu/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWNncnJteTd4ODg2bnRmN3ZxcDJxdTByNzV2eXBjM2J3ZDBtb3VnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0HI8dHCSDhZnCNvmgz/giphy.gif",
    "https://media.giphy.com/media/rpjrFWWz2dMfCRIeiH/giphy.gif",
    "https://media.giphy.com/media/1wqYLOFlBRc0qZtYo0/giphy.gif",
    "https://media.giphy.com/media/Eu1X2BHOByBDj32eyA/giphy.gif",
    "https://media.giphy.com/media/PRL7KUSl6zX9FLwAvH/giphy.gif",
    "https://media.giphy.com/media/ml32fUqOHkGJmfk0N6/giphy.gif",
    "https://media.giphy.com/media/u1VqlrL8kHlfAjO9Vm/giphy.gif",
    "https://media.giphy.com/media/jrf0gbF19QCB6nH8XQ/giphy.gif",
    "https://media.giphy.com/media/cLHmcQRLBXApQIxAnr/giphy.gif",
    "https://media.giphy.com/media/Kho2Coa0ZLPfnrYfPW/giphy.gif",
    "https://media.giphy.com/media/R3S3O7pc9qHrbkYSGV/giphy.gif",
    "https://media.giphy.com/media/QVaXOHVOSpXodWX9Ka/giphy.gif",
    "https://media.giphy.com/media/bQDwl30PhajUFxhFht/giphy.gif",
    "https://media.giphy.com/media/rXD3ZQ8UpZbXsIujiP/giphy.gif"

  ],

  bottom: [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZtZWk1eGFjZ28zMXR6NnJxbGY2azFtOG9peWpyOTB4ZDRwbnNscyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lrPNVta5uLk9VvhHgd/giphy.gif",
    "https://media.giphy.com/media/cWjFnDTq2N87YBn0uN/giphy.gif",
    "https://media.giphy.com/media/Ugni1R0EaK6dw7VCb4/giphy.gif",
    "https://media.giphy.com/media/B3ltrgdWWMmxpUOu1m/giphy.gif",
    "https://media.giphy.com/media/RUQ47L7Wf9PuqzwTwL/giphy.gif",
    "https://media.giphy.com/media/jOnrjNTgv0RnU8bG80/giphy.gif",
    "https://media.giphy.com/media/038reunmBR97xFM8Nj/giphy.gif",
    "https://media.giphy.com/media/SlYTi8YqfL4CU4A9eg/giphy.gif",
    "https://media.giphy.com/media/HzFpjQNHw8Eni592B9/giphy.gif",
    "https://media.giphy.com/media/3XBPrAvitLOBxD3bAn/giphy.gif",
    "https://media.giphy.com/media/6M7DuNIhQEcpGfFybj/giphy.gif",
    "https://media.giphy.com/media/PCA4pvEZEX3gPHOygQ/giphy.gif",
    "https://media.giphy.com/media/5Yt4yAH775O3wckR4f/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2pxY2QxaHRlcXdxa2pzN3lieHVyY21yY25zd3k0ZGhvbXdzdGRjNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5noddpPJQxDNDaPWaP/giphy.gif",
    "https://media.giphy.com/media/kWLPNb36rT1afK6qjc/giphy.gif",
    "https://media.giphy.com/media/bJfUk7Bkv4i2jNK8ug/giphy.gif",
    "https://media.giphy.com/media/e6x5tfMVbPBWMASgCb/giphy.gif",
    "https://media.giphy.com/media/cMVzlOrY4nYoFTJplf/giphy.gif",
  ],

  done: [
    "https://media.giphy.com/media/Mp4hQy51LjY6A/giphy.gif?cid=ecf05e47r5vwlfv3qzondjgmzqj0b9kwqmz40m09ijwt68g0&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/QhmboW0R7eUbm/giphy.gif?cid=790b7611jg310kzz3uu9h0fwana4uhpl334ppk6dbvz0oi90&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/bly2XqiOYlJXI9sGlb/giphy.gif?cid=790b7611jg310kzz3uu9h0fwana4uhpl334ppk6dbvz0oi90&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/RkDX47fpp2nHlaZdjY/giphy.gif?cid=790b7611jg310kzz3uu9h0fwana4uhpl334ppk6dbvz0oi90&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif?cid=ecf05e47r5vwlfv3qzondjgmzqj0b9kwqmz40m09ijwt68g0&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/2xHz8Fk7JFKiBowjam/giphy.gif?cid=ecf05e47jjdvjpgjvr2vvudod0dsq5ghdb8y2ybxptoj9gua&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/XnL2RyopTbGqk/giphy.gif?cid=ecf05e47jjdvjpgjvr2vvudod0dsq5ghdb8y2ybxptoj9gua&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/GVZtWISnjd0aa4SHK5/giphy.gif?cid=ecf05e47n802w810rc4m4bsioe9p6y9bzf1ipkzd4sckmzn9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/O3UCA8pjPekDc8V1Sh/giphy.gif?cid=ecf05e47n802w810rc4m4bsioe9p6y9bzf1ipkzd4sckmzn9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/3o6ZsZbUukGiYMf2a4/giphy.gif?cid=ecf05e47gkqu5j57i0k7qfc8gm4a3xjbj720qm984m9xtexu&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/h58Y2ul65U47utju37/giphy.gif?cid=ecf05e47tchgrlwrgdxg164l7t2qejowv5djifgzpwrd6gy2&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/co5nmPivPa42vv6IVm/giphy.gif?cid=ecf05e47ffof4nqi26ms0rbwwayp2ha8sfg8734pts8vkccn&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/FqpBINI81qPgoNN3VM/giphy.gif?cid=ecf05e47qrh49qkon3c4ah3muzuj89y5w9ofxkuchksjnx6m&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/B1Io0O7u9geawkEAGk/giphy.gif?cid=ecf05e47qrh49qkon3c4ah3muzuj89y5w9ofxkuchksjnx6m&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/jU2LNEPxKSjHM0K9ER/giphy.gif?cid=ecf05e47t5m163n7h154czzwfip2vghjbrtonpoik1ibyk8e&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Ym5YrxGir73UI/giphy.gif?cid=ecf05e47t5m163n7h154czzwfip2vghjbrtonpoik1ibyk8e&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/OfjIL3C92S6uHX9LXS/giphy.gif?cid=ecf05e47wvc4ogl2ntoc6ld7v3ddhja6wwie55qxnmufnoae&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ],

  getRandom(kind: 'top' | 'bottom' | 'done'): string {
    return this[kind][Math.floor(Math.random() * this[kind].length)];
  }

};
