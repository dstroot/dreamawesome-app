/**
 * getRandomInt
 *
 * @param min, max
 * @returns random number between nin and max
 */
export function getRandomInt({ min, max }: { min: number; max: number }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * This function waits for a specified time and then resolves
 */
function waitForMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// pass in an array of sentences, and a callback for typing them (e.g. a setter from useState)
export async function typeSentences(
  sentences: Array<string>,
  setTyped: Function
) {
  // loop through sentences array
  var arrayLength = sentences.length;

  for (var i = 0; i < arrayLength; i++) {
    // track are we on the last sentence?
    let lastSentence = false;
    if (i === arrayLength - 1) {
      lastSentence = true;
    }

    // pause between sentences
    await waitForMs(1000);

    // type each sentence
    await typeSentence({
      sentence: sentences[i],
      lastSentence: lastSentence,
      setTyped,
    });
  }
}

async function typeSentence({
  sentence,
  lastSentence,
  setTyped,
}: {
  sentence: string;
  lastSentence: boolean;
  setTyped: Function;
}) {
  let letters = [""];
  if (typeof sentence === "string") {
    letters = sentence.split("");
  }

  let i = 0;
  while (i < letters.length) {
    setTyped((typed: string) => typed + letters[i]);
    await waitForMs(getRandomInt({ min: 20, max: 70 }));
    i++;
  }

  return;
}
