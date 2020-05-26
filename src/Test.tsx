import { useEffect, useState } from "react";

interface TextData {
  data: string | null;
  loading: boolean;
}

const useFetch = (url: any) => {
  const [state, setState] = useState<TextData>({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setState({ data: data, loading: false });
      });
  }, [url, setState]);
};

export default Test;
