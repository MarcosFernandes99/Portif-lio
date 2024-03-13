import { ObjectId } from "mongodb";

export interface Projects {
  id: ObjectId;
  tecnologias: string[];
  titulo: string;
  urlGit: string;
  imagem: string;
}

export interface Technologys {
  tecnologias(tecnologias: any): unknown;
  map(
    arg0: (item: any, i: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  techs: object[];
}
