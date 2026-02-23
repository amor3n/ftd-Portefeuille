import type { UseQueryResult } from "@tanstack/react-query";
import CircularText from "../react-bits/circular.text";
import type { ReactNode } from "preact/compat";

type ErrorHandlerProps = {
  code403: ReactNode;
};

export default function <T>({
  isLoading,
  isError,
  error,
  code403,
}: UseQueryResult<T, Error> & ErrorHandlerProps) {
  return (
    <>
      {isLoading && (
        <CircularText
          className="font-bitcount font-normal"
          text="LOADING.-.LOADING.-."
          spinDuration={8}
          onHover="speedUp"
        />
      )}
      {isError && <>{error?.message.includes("403") && code403}</>}
    </>
  );
}
