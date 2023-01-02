<template>
  <div class="login-main-container">
    <div class="form">
      <div class="login-header">
        <img style="float: left" :src="require('@/assets/arrow_back.png')" width="24"  alt=""/>
        <span class="font-s6">Connexion</span>
        <span></span>
      </div>

      <ax-form material>
        <ax-form-field label="Email">
          <ax-form-control tag="input" v-model="email" type="email"></ax-form-control>
        </ax-form-field>

        <ax-form-field label="Password">
          <ax-form-control tag="input" :type="password_visible ? 'text' : 'password'" v-model="password"></ax-form-control>
        </ax-form-field>


        <ax-form-field>
          <ax-form-check type="checkbox" v-model="password_visible" @click="e => password_visible = e.target.checked">
            Mot de passe visible
          </ax-form-check>
        </ax-form-field>

        <div class="login-center-container" style="margin-top: 50px; margin-bottom: 30px">
          Pas encore de compte
          <router-link class="login-link" to="signup" >Inscription</router-link>
        </div>

        <div class="login-center-container">
          <ax-btn class="primary shadow-1 rounded-1">Se connecter</ax-btn>
        </div>
      </ax-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      password_visible: false
    }
  }
}
</script>

<style scoped>
.login-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login-main-container .form {
  width: 500px;
  padding: 20px 20px 50px 20px;
  background: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
}
.login-main-container .form label {
  cursor: pointer;
}
.login-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-center-container {
  width: 100%;
  text-align: center;
}
.login-link {
  color: #2D88D9;
}

</style>