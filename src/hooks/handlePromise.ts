export const handlePromise = (p: Promise<any>) =>
  new Promise<[any, any]>((res, _) => {
    p.then((result) => res([result, null])).catch((err) => res([null, err]));
  });
