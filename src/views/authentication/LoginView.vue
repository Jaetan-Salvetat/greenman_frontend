<template>
  <div class="login-main-container">
    <form class="form-material">
      <div class="form-field">
        <label for="name2">Name</label>
        <input type="text" id="name2" class="form-control rounded-1" placeholder="Axentix" />
        <span class="form-helper">This is a helper text.</span>
      </div>
    </form>
    <form class="form-material form-material-bordered">
      <div class="login-header">
        <img style="float: left" :src="require('@/assets/arrow_back.png')" width="24"  alt=""/>
        <span class="font-s6">Connexion</span>
        <span></span>
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            class="form-control rounded-1"
            :value="email"
            @input="e => email = e.target.value"/>
        <span class="form-helper">This is a helper text.</span>
      </div>

      <div class="form-field">
        <input
          :type="password_visible ? 'text' : 'password'"
          id="password"
          class="form-control rounded-1"
          :value="password"
          @input="e => password = e.target.value"/>
        <label for="email">Mot de passe</label>
      </div>

      <label class="form-check" style="display: flex; align-items: center">
        <input type="checkbox" style="margin-right: 10px" @input="e => password_visible = e.target.checked">
        Mot de passe visible
      </label>

      <div class="login-center-container" style="margin-top: 50px; margin-bottom: 30px">
        Pas encore de compte
        <router-link class="login-link" to="signup" >Inscription</router-link>
      </div>

      <div class="login-center-container">
        <button class="btn shadow-1 rounded-1 blue">Se connecter</button>
      </div>
    </form>
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
.login-main-container form {
  width: 500px;
  padding: 20px 20px 50px 20px;
  background: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
}
.login-main-container form label {
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