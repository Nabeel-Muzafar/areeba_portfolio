export interface Project {
  id: number;
  title: string;
  type?: "Featured";
  description: string;
  category: "3D Animation" | "VFX" | "Video Editing";
  thumbnail: string;
  content:
    | {
        type: "video" | "image";
        url: string;
      }
    | {
        type: "gallery";
        images: string[];
      };
}

export const projects: Project[] = [
  {
    id: 19,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/11.png",
    content: {
      type: "gallery",
      images: [
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694232/cggq7wixctnwagw8tmfj.png",
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694242/wnwsdbqcubaopcywhfyu.png",
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694243/t0gdd3d9bb8vce86s0ne.png",
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694249/lcyglnexea29lmfkow06.png",
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694249/tigbx8nusyaxmcdkbxdw.png",
        "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694252/iwpadq5mjjmtlczzy38v.png",
      ],
    },
  },
  {
    id: 190,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/3.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694208/lntrg528t2qhh1ut2snc.png",
    },
  },
  {
    id: 20,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/4.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694369/fkq4hfmv6j4ae4buwdij.mp4",
    },
  },
  {
    id: 192,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/15.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694265/zuj3tcz0ww93itkniwoc.png",
    },
  },
  {
    id: 1923,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/17.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694267/efpmx82knu1i1tjylmzk.png",
    },
  },
  {
    id: 1123,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/21.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694306/opg6xicgjtprk47vmvvi.png",
    },
  },
  {
    id: 11423,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/22.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694301/xj6at3zouf6dcnsjq0ad.png",
    },
  },
  {
    id: 11423,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/23.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694320/vxgv6afxxia7xiju8rva.png",
    },
  },
  {
    id: 21,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/5.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694192/in60oxhdkhv3dektwifm.mp4",
    },
  },
  {
    id: 22,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/6.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694220/wnnn9mlosbjek0uolequ.mp4",
    },
  },
  {
    id: 23,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/7.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694178/hfn7afiizlvxwqwpsole.mp4",
    },
  },
  {
    id: 24,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/8.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738696199/p1ihfbxvluvvtrqtjoi0.png",
    },
  },
  {
    id: 25,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/9.png",
    content: {
      type: "image",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694225/k43bwi80cpmz36rcyfye.png",
    },
  },
  {
    id: 26,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/10.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694447/myvxkchaqbq2ibqzdryx.mp4",
    },
  },
  {
    id: 27,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/12.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694269/hewnzmp0xnbv7jwifmse.mp4",
    },
  },
  {
    id: 28,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/13.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694272/zrtzgsegnhzjvjsr1rlj.mp4",
    },
  },
  {
    id: 29,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/14.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694296/jifeybv08jnoqprixxca.mp4",
    },
  },
  {
    id: 30,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/16.png", // Skipped 15
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694294/xanebvpwz24i6k5jhvbn.mp4", // Skipped 15
    },
  },
  {
    id: 31,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/18.png", // Skipped 17
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694286/ya0ruazz54uderewikz0.mp4", // Skipped 17
    },
  },
  {
    id: 32,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/19.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694559/xpanlb0oqyasnyqplq33.mp4",
    },
  },
  {
    id: 33,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/20.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694604/v48nztu8bdzqtwh1e9qm.mp4",
    },
  },
  {
    id: 34,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/24.png", // Skipped 21, 22, 23
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694591/ran7b5hq5iu0fnhp6sh6.mp4", // Skipped 21, 22, 23
    },
  },
  {
    id: 120090,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    type: "Featured",
    thumbnail: "/3d/Thumbnail/1.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694624/dggbjpvx7pc5ufhpf1xu.mp4",
    },
  },
  {
    id: 1,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    type: "Featured",
    thumbnail: "/3d/Thumbnail/2.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694232/zwqrk4aucekwvpndqhhb.mp4",
    },
  },
  {
    id: 11231,
    title: "Product Commercial VFX",
    description: "High-end visual effects for a sleek product commercial.",
    category: "3D Animation",
    type: "Featured",
    thumbnail: "/3d/Thumbnail/3.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/image/upload/v1738694179/uffqmr6sxnkje8j1kjr6.png",
    },
  },

  {
    id: 2,
    title: "Sci-Fi Character Animation",
    description: "Detailed 3D animation of a futuristic sci-fi character.",
    category: "3D Animation",
    type: "Featured",
    thumbnail: "/3d/Thumbnail/4.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694369/fkq4hfmv6j4ae4buwdij.mp4",
    },
  },
  {
    id: 3,
    title: "Movie VFX Breakdown",
    type: "Featured",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "3D Animation",
    thumbnail: "/3d/Thumbnail/5.png",
    content: {
      type: "video",
      url: "https://res.cloudinary.com/dmzeipid5/video/upload/v1738694192/in60oxhdkhv3dektwifm.mp4",
    },
  },
  {
    id: 4,
    title: "Movie VFX Breakdown",
    type: "Featured",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/1.png",
    content: {
      type: "video",
      url: "/Video/1.mp4",
    },
  },
  {
    id: 5,
    title: "Movie VFX Breakdown",
    type: "Featured",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/2.png",
    content: {
      type: "video",
      url: "/Video/2.mp4",
    },
  },
  {
    id: 6,
    title: "Movie VFX Breakdown",
    type: "Featured",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/3.png",
    content: {
      type: "video",
      url: "/Video/3.m4v",
    },
  },
  {
    id: 7,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/4.png",
    content: {
      type: "video",
      url: "/Video/4.mp4",
    },
  },
  {
    id: 8,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/5.png",
    content: {
      type: "video",
      url: "/Video/5.mp4",
    },
  },
  {
    id: 9,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/6.png",
    content: {
      type: "video",
      url: "/Video/6.mp4",
    },
  },
  {
    id: 10,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/7.png",
    content: {
      type: "video",
      url: "/Video/7.mp4",
    },
  },
  {
    id: 11,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/8.png",
    content: {
      type: "video",
      url: "/Video/8.mp4",
    },
  },
  {
    id: 12,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/9.png",
    content: {
      type: "video",
      url: "/Video/9.mp4",
    },
  },
  {
    id: 13,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/10.png",
    content: {
      type: "video",
      url: "/Video/10.mp4",
    },
  },
  {
    id: 14,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/11.png",
    content: {
      type: "video",
      url: "/Video/11.m4v",
    },
  },
  {
    id: 15,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/12.png",
    content: {
      type: "video",
      url: "/Video/12.mp4",
    },
  },
  {
    id: 16,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/13.png",
    content: {
      type: "video",
      url: "/Video/13.m4v",
    },
  },
  {
    id: 17,
    title: "Movie VFX Breakdown",
    description:
      "Behind-the-scenes look at VFX creation for a blockbuster movie.",
    category: "Video Editing",
    thumbnail: "/Video/Thumbnail/14.png",
    content: {
      type: "video",
      url: "/Video/14.m4v",
    },
  },
];
