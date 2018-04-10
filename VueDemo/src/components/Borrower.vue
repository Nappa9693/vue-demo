<template>
  <div class="borrower-form">
    <h1>Borrower Info</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <form>
      <label>Home Phone*</label>
      <input id="homePhone" name="homePhone" type="text" v-model="borrower.homePhone"/>
      <br/>
      <label>Email*</label>
      <input id="email" name="email" type="text" v-model="borrower.email"/>
      <br/>
      <label>Years of School*</label>
      <input id="yearsOfSchool" name="yearsOfSchool" type="text" v-model="borrower.yearsOfSchool"/>
      <br/>
      <label>Number of Dependents (not listed by co-borrower)*</label>
      <input id="numberOfDependents" name="numberOfDependents" type="text" v-model="borrower.numberOfDependents"/>
      <br/>
      <label>Dependent Age (e.g. 1, 5, 6,)</label>
      <input id="dependentAges" name="dependentAges" type="text" v-model="borrower.dependentAges"/>
    </form>
  </div>
</template>

<script src="./BorrowerComponentScript.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  label{
    text-align: left;
  }

  .borrower-form{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .borrower-form form{
    display: flex;
    flex-direction: column;
    width: 400px;
  }
</style>
