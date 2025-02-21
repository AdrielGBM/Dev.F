/* eslint-disable react/prop-types */

function User({ classes, userId, title, completed }) {
  return (
    <>
      <div className={classes}>
        <h2>Título: {title}</h2>
        <p>User ID: {userId}</p>
        <p>Completado: {completed ? "Sí" : "No"}</p>
      </div>
    </>
  );
}

export default User;
