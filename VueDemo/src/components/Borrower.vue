<template>
  <div class="borrower-form">
    <h1>Borrower Info</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <form>
      <label>Home Phone*</label>
      <input id="homePhone" name="homePhone" type="text" v-model="borrower.homePhone" v-on:input="updateBorrower"/>
      <br/>
      <label>Email*</label>
      <input id="email" name="email" type="text" v-model="borrower.email" v-on:input="updateBorrower"/>
      <br/>
      <label>Years of School*</label>
      <input id="yearsOfSchool" name="yearsOfSchool" type="text" v-model="borrower.yearsOfSchool" v-on:input="updateBorrower"/>
      <br/>
      <label>Number of Dependents (not listed by co-borrower)*</label>
      <input id="numberOfDependents" name="numberOfDependents" type="text" v-model="borrower.numberOfDependents" v-on:input="updateBorrower"/>
      <br/>
      <label>Dependent Age (e.g. 1, 5, 6,)</label>
      <input id="dependentAges" name="dependentAges" type="text" v-model="borrower.dependentAges" v-on:input="updateBorrower"/>
    </form>
  </div>
</template>

<script src="./BorrowerScript.js"></script>
<style lang="scss" src="./BorrowerStyle.scss" scoped></style>
