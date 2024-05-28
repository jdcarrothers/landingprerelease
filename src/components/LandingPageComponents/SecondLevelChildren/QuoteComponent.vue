<template>
  <div class="container">
    <!-- Star Rating Section -->
    <div class="rating">
      <svg
        v-for="n in 5"
        :key="n"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="star"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>

    <!-- Content Section -->
    <div class="content">
      <p>
        <span class="highlight">"Marking used to take up my entire evening."</span>
        Now, with Socratique, it's done in minutes, accurately and fairly.
      </p>
      <p>
        Socratique has revolutionized how we handle assessments. It's reliable and
        incredibly efficient.
      </p>
    </div>

    <!-- User Feedback Section -->
    <div class="feedback">
      <img
        src="https://menlocoa.org/wp-content/uploads/2020/10/CarunchiaProfilePic.jpg"
        alt="User testimonial image"
        class="profile-pic"
      />
      <div class="user-info">
        <p class="user-name">Mark Alexander</p>
        <p class="followers">Biology teacher at Methody</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingComponent",
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 64px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.rating {
  display: flex;
  justify-content: center;
}

.star {
  width: 20px;
  height: 20px;
  color: #ffd700;
}

.content {
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
}

.highlight {
  background-color: rgba(255, 255, 0, 0.8);
  padding: 3px;
}

.feedback {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.profile-pic {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-name {
  font-weight: bold;
}

.followers {
  color: #666;
  font-size: 14px;
}
</style>
