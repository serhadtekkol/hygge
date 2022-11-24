<template>
  <div class="px-4 py-4">
    <div class="grid grid-cols-4 gap-4 h-40 mt-8">
      <div class="px-4 py-4">
        <div class="bg-orange-400 text-white px-4 py-4 text-sm rounded-2xl">
          <div class="flex">
            <div class="w-32 text-center">
              <i class="far fa-users fa-3x"></i>
              <div class="uppercase text-xs tracking-wider mt-3">Kayıtlı Üye</div>
            </div>
            <div class="flex-auto"></div>
            <div class="w-32 align-middle text-center">
              <label class="text-5xl align-middle">88</label>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-4">
        <div class="bg-orange-400 text-white px-4 py-4 text-sm rounded-2xl">
          <div class="flex">
            <div class="w-32 text-center">
              <i class="far fa-user fa-3x"></i>
              <div class="uppercase text-xs tracking-wider mt-3">Yeni Üye</div>
            </div>
            <div class="flex-auto"></div>
            <div class="w-32 align-middle text-center">
              <label class="text-5xl align-middle">48</label>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-4">
        <div class="bg-orange-400 text-white px-4 py-4 text-sm rounded-2xl">
          <div class="flex">
            <div class="w-32 text-center">
              <i class="far fa-person-to-door fa-3x"></i>
              <div class="uppercase text-xs tracking-wider mt-3">Gelen</div>
            </div>
            <div class="flex-auto"></div>
            <div class="w-32 align-middle text-center">
              <label class="text-5xl align-middle">48</label>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-4">
        <div class="bg-orange-400 text-white px-4 py-4 text-sm rounded-2xl">
          <div class="flex">
            <div class="w-32 text-center">
              <i class="far fa-person-walking-luggage fa-3x"></i>
              <div class="uppercase text-xs tracking-wider mt-3">Üyelik Sonu</div>
            </div>
            <div class="flex-auto"></div>
            <div class="w-32 align-middle text-center">
              <label class="text-5xl align-middle">48</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <notificationsVue></notificationsVue>
  </div>
</template>
<script>
import notificationsVue from "./notifications.vue";

export default {
  components: {
    notificationsVue,
  },
};
</script>
