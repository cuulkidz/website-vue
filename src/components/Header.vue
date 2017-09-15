<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="../assets/cuulkids/1.png" height="85">
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="nav in navs">
            <a :href="nav.path">{{ nav.name }}</a>
          </li>
        </ul>
      </div>

      
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navs: [
        {
          name: 'About Us',
          path: 'about'
        },
        {
          name: 'Our Work',
          path: 'work'
        },
        {
          name: 'Ventures',
          path: 'ventures'
        },
        {
          name: 'Contact Us',
          path: 'contact-us'
        }
      ]
    }
  }
}
</script>

<style>
  .navbar {
    background-color: #34adbd;
    border-color: #34adbd;
    border-radius: 0px;
    font-family: Space Mono;
    font-size: 1.8rem;
    margin-bottom: 0px;
  }
  .navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand {
    color: #f4f4f4;
  }
  .navbar-default .navbar-nav > li > a:hover {
    color: white;
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    .navbar-brand {
      margin-top: 30px;
      color: white;
      font-size: 3rem;
    }
    .navbar-nav {
      height: 125px;
    }
    .navbar-nav > li {
      margin-top: 60px;
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
      color: white;
      background-color: #316e83;
    }
    .nav > li > a {
      position: relative;
      display: block;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
</style>