export type ApplicationData = {
  student: {
    fullName: string;
    dateOfBirth: string;
    gender: string;
    cnicOrBForm: string;
  };
  parent: {
    name: string;
    phone: string;
    email: string;
  };
  academic: {
    previousSchool: string;
    previousQualification: string;
    marks: string;
    program: string;
  };
  documents: File[];
};

export const emptyApplicationData: ApplicationData = {
  student: { fullName: "", dateOfBirth: "", gender: "", cnicOrBForm: "" },
  parent: { name: "", phone: "", email: "" },
  academic: { previousSchool: "", previousQualification: "", marks: "", program: "" },
  documents: [],
};

export const STEP_LABELS = [
  "Student Information",
  "Parent / Guardian",
  "Academic Information",
  "Documents",
  "Review",
];
