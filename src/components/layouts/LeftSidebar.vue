<template>
  <div class="vertical-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <a href="javascript: void(0);" class="logo logo-dark">
        <span class="logo-sm">
          <img src="@/assets/images/panda.png" alt="" height="28" />
        </span>
        <span class="logo-lg">
          <img src="@/assets/images/panda.png" alt="" height="28" />
        </span>
      </a>

      <a href="javascript: void(0);" class="logo logo-light">
        <span class="logo-sm">
          <img src="@/assets/images/panda.png" alt="" height="28" />
        </span>
        <span class="logo-lg">
          <img src="@/assets/images/panda.png" alt="" height="28" />
        </span>
      </a>
    </div>

    <button
      type="button"
      class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
    >
      <i class="fa fa-fw fa-bars"></i>
    </button>

    <div data-simplebar class="sidebar-menu-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <!-- <li class="menu-title">Sticker Store</li>
               <li>
                  <a href="javascript: void(0);">
                     <i class='bx bx-desktop'></i>
                     <span class="badge rounded-pill bg-primary float-end">01</span>
                     <span>Dashboard</span>
                  </a>
               </li> -->

          <template v-if="hasPermissions([])">
            <li class="menu-title">Category Management</li>
            <li v-if="hasPermissions([])">
              <router-link :to="{ name: 'main-category' }">
                <i class="bx bx-customize"></i>
                <span>Main Category</span>
              </router-link>
            </li>
            <li v-if="hasPermissions([])">
              <router-link :to="{ name: 'sub-category' }">
                <i class="bx bx-sticker"></i>
                <span>Sub Category</span>
              </router-link>
            </li>
          </template>

          <template
            v-if="
              hasPermissions(['all-user', 'all-role', 'all-permission']) ||
              hasRoles(['Developer'])
            "
          >
            <li class="menu-title">Administrator</li>
            <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="uil-user-circle"></i>
                <span>User Management</span>
              </a>
              <ul class="sub-menu" aria-expanded="false">
                <li v-if="hasPermissions(['all-user'])">
                  <router-link :to="{ name: 'users' }"> Users </router-link>
                </li>
                <li v-if="hasPermissions(['all-role'])">
                  <router-link :to="{ name: 'roles' }"> Roles </router-link>
                </li>
                <li v-if="hasPermissions(['all-permission'])">
                  <router-link :to="{ name: 'permissions' }">
                    Permissions
                  </router-link>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>

<script setup>
import { hasPermissions, hasRoles } from "@/composables/checkAuthorize";
</script>
