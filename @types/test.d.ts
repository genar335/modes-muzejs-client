interface ITest {
  type: "TT" | "PP" | "PT";
  pages: number;
  en: ILangSpecificBody;
  ru: ILangSpecificBody;
  lv: ILangSpecificBody;
}

interface ILangSpecificBody {
  name: string;
  pages: Array<IQnAPairs>;
}

interface IQnAPairs {
  QnAPairs: Array<IQnA>;
}

interface IQnA {
  question: string;
  answer: string;
}
