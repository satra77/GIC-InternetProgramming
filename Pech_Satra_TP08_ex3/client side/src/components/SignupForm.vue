<template>
  <div>
    <div class="container">
      <div class="log_in">
        <h3>Sign Up</h3>
        <h4>Please fill this form below to sign up</h4>
        <hr>
        <br>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter Email" v-model="email"/>
        <label for="username">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
          v-model="username"
        />
        <label for="firstname">First name</label>
        <input type="firstname" name="firstname" id="firstname" placeholder="First name" v-model="firstname"/>
        <label for="lastname">Last name</label>
        <input type="lastname" name="lastname" id="lastname" placeholder="Last name" v-model="lastname" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Create your Password" v-model="password" />
        <h5>
          By creating an account you agree to our
          <a href="http://#">Term & Privacy</a>.
        </h5> <br>
        <button type="submit" id="btn_signup" @click="created">Sign up</button>
        <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
      </div>
      
    </div>
          <div style="margin: 10px 0 0 18vw"><a href="/">Log in instead</a>!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
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
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
        }),
      };
      const response = await fetch(
        "http://localhost:3001/register",
        requestOptions
      );
      const data = await response.json();
      console.log("data: ", data);

      //check if user is not existed
      if (data.status == "true") {
        this.msg = data.message;
        this.input_color = "rgba(106,168,79,.8)";

        //clear input value
        this.email = "";
        this.username = "";
        this.lastname = "";
        this.firstname = "";
        this.password = "";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(204,0,0,.8)";
      }
    },
  },
};
</script>

<style scoped>
.container {
 border: 1px solid rgb(204, 203, 203);
  padding: 10px;
  width: 400px;
  height: 600px;
}

a {
  font-weight: 700;
  color: #00a271;
}

.log_in {
  padding: 10px;
  border-radius: 2%;
  
  
}

.log_in h4 {
  margin-bottom: 10px;
}

.log_in > input {
  width: 100%;
  border: 1px solid rgb(247, 244, 244);
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  background-color: rgb(228, 226, 226)
}

#btn_signup {
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 48%;
  background-color: #41b883;
  border: 1px solid white;
  color: white;
  padding-bottom: 4%;
  left: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
  padding-top: 10px;
  margin-top: 10px;
  
 
}
#btn_signup:hover{
  color: red;
}
</style>
