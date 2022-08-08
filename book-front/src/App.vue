<template>
  <!-- container boshlandi -->
  <div class="container-fluid">

    <!-- header qatori boshlandi -->
    <HeaderRow/>
    <!-- header qatori tugadi -->

    <!-- main qatori boshlandi -->
    <div class="row mt-4">

      <!-- category boshlandi -->
      <CategoriesCol/>
      <!-- category tugadi -->

      <!-- kontent boshlandi -->
      <div class="col-12 col-md-10 mt-4 mt-md-0">
        <router-view/>

      </div>
      <!-- kontent tugadi -->

    </div>
    <!-- main qatori tugadi -->

    <!-- footer qatori boshlandi -->
    <FooterRow/>
    <!-- footer qatori tugadi -->

  </div>
  <!-- container tugadi -->
</template>

<script>



import FooterRow from "@/components/FooterRow";
import HeaderRow from "@/components/HeaderRow";
import CategoriesCol from "@/components/CategoriesCol";
export default {
  name: 'App',

  components: {
    CategoriesCol,
    HeaderRow,
    FooterRow
  }
}
</script>


