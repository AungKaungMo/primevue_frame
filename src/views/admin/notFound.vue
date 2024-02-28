<template>
   <div class="my-5 pt-sm-5">
      <div class="container">

         <div class="row">
            <div class="col-md-12">
               <div class="text-center">
                  <div>
                     <div class="row justify-content-center">
                        <div class="col-sm-4">
                           <div class="error-img">
                              <img src="@/assets/images/404-error.png" alt="" class="img-fluid mx-auto d-block">
                           </div>
                        </div>
                     </div>
                  </div>
                  <h4 class="text-uppercase mt-4">Sorry, page not found</h4>
                  <p class="text-muted">
                     It's looking like you may have taken a wrong turn.
                     Don't worry... it happens to the best of us.
                  </p>
                  <div class="mt-5">
                     <router-link :to="{ name: 'admin-index' }" class="btn btn-primary waves-effect waves-light">
                        Back to Dashboard
                     </router-link>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
   document.body.classList.add(
      "authentication-bg"
   );
});

onUnmounted(() => {
   document.body.classList.remove(
      "authentication-bg"
   );
});
</script>