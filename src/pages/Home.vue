<template>
<div>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-asset">
            <img src="https://i.pinimg.com/originals/e4/d3/95/e4d395849317f98f2a418c0e10182b0d.gif">
          </div>

          <div class="hero-body">
            <span>
              <p>
                We design and develop digital products for <strong>Startups</strong>  and <strong>Small and Medium Enterprises</strong>.
              </p>

              <p>
                Our diverse team leverages on empathy, exploration and collaboration to find solutions for your business problem.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-apps">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4 class="pull-left">Spotlight</h4>
        </div>

        <a class="col-md-4 app-col" href="">
          <img src="../assets/skuul/1.png" height="85">
          <p>
            Educational material kit for schools (primary & tertiary) to record, and provide easy access to, grades.
          </p>
        </a>

        <a class="col-md-4 app-col" href="">
          <img src="../assets/nub/1.png" height="85">
          <p>
            HRM application to maximize employee performance in service to a companies strategic objectives.
          </p>
        </a>
      </div>
    </div>
  </div>

  <div class="hero-process">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Our Process</h4>
        </div>

        <div class="col-md-8">
          <h4><strong>#1 Dream Room</strong></h4>
          <p>
            We kickoff all projects by dreaming of the most fantastic and absurd ideas. 
          </p>
          <!-- <p>
            In this room, all filters are remove and all ideas are welcome. All things are possible in this room. The focus is "if I could solve this problem by waving a magic wand - what would I create?".
          </p> -->
          <br>
          <hr>

          <h4><strong>#2 Realist Room</strong></h4>
          <p>
            Next we enter the realist room where we examine all ideas generated in the dream room and work it into something more practical. 
          </p>
          <!-- <p>
            Here we figure out how to make the ideas and sort them into an executable plan. The focus here is "how can we use the essence of the idea to create a more realistic one?".
          </p> -->
          <br><hr>

          <h4><strong>#3 Spoiler Room</strong></h4>
          <p>
            The final stage focuses on shooting holes in the ideas we had come up with. It is the ideas that survive this stage that we would work on.
          </p>
          <!-- <p>
            At this stage, feasibility of the project, its relevance, and its ability to solve the customer's need are evaluated.
          </p> -->
          <hr>

          <a class="pull-right text-underline" href="">Have an idea you want to explore?</a>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="hero-contact-us">
    <div class="container">
      <section class="row">
        <div class="col-md-4">
          <span>
            Have your clients put you on a pedestal by getting an elegant <strong>website</strong> tailored to satisfy your brand
          </span>
        </div>

        <div class="col-md-4">
          <span>
            <strong>Web applications</strong> can improve your employees performance and efficiency and increase out-turn
          </span>
        </div>

        <div class="col-md-4">
          <a href="" class="btn btn-link pull-right">
            <h3>Take the leap</h3>
          </a>
        </div>
      </section>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  body {
    font-family: Space Mono;
  }
  .hero {
    background-color: #34adbd;
    font-size: 1.8rem;
  }
  .hero-process {
    background-color: #f4ebda;
  }
  .hero-process a {
    color: #333;
    font-weight: bold;
  }
  .hero-process p {
    color: #333;
  }
  .hero-apps .container {
    text-align: center;
  }
  .hero-apps p {
    color: #333;
    font-size: 1.6rem;
  }
  @media screen and (min-width: 768px) {
    .hero-apps .container, .hero-process .container, .hero-contact-us .container {
      min-height: 100px;
      padding-top: 50px;
      padding-bottom: 50px;
      font-size: 1.8rem;
    }
    .hero-contact-us span {
      line-height: 1.7;
    }
    .hero-contact-us h3 {
      font-weight: bold;
      text-decoration: blink;
      color: #333;
    }
    .hero-asset {
      width: 53%;
      float: right;
      position: relative;
    }
    .hero-asset img {
      /*position: absolute;*/
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 50px;
      margin-right: 0px;
    }
    .hero-body {
      width: 50%;
      position: absolute;
      bottom: 10px;
      left: 0;
      z-index: 2;
      line-height: 1.9;
      margin-bottom: 25px;
    }
    p {
      margin-top: 25px;
      color: #f4f4f4;
    }
    .app-col:hover {
      text-decoration: none;
    }
    .app-col:hover p {
      color: black;
      font-size: 1.7rem;
    }
  }
  .text-underline {
    text-decoration: underline;
  }
</style>