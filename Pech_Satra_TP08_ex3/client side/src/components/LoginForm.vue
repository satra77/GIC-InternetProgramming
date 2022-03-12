<template>
  <div>
    <div class="container">
      <div class="log_in">
        <div><img class = "background-pic" src="../assets/student.png" alt="" /></div>
        <label for="email">Email or Username</label>
        <input type="text" name="email" id="email" placeholder="Input email or username"  v-model="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Input password"  v-model="password" @keyup.enter="created()" />
        <br>
        <br>
        <button type="submit" @click="created()" id="btn_login">Log In</button>
        <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
      </div>
      <div style="margin: 10px 0 0 18vw">
        Forget <a href="http://#">password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/login",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "true") {
        location.href = "./home";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(240,0,0,.8)";
      }
    },
  },
};
</script>

<style scoped>
.container {
   width: 400px;
    height: 450px;
    border: 2px solid rgb(201, 199, 199);
    padding: 10px;
}
.background-pic{
   width: 120px;
  height: 120px;
  border-radius: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%,-50%);
  margin-top: 20%;
}

.log_in {
  margin-top: -10px;
  border-radius: 2%;
}

.log_in > input {
  background-color: #e1dfdf;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}
.container2 {
  margin: -45rem 0 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 93vw;
  height: 93vh;
}

#btn_login,
#btn_logout {
   width: 100%;
  height: 8%;
  background-color: #41b883;
  border: 1px solid white;
  color: white;
  padding-top: 10px;
  padding-bottom: 8px;
}
#btn_login:hover{
  color:blue;
}

#btn_logout {
  background-color: rgba(239, 54, 54);
}
</style>
