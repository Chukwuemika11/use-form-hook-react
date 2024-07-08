import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const styles = {
    color: 'red',
  };

  return (
    <>
      <div>
        <p>Practice Form</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('firstName', { required: true })} />
          {errors.firstName && <span style={styles}>First name is required</span>}

          <input type="text" {...register('lastName', { required: true })} />
          {errors.lastName && <span style={styles}>Lastname is required</span>}

          <input type="text" {...register('middleName', { required: true })} />
          {errors.middleName && <span style={styles}>middleName is required</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
