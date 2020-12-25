interface IPost {
  postId: number
  owner: {
    fullName: string,
    avatarSrc: string
  }
  text: string
  createdDate: string
  images: string[]
}

export const POSTS_MOCK: IPost[] = [
  {
    postId: 0,
    owner: {
      fullName: 'Miranda Shaffer',
      avatarSrc: 'static/images/user_mock1.png'
    },
    text: 'Having fun while cooking and eating variety of foods',
    createdDate: 'June 21, 12:45 pm',
    images: ['static/images/1.png', 'static/images/2.png', 'static/images/3.png']
  }
];
