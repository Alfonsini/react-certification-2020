import { useEffect, useDebugValue, useState } from 'react';

import * as search from '../../test/search';

function APIException(value) {
  this.httpCode = value.httpCode;
  this.statusMessage = value.statusMessage;
  this.details = value.details;

  this.toString = () => {
    return `${this.httpCode} ${this.statusMessage} ${
      this.details && this.details.error && this.details.error.message
    }`;
  };
}

function useFetch(url, query) {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let mounted = true;

    const run = () => {
      try {
        if (!url) {
          return;
        }

        if (!query) {
          return;
        }

        if (mounted) {
          setIsFetching(true);
        }

        if (
          mounted &&
          (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
        ) {
          // throw new Error('http error exception'); // to test error handle
          // dev code
          console.info('Dev code');
          setData(search.search());
          setIsFetching(false);

          return;
        }

        console.log('Production code', `${url}${query}`);

        fetch(`${url}${query}`)
          .then(async (resp) => {
            if (!resp.ok) {
              throw new APIException({
                httpCode: resp.status,
                statusMessage: resp.statusText,
                details: await resp.json(),
              });
            }

            return resp.json();
          })
          .then((resp) => {
            if (mounted) {
              setIsFetching(false);
              setData(resp);
            }
          })
          .catch((ex) => {
            if (mounted)
              if (ex instanceof APIException) {
                setIsFetching(false);
                setErrorMessage(ex.toString());
              }
          });
      } catch (ex) {
        if (mounted) {
          setIsFetching(false);
          setErrorMessage(ex.message);
        }
      }
    };

    run();

    return () => {
      mounted = false;
    };
  }, [url, query]);

  useDebugValue(isFetching, data, errorMessage);

  return { isFetching, data, errorMessage };
}

export { useFetch };
