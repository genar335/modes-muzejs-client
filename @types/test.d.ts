export interface ITest {
  /**
   * @param type Describes avaialable elements for composing the test page.
   *
   * Available test types are:
   * + TT: text-text.
   * + PP: photo-photo.
   * + PT: photo-test.
   */
  type: TTestTypes.type;
  // type: "TT" | "PP" | "PT";
  /**
   * @param pages Number of pages used in the test for all languages.
   */
  pages: number;
  /**
   * @param en English version of test contents.
   */
  en: ILangSpecificBody;
  /**
   * @param ru Russian version of test contents.
   */
  ru: ILangSpecificBody;
  /**
   * @param lv Lativan version of test contents.
   */
  lv: ILangSpecificBody;
}

export type TTestTypes  = {
  type: "TT" | "PP" | "PT";
};

type TLangOption = {
  /**
   * @param value String representation of selected language.
   */
  value: "ru" | "en" | "lv";
  /**
   * @param label Used for displaying language option.
   */
  label: "RU" | "EN" | "LV";
};

interface ILangSpecificBody {
  /**
   * @param name Name of the test.
   */
  name: string;
  /**
   * @param pages Array containing QnAPairs:
   * `pages: [
   *    { QnAPairs: [] },
   *    ...
   * ]`
   */
  pages: Array<IQnAPairs>;
}

interface IQnAPairs {
  /**
   * @param QnAPairs Array containing questions and answer.
   */
  QnAPairs: Array<IQnA>;
}

interface IQnA {
  /**
   * @param question Either a string containg the question or a link to the image.
   */
  question: string;
  /**
   * @param anwer Either a string containg the answer or a link to the image.
   */
  answer: string;
}
