<template>
    <div class="card">
        <form action="">
            <div>
                <label for="SelectCita">Seleccione la cita: </label>
                <select  id="SelectCita">
                    <option></option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped>
  .card {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  form label {
    display: block;
    margin-bottom: 5px;
  }
  
  form input,
  form select,
  form textarea {
    width: 100%;
  }

  @media (max-width: 600px) {
    .card {
      margin: 20px;
      box-shadow: none;
      border-radius: 0;
      border-left: none;
      border-right: none;
    }
  }
</style>