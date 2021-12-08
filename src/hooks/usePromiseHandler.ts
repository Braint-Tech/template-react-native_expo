// Handles async functions
export default function usePromiseHandler(p: Promise<any>) {
  return new Promise<[any, any]>((res, _) => {
    p.then((result) => res([result, null])).catch((err) => res([null, err]));
  });
}
