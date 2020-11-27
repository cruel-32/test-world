export type NameTypes = {
  [key: string]: string;
};

export const FemaleNames: NameTypes = {
  choyuri: '조유리',
  kimchaewon: '김채원',
  kimminjoo: '김민주',
  anyujin: '안유진',
  choiyena: '최예나',
  hitomi: '히토미',
  jangwonyoung: '장원영',
  kanghyewon: '강혜원',
  kwoneunbi: '권은비',
  leechaeyeon: '이채연',
  nako: '나코',
  sakura: '사쿠라',
  chaeyoung: '채영',
  dahyun: '다현',
  jennie: '제니',
  jeongyeon: '정연',
  jihyo: '지효',
  jisoo: '지수',
  lisa: '리사',
  mina: '미나',
  momo: '모모',
  nayeon: '나연',
  rose: '로제',
  sana: '사나',
  tzuyu: '쯔위',
};

export const imageData: IWhoIsThisImageData[] = [
  {
    img: '/images/whoIsThis/choyuri/1',
    nameKey: 'choyuri',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/kimchaewon/1',
    nameKey: 'kimchaewon',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/kimminjoo/1',
    nameKey: 'kimminjoo',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/anyujin/1',
    nameKey: 'anyujin',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/choiyena/1',
    nameKey: 'choiyena',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/hitomi/1',
    nameKey: 'hitomi',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/jangwonyoung/1',
    nameKey: 'jangwonyoung',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/kanghyewon/1',
    nameKey: 'kanghyewon',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/kwoneunbi/1',
    nameKey: 'kwoneunbi',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/leechaeyeon/1',
    nameKey: 'leechaeyeon',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/nako/1',
    nameKey: 'nako',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/sakura/1',
    nameKey: 'sakura',
    gender: 'F',
  },

  {
    img: '/images/whoIsThis/chaeyoung/1',
    nameKey: 'chaeyoung',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/dahyun/1',
    nameKey: 'dahyun',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/jennie/1',
    nameKey: 'jennie',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/jeongyeon/1',
    nameKey: 'jeongyeon',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/jihyo/1',
    nameKey: 'jihyo',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/jisoo/1',
    nameKey: 'jisoo',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/lisa/1',
    nameKey: 'lisa',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/mina/1',
    nameKey: 'mina',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/momo/1',
    nameKey: 'momo',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/nayeon/1',
    nameKey: 'nayeon',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/rose/1',
    nameKey: 'rose',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/sana/1',
    nameKey: 'sana',
    gender: 'F',
  },
  {
    img: '/images/whoIsThis/tzuyu/1',
    nameKey: 'tzuyu',
    gender: 'F',
  },
];

export const MaleNames: NameTypes = {};
export const getRandomExamples = (nameKey: string): [string[], number] => {
  try {
    const data = imageData.find((item) => item.nameKey === nameKey);
    const nameData = data.gender === 'F' ? FemaleNames : MaleNames;
    const nameKeys = Object.keys(nameData);
    const randomNames: string[] = [];

    while (randomNames.length !== 4) {
      const ran = Math.floor(Math.random() * (nameKeys.length + 1));
      const ranKey = nameKeys[ran];
      const ranName = nameData[ranKey];

      if (ranName && !randomNames.includes(ranName) && ranKey !== nameKey) {
        randomNames.push(ranName);
      }
    }

    const ranIndex = Math.floor(Math.random() * 4);
    const addName = nameData[nameKey];

    if (addName) {
      randomNames.splice(ranIndex, 0, addName);
    }
    return [randomNames, ranIndex];
  } catch {
    return [[], 0];
  }
};
