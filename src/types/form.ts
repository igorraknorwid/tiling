export interface IAnswer {
  id: number;
  text: string;
}

export interface IStep {
  id: number;
  name: string;
  answers?: IAnswer[];
  isFinish?: boolean;
}
