import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oups!</h1>
      <p>Désolé, une erreur est survenue.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
