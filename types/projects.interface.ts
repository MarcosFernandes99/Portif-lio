import { ObjectId } from "mongodb";

export interface Projects {
  id: ObjectId;
  tecnologias: string[];
  titulo: string;
  urlGit: string;
  imagem: string;
}
