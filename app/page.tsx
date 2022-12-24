import { DreamForm } from "../components/DreamForm";

export default function Page() {
  return (
    <div className="container p-6 mx-auto">
      <h1 className="pt-8 text-3xl font-bold sm:text-5xl md:pt-16 sm:pt-12 md:text-7xl text-violet-700">
        DreamAweso&#8226;me
      </h1>
      <h2 className="pt-6 pb-8 text-xl md:text-3xl text-violet-700">
        Unlock the potential of your dreams! AI dream analysis helps you gain
        insights and achieve personal growth.
      </h2>
      <DreamForm />
    </div>
  );
}
