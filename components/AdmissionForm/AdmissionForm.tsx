"use client";

import { useState } from "react";
import { emptyApplicationData, STEP_LABELS, type ApplicationData } from "./types";
import StepStudentInfo from "./StepStudentInfo";
import StepParentInfo from "./StepParentInfo";
import StepAcademicInfo from "./StepAcademicInfo";
import StepDocuments from "./StepDocuments";
import StepReview from "./StepReview";
import ConfirmationScreen from "./ConfirmationScreen";
import { generateApplicationId } from "@/lib/applicationId";

function isStepValid(step: number, data: ApplicationData): boolean {
  switch (step) {
    case 0:
      return Boolean(
        data.student.fullName && data.student.dateOfBirth && data.student.gender && data.student.cnicOrBForm
      );
    case 1:
      return Boolean(data.parent.name && data.parent.phone && data.parent.email);
    case 2:
      return Boolean(
        data.academic.previousSchool &&
          data.academic.previousQualification &&
          data.academic.marks &&
          data.academic.program
      );
    default:
      return true;
  }
}

export default function AdmissionForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationData>(emptyApplicationData);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  if (applicationId) {
    return <ConfirmationScreen applicationId={applicationId} />;
  }

  const canProceed = isStepValid(step, data);

  function handleSubmit() {
    // No backend yet — once Supabase is connected, insert `data` into an
    // `applications` table here and use its generated ID/primary key
    // instead of the client-side generateApplicationId() call.
    setApplicationId(generateApplicationId());
  }

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-2">
        {STEP_LABELS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                i <= step
                  ? "border-burgundy bg-burgundy text-softwhite"
                  : "border-charcoal/20 text-charcoal/40"
              }`}
            >
              {i + 1}
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className={`h-px w-6 sm:w-10 ${i < step ? "bg-burgundy" : "bg-charcoal/20"}`} />
            )}
          </div>
        ))}
      </div>

      <p className="mb-8 text-center font-serif text-lg text-charcoal">{STEP_LABELS[step]}</p>

      <div className="mx-auto max-w-xl">
        {step === 0 && (
          <StepStudentInfo
            data={data.student}
            onChange={(student) => setData({ ...data, student })}
          />
        )}
        {step === 1 && (
          <StepParentInfo data={data.parent} onChange={(parent) => setData({ ...data, parent })} />
        )}
        {step === 2 && (
          <StepAcademicInfo
            data={data.academic}
            onChange={(academic) => setData({ ...data, academic })}
          />
        )}
        {step === 3 && (
          <StepDocuments
            files={data.documents}
            onChange={(documents) => setData({ ...data, documents })}
          />
        )}
        {step === 4 && <StepReview data={data} />}

        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="border border-charcoal/20 px-6 py-3 text-sm font-medium uppercase tracking-wide text-charcoal/70 disabled:opacity-30"
          >
            Back
          </button>

          {step < STEP_LABELS.length - 1 ? (
            <button
              type="button"
              onClick={() => canProceed && setStep((s) => s + 1)}
              disabled={!canProceed}
              className="bg-burgundy px-7 py-3 text-sm font-semibold uppercase tracking-wide text-softwhite hover:bg-burgundy-dark disabled:opacity-40"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-burgundy px-7 py-3 text-sm font-semibold uppercase tracking-wide text-softwhite hover:bg-burgundy-dark"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
