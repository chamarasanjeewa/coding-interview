export interface User {
    firstName: string;
    lastName: string;
 
  }

  export interface FullName{
    fullName:string;
  }


    export type GlobalContent = {
      copy: string;
      paste?: string;
      setCopy: (c: string) => void;
      setPaste?: (c: string) => void;
    };
  