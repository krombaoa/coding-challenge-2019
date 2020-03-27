export interface IInitialStateProps {
  data: any;
}

export interface IActionProps {
  type: string;
  payload: any;
}

export interface IContextProps {
  state: IInitialStateProps;
  dispatch: ({ type }: { type: string; payload: any }) => void;
}

export interface IContextProviderProps {
  children: React.ReactNode;
}

export type TNavListProps = {
  name: string;
  link: string;
};

export interface IFetchData {
  id: number;
  title: string;
  title_long: string;
  tag: string;
  thumb: string;
  image: string;
  slug: string;
  questions: Array<string>;
}
