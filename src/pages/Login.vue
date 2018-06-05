<template>
<section>
  <aside class="login">
    <section class="columns is-mobile is-centered">
      <section class="column is-3">
        <form class="login-form">
          <h1 class="title is-1">AngraDB</h1>
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </section>
    </aside>
  <div class="ocean">
    <div class="wave">
    </div>
    <div class="wave">
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: 'Login'
}
//Background from: https://codepen.io/tedmcdo/pen/PqxKXg
</script>

<style>
.login{
  position: static;
  bottom:0;
  left:0;
}

.login-form{
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
}

html, body { height: 100%; overflow: hidden;}
body {
  background:radial-gradient(
    ellipse at center, 
    rgba(255,254,234,1) 0%, 
    rgba(255,254,234,1) 35%, 
    #B7E8EB 100%);
  overflow: hidden;
}

.ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #015871;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
</style>
