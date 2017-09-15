<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img src="../assets/cuulkids/2.png" height="70">
          </div>

          <div class="col-md-3">
            <span class="text-muted">(+220) 334 3008</span>
            <span>info@cuulkids.com</span>
          </div>

          <div class="col-md-3">
            <a href="">Ventures</a><br>
            <a href="">Blog</a><br>
            <a href="">About</a><br>
            <a href="">Contact</a>
          </div>

          <div class="col-md-3">
            <a href="">Facebook</a><br>
            <a href="">Twitter</a><br>
            <a href="">Instagram</a><br>
            <a href="">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .footer {
      min-height: 100px;
      padding-top: 50px;
      padding-bottom: 50px;
      font-size: 1.8rem;
    }
  }
  .footer .container .row .col-md-3 span {
    line-height: 1.6;
  }
  .footer .container .row .col-md-3 a {
    color: #333;
    text-decoration: underline;
    line-height: 1.6;
  }
</style>