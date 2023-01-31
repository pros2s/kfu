export interface FIO {
  name: string;
  surname: string;
  patronymic?: string;
}

export enum RegistrationReason {
  HIGH = 'поступить в бакалавриат, магистратуру, аспирантуру или ординатуру',
  ADDITIONAL = 'получить дополнительное образование или повысить квалификацию',
  OLYMPIAD = 'участвовать в школьной олимпиаде',
  JOB = 'подать заявление на трудоустройство',
  GRADUATE = 'участвовать в жизни вуза после его окончания как выпускник',
  OTHER = 'регистрируюсь по иной причине',
}

export type RegistrationType = 'phone-number' | 'e-mail';

export interface RegistrationSchema {
  fio: FIO;
  login: string;
  registrationType: RegistrationType;
  registrationReasons: RegistrationReason[];
  isAcceptAgreement: boolean;
}
