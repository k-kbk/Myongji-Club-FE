type NoticeType = {
  id: number;
  title: string;
  date: string;
};

type ClubType = {
  id: number;
  name: string;
  tag: string;
  category: string;
};

type DeptCaptionType = {
  [name: string]: string;
};

export type { NoticeType, ClubType, DeptCaptionType };
