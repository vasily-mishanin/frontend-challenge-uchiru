import { useRouteError } from 'react-router-dom';
import classes from './ErrorPage.module.css';

type FetchError = {
  status: number;
  statusText: string;
  message?: string;
};

function ErrorPage() {
  const error = useRouteError() as FetchError;
  console.log(error);
  return (
    <div className={classes.page}>
      <h2>Ой..</h2>
      {error && (
        <p>
          Такая ошибка: {error.statusText} {error.status}
        </p>
      )}
    </div>
  );
}

export default ErrorPage;
