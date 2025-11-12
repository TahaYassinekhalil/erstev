// Fix: Removed import and defined Language and StageKey as explicit string literal types
// to break the circular dependency between types.ts and services/content.ts.
export type Language = 'de' | 'uk' | 'tr' | 'en' | 'ru';

export type StageKey =
  | 'klasse7'
  | 'klasse8'
  | 'klasse9'
  | 'klasse10'
  | 'realschulabschluss'
  | 'foerderschulabschluss'
  | 'ohneAbschluss'
  | 'abitur';

export interface Stage {
  title: string;
  advantages: string[];
}

export interface UIContent {
  pageTitle: string;
  pageTitleHighlight: string;
  pageSubtitle: string;
  detailsTitle: string;
  backButton: string;
  languageSelector: string;
  emailFormTitle: string;
  emailPlaceholder: string;
  emailSubmitButton: string;
  emailSuccessMessage: string;
  languages: {
      [key in Language]: string;
  };
}

export interface ContentStructure {
  ui: UIContent;
  stages: Record<StageKey, Stage>;
  footer: {
    copyright: string;
  };
}
