"use client";

import { SyntheticEvent, ChangeEvent, useState, useCallback } from "react";

export function DreamForm() {
  const [value, setValue] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [completion, setCompletion] = useState("");

  const handleInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (value !== "") {
      setWaiting(true);

      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: value }),
      });

      const data = await response.json();
      if (data.result !== "error") {
        setCompletion(data.result?.choices[0]?.text);
        setWaiting(false);
      } else {
        setCompletion(data.message);
        setWaiting(false);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          handleSubmit(e);
        }}
        className="mb-6"
      >
        <div className="mb-2 form-group">
          <label
            htmlFor="exampleInputEmail1"
            className="inline-block mb-2 md:text-lg text-rose-50 form-label"
          >
            Please describe your dream
            <span className="hidden md:inline"> (in detail)</span>:
          </label>
          <textarea
            className="w-full p-6 text-lg transition ease-in-out rounded-lg appearance-none text-violet-600 form-control bg-rose-100 bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
            aria-describedby="dreamhelp"
            placeholder="I dreamt I was flying..."
            rows={5}
            value={value}
            onChange={handleInput}
            disabled={waiting}
          />
          <small
            id="dreamhelp"
            className="mt-1 text-xs md:text-sm text-rose-50"
          >
            We'll never share your dream with anyone else!
          </small>
        </div>
        <button
          type="submit"
          className={`px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-rose-50 ${
            waiting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {waiting ? (
            <>
              <div role="status" className="inline-block mb-[-2px]">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 animate-spin fill-rose-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              Analyzing dream...
            </>
          ) : (
            "Analyze my Dream!"
          )}
        </button>
      </form>

      {completion ? (
        <div className="p-6 mt-4 mb-4 text-lg rounded-lg text-violet-600 bg-rose-100">
          {completion}
        </div>
      ) : null}
    </>
  );
}
